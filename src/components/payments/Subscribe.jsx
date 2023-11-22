import { Container, Heading, VStack,Box,Text, Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { server } from '../../redux/store'
import { buySubscription } from '../../redux/actions/user'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import logo from "../../assets/images/logo.png"
const Subscribe = ({user}) => {
  const dispstch = useDispatch()
  const [key,setKey]= useState("")

  const {loading,error,subscriptionId} =useSelector(state=>state.subscription);

const {error:courseError} = useSelector(
  state=>state.course
)

const subscribeHandler= async()=>{
 const {data:{
  key
 }}=  await axios.get(`${server}/razorpaykey`);
setKey(key);
 dispstch(buySubscription())
};
useEffect(()=>{
if(error){
  toast.error(error);
  dispstch({type:'clearError'})
}
if(courseError){
  toast.error(courseError);
  dispstch({type:'clearError'})
}

if(subscriptionId){
  const openPopUp=()=>{
   
    const options={

      key,
      name: "course",
      description:"Get access to all premium content",
      image:logo,
      subscription_id:subscriptionId,
      callback_url:`${server}/paymentverification`,
      prefil:{
        name:user.name,
        email: user.email,
        contact:""
      },
      notes:{
        address:"programmer"
      }, 
      theme:{
        color:"#FFC800" 
      } 
    };

    const razor= new window.Razorpay(options);
    razor.open();


  }
  openPopUp();
}
},[dispstch,error, user.name,courseError, user.email,key,subscriptionId])

  return (
    <Container h="90vh" p="16">
        <Heading children="Welcome" my="8" textAlign={"center"}/>
        <VStack boxShadow={"lg"} alignItems={"stretch"} borderRadius={"lg"} spacing={"0"}>
            <Box bg="purple.400" p={"4"} css={{borderRadius:"8px 8px 0 0 "}}>
                
                <Text color={"black"} children={`pack -  ₹299.00`}/>
            </Box>
            <Box>
                <VStack textAlign={"center" } px="8" mt={'4'} spacing={"8"}>
                <Text  children={`Join pro pack and get access to all content`}/>
                <Heading size={"md"} children={' ₹299 Only'}/>
                </VStack> 
                <Button onClick={subscribeHandler} my="8" w="full" colorScheme={'purple'} isLoading={loading} >Buy Now</Button>
            </Box>
           <Box bg="blackAlpha.600" p="4" css={{ borderRadius: "0 0 8px 8px"}}>
           <Heading color={"white"} textTransform={"uppercase"} size={"sm"} children={'100% refund at cancellation'}/>
           <Text fontSize={"xs"} color={"white"} children={"*Teerms & Condition Apply"}/>
           </Box>
        </VStack>

    </Container>
  )
}

export default Subscribe