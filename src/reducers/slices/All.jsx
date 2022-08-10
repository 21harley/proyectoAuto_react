import { combineReducers } from '@reduxjs/toolkit'
import User from "./User";
import Gauge from "./Gauge";

const reducerAll = combineReducers({User, Gauge})

export default reducerAll