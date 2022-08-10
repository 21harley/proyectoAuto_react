import { configureStore } from '@reduxjs/toolkit'
import reducerAll from './slices/All'

const store = configureStore({
  reducer: {
    reducerAll,
  }
})

export default store