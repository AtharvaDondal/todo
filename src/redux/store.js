
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "./reducers/todoReducer";
import {notificationReducer} from './reducers/notificationReducer';

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

export const store = configureStore({
    reducer:{
        todoReducer,
        notificationReducer
    }
})

