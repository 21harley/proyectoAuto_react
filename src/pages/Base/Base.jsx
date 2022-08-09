import { useEffect} from 'react'
import { Outlet } from "react-router-dom"
import GaugeTemper from "../../components/GaugeTemper/GaugeTemper"
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../reducers/slices/Gauge";

const Base = () => {
    const { data } = useSelector((state) => state.reducerAll.Gauge);
    const dispatch = useDispatch()

    useEffect(()=>{
        const valueGauge = 50 //aqui puede ir el valor que saque de firebase
        dispatch(setData({temperature:valueGauge}))
    },[])
    

    return (
        <div>
            <Outlet />
            <GaugeTemper gauge_data={data} />
        </div>
    )
}

export default Base