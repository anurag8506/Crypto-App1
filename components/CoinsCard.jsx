import { Heading, Image, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

const CoinsCard = ({id, name, img, symbol, price, currencySymbol = "₹"}) => {
  return (
    <>
        <Link to={`/coins/${id}`}>
            <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'} css={{
                "&:hover":{
                    transform: "Scale(1.1)",
                }
                }}>
                <Image src={img} w={'20'} h={'20'} objectFit={'contain'} alt={'exchange'}/>
                <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
                <Text noOfLines={1}>{name}</Text>
                <Text noOfLines={1}>{price? `${currencySymbol}${price}`: "NA"}</Text>
            </VStack>
        </Link>
    </>
  )
}

export default CoinsCard