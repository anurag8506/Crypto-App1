import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CustomBar = ({high,low}) => {
  return (
    <VStack w={'full'}>
        <Progress value={50} colorScheme={'gray'} w={'full'}/>
        <HStack justifyContent={'space-between'} w={'full'}>
            <Badge children={low} colorScheme={'red'}/>
            <Text fontSize={'sm'}>24h Range</Text>
            <Badge children={high} colorScheme={'green'}/>
        </HStack>
    </VStack>
  )
}

export default CustomBar