import React from 'react'
import {Flex , Image , useColorMode} from '@chakra-ui/react';

const Header = () => {

    const { colorMode , toggleColorMode } = useColorMode()
  return (
    
    <Flex justifyContent={"Center"} mt={6} mb="12">
        <Image 
        w={6}
        cursor="pointer"
        alt="logo" 
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
        />

    </Flex>
  )
}

export default Header
