import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import{Link} from"react-router-dom"
import introVideo from "../../assets/videos/intro.mp4"
import{RiSecurePaymentFill} from "react-icons/ri"
import termsAndConditionals from "../../assets/docs/termAndConditin"
const Founder=()=>(
  <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
    <VStack>
      <Avatar boxSize={["40","48"]}/>
      <Text children="Co-Founder" opacity={0.7}/>
    </VStack>
   <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
    <Heading children="Priyanshu Verma" size={["md","xl"]}/>
    <Text 
    textAlign={["center","left"]}
    children={`Hi I am a full stack devloper`}/>
   </VStack>
  </Stack>
);

const VedioPlayer=()=>(
 <Box>
  <video 
    autoPlay
    muted
    loop
    controls 
    disableRemotePlayback
    disablePictureInPicture
    controlsList='nodownload nofullscreen noremoteplayback'
    src={introVideo}
    
    >

    </video>
 </Box>

);

const TandC =({termsAndCondition})=>(
  <Box>
    <Heading size={"md"} children="Terms & Condition" textAlign={["center","left"]} my="4"/>
    <Box h="sm" p="4" overflowY={"scroll"}>
 <Text fontFamily={"heading"} letterSpacing={"widest"}
 textAlign={["center","left"]}>{termsAndCondition}</Text>
 <Heading my="4" size={"xs"} children="Refund only applicable for cancellation within 7 days" />
    </Box>
  </Box>
)

const About = () => {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
      <Heading children="About us" textAlign={["center","left"]}/>
     <Founder/>
     <Stack m="8" direction={["column","row"]} alignItems="center">
     <Text fontFamily={"cursive"} m="8" alignItems={["center","left"]}>
      We are a vedio streaming plateform with some premiun courses
     </Text>
     <Link to= "/subscribe">
      <Button variant={"ghost"} colorScheme='purple'>
     Checkout Our Plan
      </Button>
     </Link>
     </Stack>
     <VedioPlayer/>
     <TandC termsAndCondition={termsAndConditionals}/>
     <HStack my="4" p="4">
      <RiSecurePaymentFill/>
      <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children={"Payment is secured by Razorpay"}/>
     </HStack>
    </Container>
  )
}

export default About