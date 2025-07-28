'use server'

import axios from 'axios'
import UAParser from 'ua-parser-js'
import { headers } from 'next/headers'
import { cookies } from 'next/headers'

import { hash } from '@/lib/utils'
import { findip } from '@/lib/findip'

export const sendFacebookTracking = async ({
  name,
  phone,
  eventId,
  extraData,
  eventName,
  testEventCode,
}: {
  name?: string
  phone?: string
  eventId: string
  eventName: string
  testEventCode?: string | null
  extraData?: Record<string, unknown>
}) => {
  const cookieStore = cookies()

  const pixelId = process.env.FACEBOOK_PIXEL_ID
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

  if (!pixelId || !accessToken) {
    console.error('Facebook pixel id or access token not found')
    return
  }

  try {
    const { ip, location, userAgent } = await requestLocationAndBrowser()

    const fbp = cookieStore.get('_fbp')?.value ?? null
    const fbc = cookieStore.get('_fbc')?.value ?? null

    const nameParts = name?.trim().split(/\s+/) ?? []
    const firstName = nameParts[0] ? hash(nameParts[0].toLowerCase()) : null

    const lastName =
      nameParts.length > 1
        ? hash(nameParts.slice(1).join(' ').toLowerCase())
        : null

    const formattedPhone = phone?.replace(/\D/g, '') ?? null

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventData: Record<string, any> = {
      data: [
        {
          event_id: eventId,
          event_name: eventName,
          action_source: 'website',
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: 'https://captacao.matratecnologia.com',
          user_data: {
            fbp,
            fbc,
            ln: lastName,
            fn: firstName,
            client_ip_address: ip,
            ct: hash(location?.city),
            st: hash(location?.state),
            client_user_agent: userAgent,
            country: hash(location?.country),
            ph: formattedPhone ? hash(formattedPhone) : null,
          },
          custom_data: extraData,
        },
      ],
    }

    if (testEventCode) {
      eventData.test_event_code = testEventCode
    }

    const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`

    const response = await axios.post(url, eventData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log({
      eventName,
      response: response.data,
      user_data: {
        fbp,
        fbc,
        nameParts,
        ln: lastName,
        fn: firstName,
        ct: location?.city,
        ph: formattedPhone,
        st: location?.state,
        client_ip_address: ip,
        country: location?.country,
        client_user_agent: userAgent,
      },
    })
  } catch (error) {
    console.error('Error sending facebook tracking', {
      eventName,
      error: error instanceof Error ? error.message : error,
    })
  }
}

export const requestLocationAndBrowser = async () => {
  const header = headers()

  const parser = new UAParser()
  const browser = header.get('user-agent')

  if (browser) {
    parser.setUA(browser)
  }

  let ip = header.get('x-real-ip') || header.get('x-forwarded-for')

  if (process.env.NODE_ENV === 'development') {
    ip = '::1'
  }

  const address = ip ? await findip(ip) : null

  return {
    ip,
    os: parser.getOS().name,
    browser: parser.getBrowser().name,
    userAgent: header.get('user-agent'),
    location: {
      city: address?.city.names?.en,
      lat: address?.location?.latitude,
      lon: address?.location?.longitude,
      country: address?.country?.iso_code,
      timezone: address?.location?.time_zone,
      state: address?.subdivisions?.[0]?.iso_code,
    },
  }
}
