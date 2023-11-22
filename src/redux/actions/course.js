import { server } from "../store";
import axios from "axios"

export const getAllcourses= (category="",keyword="")=> async dispatch=>{
    try {
        dispatch({type:'allCoursesRequest'}); 

const {data}= await axios.get(
    `${server}/courses?keyword=${keyword}&category=${category}`,
    {headers:{
        'content-type': 'application/json',
       },
    withCredentials: true,
    }
);


        dispatch({type:'allCoursesSuccess',payload:data})
        
    } 
    catch(error){
        if(error.response){
            dispatch({type:"allCoursesFail",payload: error.response.data.message})
        }else if (error.request) {
            // The request was made but no response was received
            dispatch({ type: "allCoursesFail", payload: "No response received from the server" });
        } else {
            // Something happened in setting up the request that triggered an Error
            dispatch({ type: "allCoursesFail", payload: "Error setting up the request" });
        }
    
    
    }
    
    // catch (error) {
    //     dispatch({type:'allCoursesFail',
    // payload: error.response.data.message,
    // })
    // }   

}

export const getCourseLectures= (id)=> async dispatch=>{
    try {
        dispatch({type:'getCoursesRequest'}); 

const {data}= await axios.get(
    `${server}/course/${id}` ,
    {
        withCredentials: true,
        }
);
console.log(data)
 
        dispatch({type:'getCoursesSuccess',payload:data.lectures})
    } catch (error) {
        dispatch({type:'getCoursesFail',
    payload: error.response.data.message,
    })
    }   
}

