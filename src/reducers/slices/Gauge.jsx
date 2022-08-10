import { createSlice } from '@reduxjs/toolkit'

const initialState  = {
    data:[
        ['Label', 'Value'],
        ['Cº', 0],
    ]
}

const GaugeSlice = createSlice({
    name:"gauge",
    initialState ,
    reducers:{
        setData:(state, action)=>{
            state.data[1][1] =  action.payload.temperature
        }
    }
})

export const { setData } = GaugeSlice.actions

export default GaugeSlice.reducer