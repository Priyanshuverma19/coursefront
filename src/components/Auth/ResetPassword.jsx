import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {
    const [password,setPassword]= useState("");
    const params= useParams();
    const navigate= useNavigate();

    const {loading ,message,error} =useSelector(state=>state.profile)
    const dispatch=useDispatch()
    const submitHandler= (e)=>{
      e.preventDefault();
      dispatch(resetPassword(params.token,password));
    };
    useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:"clearError"})
    }
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"})
      navigate("/login");
    }
    }, [dispatch,error, message,loading]);
    console.log(params.token)
  return (
   <Container py={"16"} height={"90vh"}>
    <form onSubmit={submitHandler}>
        <Heading
        children="Reset Password"
        my="16"
        textTransform={"uppercase"}
        textAlign={["center","left"]}
        />
        <VStack spacing={"8"}>
        <Input
        required
       
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter new password"
        type={"password"}
        focusBorderColor='purple.500'
        />
        <Button isLoading={loading} type='submit'
        width={"full"}
        colorScheme='purple'
        > Reset Password</Button>

        </VStack>
    </form>
   </Container>
  )
}
export default ResetPassword