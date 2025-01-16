import CryptoJS from 'crypto-js'
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const facebookPixelEvent = ({
  eventId,
  eventName,
  extraData,
  trackType = 'track',
}: {
  eventId: string
  eventName: string
  trackType: 'track' | 'trackCustom'
  extraData?: Record<string, string>
}) => {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
  window.fbq(trackType, eventName, extraData, { eventID: eventId })
}

export const hash = (value?: string) => {
  if (!value) return null

  const normalizedValue = String(value).trim().toLowerCase()
  return CryptoJS.SHA256(normalizedValue).toString(CryptoJS.enc.Hex)
}
