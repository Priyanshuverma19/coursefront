import { createReducer } from "@reduxjs/toolkit";

export const useReducer= createReducer({},{
    loginRequest:(state)=>{
        state.loading = true;
    },
    loginSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user= action.payload.user;
        state.message= action.payload.message;
    },
    loginFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error= action.payload;
       

    },

    registerRequest:(state)=>{
        state.loading = true;
    },
    registerSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user= action.payload.user;
        state.message= action.payload.message;
    },
    registerFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error= action.payload;
       

    },

    logoutRequest:(state)=>{
        state.loading = true;
    },
    logoutSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.user= null;
        state.message= action.payload;
    },
    logoutFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error= action.payload;
       

    },

    loadUserRequest:(state)=>{
        state.loading = true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user= action.payload;
        state.message= action.payload.message;
    },
    loadUserFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error= action.payload;
       

    },
    clearError:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message= null;
    }
});

export const profileReducer= createReducer({},{
    updateProfileRequest:(state)=>{
        state.loading= true;
    },
    updateProfileSucces:(state, action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    updateProfileFail:(state, action)=>{
        state.loading= false;
        state.error= action.payload;
    },
    changePasswordRequest:(state)=>{
        state.loading= true;
    },

    changePasswordSucces:(state, action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    changePasswordFail:(state, action)=>{
        state.loading= false;
        state.error= action.payload;
    },

    updateProfilePictureSucces:(state, action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    updateProfilePictureFail:(state, action)=>{
        state.loading= false;
        state.error= action.payload;
    },

    updateProfilePictureRequest:(state)=>{
        state.loading= true;
    },
    forgetPasswordRequest:(state)=>{
        state.loading= true;
    },
    forgetPasswordSucces:(state, action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    forgetPasswordFail:(state, action)=>{
        state.loading= false;
        state.error= action.payload;
    },
    resetPasswordRequest:(state)=>{
        state.loading= true;
    },
    resetPasswordSucces:(state, action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    resetPasswordFail:(state, action)=>{
        state.loading= false;
        state.error= action.payload;
    },

    removeFromPlaylistRequest:(state)=>{
        state.loading= true;
    },
    removeFromPlaylistSucces:(state, action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    removeFromPlaylistFail:(state, action)=>{
        state.loading= false;
        state.error= action.payload;
    },


   
    clearError:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message= null;
    }
})

export const subscriptionReducer= createReducer({},{
    buySubscriptionRequest: (state)=>{
        state.loading= true;
    },
    buySubscriptionSuccess: (state,action)=>{
        state.loading= false;
        state.subscriptionId= action.payload;
    },
    buySubscriptionFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    },
    
    cancelSubscriptionRequest: (state)=>{
        state.loading= true;
    },
    cancelSubscriptionSuccess: (state,action)=>{
        state.loading= false;
        state.message= action.payload;
    },
    cancelSubscriptionFail: (state,action)=>{
        state.loading= false;
        state.error= action.payload;
    },
    clearError:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message= null;
    }
});

