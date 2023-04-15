import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box>
        <Flex paddingTop={10} justifyContent='center' alignItems='center'>
            <Image src='./public/images/openai.png' />
            <Text>
                Powered by open AI
            </Text>
        </Flex>

    </Box>
  )
}

export default Footer