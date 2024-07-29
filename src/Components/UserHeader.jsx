import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { VStack, Box, Flex, Text, MenuButton, Portal, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import { Menu, MenuItem , MenuList } from '@chakra-ui/react';


const UserHeader = () => {

  const toast = useToast()
  const copyURL= ()=>{
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        title: 'Link copied!',
        description: 'The URL has been copied to your clipboard.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }, () => {
      toast({
        title: 'Oops! URL not copied',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    });

  }


  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>Mark Zuckerberg</Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>markzuckerberg</Text>
            <Text fontSize={"xs"} bg={'grey.light'} color={"gray.light"} p={1} borderRadius={"full"}>
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar 
            name="Mark Zuckerberg"
            src="/zuck-avatar.png"
            size={{
              base : "md",
              md :"xl" }}
           />
        </Box>   
      </Flex>
      <Text>cofounder, chairman of facebook, owner of meta</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link to="https://instagram.com" color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex gap={3}>
          <Box className='icon-container'>
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
            
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"}>
        <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1.5px solid gray"} color={"gray.light"} justifyContent={"center"} pb="3" cursor={"pointer"}>
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
