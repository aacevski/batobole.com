import { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NextSeo
      title="Happy birthday, Bato Bole! 🎉"
      description="We love you, Bato Bole! 🎉"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',

      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/boshe.ico',
        }
      ]}
    />
      <body style={{ overflow: 'hidden' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
