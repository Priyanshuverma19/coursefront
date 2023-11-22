import { createReducer } from "@reduxjs/toolkit";


export const  adminReducer= createReducer({
    
},{


    getAdminStatsRequest: state=>{
        state.loading= true;
    },
    getAdminStatsSuccess: (state,action)=>{
        state.loading= false;
        state.stats= action.payload.stats;
        state.userCount= action.payload.userCount;
        state.subscriptionCount= action.payload.subscriptionCount;
        state.viewsCount= action.payload.viewsCount;
        state.subscriptionPercentage= action.payload.subscriptionPercentage;
        state.viewsPercentage= action.payload.viewsPercentage;
        state.usersPercentage= action.payload.usersPercentage;
        state.subscriptionProfit= action.payload.subscriptionProfit;
        state.viewsProfit= action.payload.viewsProfit;
        state.usersProfit= action.payload.usersProfit;
    },
    getAdminStatsFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    }, 


    updateUserRolesRequest: state=>{
        state.loading= true;
    },
    updateUserRolesSuccess: (state,action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    updateUserRolesFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    }, 

    deleteUsersRequest: state=>{
        state.loading= true;
    },
    deleteUsersSuccess: (state,action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    deleteUsersFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    }, 

    getAllUsersRequest: state=>{
        state.loading= true;
    },
    getAllUsersSuccess: (state,action)=>{
        state.loading= false;
        state.users= action.payload;
    },
    getAllUsersFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    }, 
    createCourseRequest: state=>{
        state.loading= true;
    },
    createCourseSuccess: (state,action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    createCourseFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    },  
    deleteCourseRequest: state=>{
        state.loading= true;
    },
    deleteCourseSuccess: (state,action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    deleteCourseFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    },
    addLectureRequest: state=>{
        state.loading= true;
    },
    addLectureSuccess: (state,action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    addLectureFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    },

    deleteLectureRequest: state=>{
        state.loading= true;
    },
    deleteLectureSuccess: (state,action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    deleteLectureFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    },
    clearError:state=>{
        state.error= null;
    },
    claerMessage:state=>{
        state.message= null;
    }
})