import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profile';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

const ForgetPassword = () => {
    const [email,setEmail]= useState("");

    const {loading ,message,error} =useSelector(state=>state.profile)
    const dispatch=useDispatch()
    const submitHandler= (e)=>{
      e.preventDefault();
      dispatch(forgetPassword(email));
    };
    useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:"clearError"})
    }
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"})
    }
    }, [dispatch,error, message]); 
    
  return (
   <Container py={"16"} height={"90vh"}>
    <form onSubmit={submitHandler}>
        <Heading
        children="Forget Password"
        textTransform={"uppercase"}
        textAlign={["center","left"]}
        />
        <VStack spacing={"8"}>
        <Input
        required
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type={"text"}
        focusBorderColor='purple.500'
        />
        <Button isLoading={loading} type='submit'
        width={"full"}
        colorScheme='purple'
        > Send Reset Link</Button>

        </VStack>
    </form>
   </Container>
  )
}

export default ForgetPassword