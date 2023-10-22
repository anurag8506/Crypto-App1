import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import bg from "../assets/icon.png"
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={"black"} w={'full'} h={'100vh'}>
      <motion.div style={{height:"80vh"}} animate={{translateY:"20px"}} transition={{duration:2,repeat:Infinity,repeatType:"reverse"}}>
      <Image w={'full'} h={'full'} objectFit={'contain'} src={bg}/>
      </motion.div>
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'bold'} color={'whiteAlpha.900'} mt={['-28','-25']}>Know Crypto</Text>
    </Box>
  )
}

export default Home