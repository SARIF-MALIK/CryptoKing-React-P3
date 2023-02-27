import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'; 
import btcSrc from '../assets/btc.png'; 
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} >
      <Image src={btcSrc} w={"full"} h={'full'} objectFit={"contain"}/>
      <Text fontSize="6xl" textAlign="center" fontWeight="thin" color="whiteAlpha.700" m="-20">
      Crypto-King
      </Text>
    </Box>
  )
}

export default Home