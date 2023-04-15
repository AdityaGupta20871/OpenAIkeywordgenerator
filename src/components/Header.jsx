import { Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <>
    <Image src='./public/images/Leonardo_Diffusion_isometric_art_illustration_of_a_magnifying_glass_zooming_on_3.jpg' width={200} h={200} paddingTop={2}></Image>
    <Heading color='white'>AI Keyword Extractor</Heading>
    <Text fontSize={20} paddingTop={3} fontFamily='sans-serif' textAlign='center' >
    Paste in your text and find amazing keywords
    </Text>
    </>
  )
}

export default Header