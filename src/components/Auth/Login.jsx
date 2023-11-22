import React, { useState } from 'react'
import{Box, Button, Container, FormLabel, Heading, Input, VStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';
const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const dispatch= useDispatch()
const submitHandler =(e) => {
  e.preventDefault();
  dispatch(login(email,password));
}


  return (
    <Container h={"95vh"}>
 <VStack h={"full"} justifyContent="center" spacing={"16"} >
    <Heading children={" Welcom to Course"}/>
    <form onSubmit={submitHandler} style={{width:"100%"}}>
       <Box my={"4"}>
       <FormLabel htmlFor='email' children="Email Address"></FormLabel>
        <Input
        required
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type={"email"}
        focusBorderColor='purple.500'

        />
       </Box>
       <Box my={"4"}>
       <FormLabel htmlFor='password' children="Password"></FormLabel>
        <Input
        required
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
        type={"password"}
        focusBorderColor='purple.500'

        />
       </Box>
       <Box>
        <Link to="/forgetpassword">
        <Button variant="link" fontSize={"sm"}>Forget Password</Button>
        </Link>
      
       </Box>
       <Button my="4" colorScheme={"purple"} type='submit'>Login</Button>
      <Box my="4">
        New User?{' '}
        <Link to="/register">
          <Button variant="link" colorScheme={"purple"}>Sign Up</Button>{" "}here
        </Link>

      </Box>
    </form>
 </VStack>
    </Container>
  )
}

export default Login