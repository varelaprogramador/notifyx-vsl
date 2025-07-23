import './globals.css'

import Script from 'next/script'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { QueryProvider } from '@/providers/query-provider'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Captação | YESBARBER',
  description: 'Pagina de captação de leads',
  metadataBase: new URL('https://yeasbarber.matratecnologia.com'),
  alternates: {
    canonical: './',
  },
  other: {
    'facebook-domain-verification': '6jw96kz1oi3376orw13h3d39lmp0ue',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const sora = Sora({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={sora.className}>
      {process.env.FACEBOOK_PIXEL_ID &&
        process.env.NODE_ENV === 'production' && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.FACEBOOK_PIXEL_ID}');
                fbq('track', 'PageView');
                
                // Definir eventos padrão para o Facebook Pixel
                window.fbq.allowDuplicates = true;
                window.fbq.disablePushState = true;
              `}
            </Script>
            <noscript>
              <Image
                height="1"
                width="1"
                style={{ display: 'none' }}
                alt=""
                src={`https://www.facebook.com/tr?id=${process.env.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}

      <body className="flex size-full min-h-dvh flex-col overflow-x-hidden antialiased">
        <QueryProvider>
          <Toaster richColors closeButton position="top-center" />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
