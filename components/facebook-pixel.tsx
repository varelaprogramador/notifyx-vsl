'use client'

import { nanoid } from 'nanoid'
import { useEffect } from 'react'

import { facebookPixelEvent } from '@/lib/utils'
import { sendFacebookTracking } from '@/features/utils/actions'

export const FacebookPixel = () => {
  useEffect(() => {
    const handleTriggerPixel = () => {
      const eventId = nanoid()

      facebookPixelEvent({
        eventId,
        eventName: 'PageView',
        trackType: 'track',
        testEventCode: 'TEST36345',
        extraData: {
          page_title: document.title,
          referrer: document.referrer,
          user_language: navigator.language,
          page_path: window.location.pathname,
          screen_resolution: window.screen.width + 'x' + window.screen.height,
        },
      })

      sendFacebookTracking({
        eventId,
        eventName: 'PageView',
        testEventCode: 'TEST36345',
        extraData: {
          page_title: document.title,
          referrer: document.referrer,
          user_language: navigator.language,
          page_path: window.location.pathname,
          screen_resolution: window.screen.width + 'x' + window.screen.height,
        },
      })
    }

    handleTriggerPixel()
  }, [])

  return null
}
