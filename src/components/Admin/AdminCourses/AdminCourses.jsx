import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td,  Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBinFill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllcourses, getCourseLectures } from '../../../redux/actions/course'
import { addLecture, deleteCourse, deleteLecture } from '../../../redux/actions/admin'
import toast from 'react-hot-toast'


const AdminCourses = () => {
 
  const dispatch = useDispatch();
  const {courses,lectures} = useSelector(state=>state.course)
  const {loading,error,message} = useSelector(state=>state.admin)
  const {isOpen,onClose,onOpen} = useDisclosure();

  const [courseId, setCourseId] =useState("");
  const [courseTitle, setCourseTitle] =useState(" ")

  const courseDetailHandler=(courseId,title)=>{
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId)
    setCourseTitle(title)
  };
  const deleteButtonHandler =courseId=>{
    console.log(courseId);
    dispatch(deleteCourse(courseId))
  };
  const deleteLectureButtonHandler= async(courseId,lectureId)=>{
    
   await dispatch(deleteLecture(courseId,lectureId))
   dispatch(getCourseLectures(courseId));
    

  }
  const addLectureHandler= async(e,courseId,title,description,video)=>{
e.preventDefault();
e.preventDefault();
      const myForm = new FormData();
       
      myForm.append("title",title);
      myForm.append("description",description);
      myForm.append("file",video);
      await dispatch(addLecture(courseId,myForm));
      dispatch(getCourseLectures(courseId));
  }
  useEffect(()=>{
if(error){
  toast.error(error);
  dispatch({type:'clearMessage'}); 
}
if(message){
  toast.success(message);
  dispatch({type:'clearMessage'});
}

    dispatch(getAllcourses())
  },[dispatch,error,message,onClose])
 
  return (
    <Grid
    css={{
        cursor:`url(),default`
    }}
    minH={"100vh"} templateColumns={['1fr','5fr 1fr']}>
   <Box p={["0","8"]} overflowX={"auto"}>

   <Heading textTransform={"uppercase"}
    children="All Users"
    my={"16"}
    textAlign={["center","left"]}
    />
<TableContainer w={["100vw", "full"]}>
  <Table variant={"simple"}size="lg" >
    <TableCaption>All available courses </TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Poster</Th>
        <Th>Title</Th>
        <Th>Category</Th>
        <Th>Creator</Th>
        
        <Th isNumeric>Views</Th>
        <Th isNumeric>Lectures</Th>
        <Th isNumeric>Actions</Th>

      </Tr>
    </Thead>
    <Tbody>
{
  courses.map(item=>(
    <Row courseDetailHandler={courseDetailHandler} 

    deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}
    loading={loading}/>
  ))

}
    </Tbody>

  </Table>

</TableContainer>
<CourseModal 
isOpen={isOpen}
 onClose={onClose}
 id={courseId}
 courseTitle={courseTitle}
 deleteButtonHandler={deleteLectureButtonHandler}
  addLectureHandler={addLectureHandler}
  lectures={lectures}
  loading={loading} 
  />
   </Box>
  <Sidebar/>
    </Grid> 
  )
}



function  Row({item,courseDetailHandler,deleteButtonHandler,loading}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td textTransform={"uppercase"}>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.createBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button isLoading={loading} onClick={()=>courseDetailHandler(item._id,item.title)} variant={"outline"} color={"purple.500"}>View Lecture</Button>
          <Button isLoading={loading}   onClick={()=>deleteButtonHandler(item._id)} color={"purple.700"}>
            <RiDeleteBinFill/>
          </Button>

        </HStack>
      </Td>

      
      </Tr>
  )
}
export default AdminCourses