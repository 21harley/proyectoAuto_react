import { configureStore } from '@reduxjs/toolkit'
import User from './slices/User'

const store = configureStore({
  reducer: {
    User,
  }
})

export default store