import React, { useState } from 'react'
import {Flex , Avatar , Text} from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs';
import Actions from './Actions.jsx'

const Comments = ({comment , createdAt , likes , username, userAvatar}) => {
    const [liked , setLiked] =  useState(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={userAvatar} size={"sm"}/>
        <Flex  gap={1} w={"full"} flexDirection={"column"}>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"sm"} fontWeight={"bold"}>{username}</Text>
                <Flex gap={3}>
                    <Text fontSize={"sm"} color={"gray.light"}>2d</Text>
                    <BsThreeDots />
                </Flex>  
            </Flex>
            <Text fontSize={"sm"}>{comment}</Text>
            <Actions liked={liked} setLiked={setLiked}/>
            <Text fontSize={"sm"} color={"gray.light"}>
                { likes + (liked ? 1 : 0)} likes
            </Text>
        </Flex>
      </Flex>
      
      
    
    </>
  )
}

export default Comments;
