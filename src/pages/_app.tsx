import type { AppProps } from 'next/app'
import Script from 'next/script'

import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P1Q9WQGLSG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P1Q9WQGLSG');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
