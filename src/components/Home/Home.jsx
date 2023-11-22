import React from 'react'
import { Stack,VStack,
    Heading ,
    Text,
    Button,
 
    Image,
    } from '@chakra-ui/react'
import "./home.css"
import { Link } from 'react-router-dom'
import vg from "../../assets/images/vg.png"
 import introVideo from "../../assets/videos/intro.mp4"
const Home = () => {
  return (
    <section className='home'>
<div className="container">
    <Stack
    direction={['column','row' ]}
    height="100%"
    justifyContent={['center', 'space-between']}
    alignItems='center'
    spacing={['16','56']}
    >
        <VStack width={"full"} alignItems={['center','flex-end']} spacing="8">
        <Heading children=" LEARN FROM THE EXPERTS" size={'2xl'}/>
        <Text
        fontSize={'2xl'}
        fontFamily="cursive"
        textAlign={['center', 'left']}
         children="Find Valueable Content Free"/>
        <Link to="/courses">
            <Button colorScheme="purple" variant="solid" size="lg">
               Explore Now
            </Button>
        </Link>
        </VStack>
        <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain"/>
    </Stack>
</div>

<div className="container2">
    <video 
    
    controls 
    disableRemotePlayback
    disablePictureInPicture
    controlsList='nodownload nofullscreen noremoteplayback'
    src={introVideo}
    
    >

    </video>
</div>

    </section>
  )
}


export default Home