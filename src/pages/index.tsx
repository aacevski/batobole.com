import { Image, VStack } from '@chakra-ui/react'
import { useWindowSize } from 'react-use'

import ReactConfetti from 'react-confetti'
import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if(!isVisible) return null

  return (
    <>
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
    <ReactConfetti
    width={window.innerWidth}
    height={window.innerHeight}
  />
    <VStack h="100vh" w="full" align="center" justify="center" background="linear-gradient(to right, #141e30, #243b55)" m={0} overflow="hidden">
    <Image w="1000px" src="/vaucer.png" alt="vaucer"/>
    </VStack>
    </>
  )
}
