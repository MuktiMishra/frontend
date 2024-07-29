import React from 'react'
import {Flex , Avatar, Button , Text , Image , Box, Divider} from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../Components/Actions.jsx'
import Comments from '../Components/Comments.jsx'

const PostPage = ({liked , setLiked}) => {
  return (
    <>
    <Flex>
      <Flex w={"full"} alignItems={"center"} gap={3}>
        <Avatar src='zuck-avtar.png' size={"md"} name='Mark Zuckerberg'/>
        <Flex>
          <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
          <Image src='/verified.png' w={4} h={4} ml={4}/>
        </Flex>
      </Flex>
      <Flex gap={4} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>
          1d
        </Text>
        <BsThreeDots />
      </Flex>
    </Flex>
    <Text my={3}>Lets talk about threads</Text>
    <Box borderRadius={6} overflow={"hidden"} border={"1px solid "} borderColor={"gray.light"}>
      <Image w={"full"} src={"/post1.png"} />
    </Box>

    <Flex gap={3} my={3}>
      <Actions liked={liked} setLiked={setLiked}/>
    </Flex>

    <Flex gap={2} alignItems={"center"}>
      <Text color={"gray.light"} fontSize={"sm"} >238 replies</Text>
      <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
      <Text color={"gray.light"} fontSize={"sm"} >
        {200 + (liked ? 1 : 0)} likes
      </Text>
    </Flex>
    <Divider my={4}/>
    <Flex justifyContent={"space-between"}>
      <Flex  gap={2} alignItems={"center"}>
        <Text fontSize={"2xl"}>👋</Text>
        <Text color={"gray.light"}>Get the app to like , reply and post.</Text>
      </Flex>
      <Button>
        Get 
      </Button>
    </Flex>
    <Divider my={4}/>
    <Comments comment="Looks really great" createdAt="2d" likes={100} username="jhondoe" userAvatar="https://rb.gy/88pq9d"/>
    <Comments comment="Damn good" createdAt="1d" likes={406} username="allensoy" userAvatar="https://rb.gy/r12zcl"/>
    <Comments comment="I really appreciate the work!" createdAt="1h" likes={120} username="radhikamerchant" userAvatar="https://rb.gy/umgloi"/>
    <Comments comment="Nice work!!" createdAt="2d" likes={98} username="rajsharma" userAvatar="https://rb.gy/cqzyv0"/>
    </>
  )
}

export default PostPage;

