import { server } from "../store";
import axios from "axios"

export const login=(email,password)=> async dispatch=>{
    try {
       dispatch({type:"loginRequest"});

       const {data}= await axios.post(`${server}/login`,{email,password},{headers:{
        'content-type': 'application/json',
       },
    withCredentials: true,
    });
    
    dispatch({type:"loginSuccess",payload : data});
        
    } catch (error) {
        dispatch({type:"loginFail",payload : error.response.data.message});
        
    }
};

export const register=(formdata)=> async dispatch=>{
    try {
       dispatch({type:"registerRequest"});

       const {data}= await axios.post(
        `${server}/register`,
        formdata,{headers:{
        'content-type': 'multipart/form-data',
       },
    withCredentials: true,
    });
   
    dispatch({type:"registerSuccess",payload : data});
        
    } catch (error) {
        dispatch({type:"registerFail",payload : error.response.data.message});
        
    }
};

export const loadUser=()=>async(dispatch)=>{ 
    try {
       dispatch({type:"loadUserRequest"});

       const {data}= await axios.get(`${server}/me`,
       
       
       {
        headers:{
            'content-type': 'multipart/form-data',
           },
    withCredentials: true,
    });
    
    dispatch({type:"loadUserSuccess",payload:data.user});
        
    } 
    catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            dispatch({ type: "loadUserFail", payload: error.response.data.message });
        } else if (error.request) {
            // The request was made but no response was received
            dispatch({ type: "loadUserFail", payload: "No response received from the server" });
        } else {
            // Something happened in setting up the request that triggered an Error
            dispatch({ type: "loadUserFail", payload: "Error setting up the request" });
        }
    }
    
    // catch (error) {
    //     dispatch({type:"loadUserFail",payload:error.response.data.message});
        
    // }
}

export const logout=()=>async(dispatch)=>{
    try {
       dispatch({type:"logoutRequest"});

       const {data}= await axios.get(`${server}/logout`,{
    withCredentials: true,
    });
    console.log(data);
    dispatch({type:"logoutSuccess",payload:data.message});
        
    } catch (error) {
        dispatch({type:"logoutFail",payload:error.response.data.message});
         
    }
}
 
export const buySubscription=()=> async dispatch=>{
    try {
       dispatch({type:"buySubscriptionRequest"});

       const {data}= await axios.get(`${server}/subscribe`,
       {
    withCredentials: true,
    });
    
    dispatch({type:"buySubscriptionSuccess",payload : data.subscriptionId});
        
    } catch (error) {
        dispatch({type:"buySubscriptionFail",payload : error.response.data.message});
        
    }
};

export const cancelSubscription=()=> async dispatch=>{
    try {
       dispatch({type:"cancelSubscriptionRequest"});

       const {data}= await axios.delete(`${server}/subscribe/cancel`,
       {
    withCredentials: true,
    });
    console.log(data);
    dispatch({type:"cancelSubscriptionSuccess",payload : data.message});
        
    } catch (error) {
        dispatch({type:"cancelSubscriptionFail",payload : error.response.data.message});
        
    }
};