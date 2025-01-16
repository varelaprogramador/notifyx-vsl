import axios from 'axios'

import type { GeographicData } from '@/types/findip'

export const findip = async (ip: string): Promise<GeographicData | null> => {
  try {
    const response = await axios.get<GeographicData>(
      `https://api.findip.net/${ip}/?token=${process.env.FIND_IP_API_TOKEN}`,
    )

    return response.data
  } catch {
    return null
  }
}
