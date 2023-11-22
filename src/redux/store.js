import { configureStore } from "@reduxjs/toolkit";
import { profileReducer, subscriptionReducer, useReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";
import { adminReducer } from "./reducers/adminReducer";
import { otherReducer } from "./reducers/otherReducer";




const store = configureStore({
    reducer:{
        user:useReducer,
        profile:profileReducer,
        course:courseReducer,
        subscription:subscriptionReducer,
        admin: adminReducer,
        other:otherReducer,
    },
})

export default store;

export const server= "https://mycourse-ten.vercel.app/api/v2";
//
