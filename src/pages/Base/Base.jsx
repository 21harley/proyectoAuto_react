import { Outlet } from "react-router-dom"
import GaugeTemper from "../../components/GaugeTemper/GaugeTemper"
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../reducers/slices/Gauge";

const Base = () => {
    const { data } = useSelector((state) => state.reducerAll.Gauge);
    const dispatch = useDispatch()
    

    return (
        <div>
            <Outlet />
            <GaugeTemper gauge_data={data} />
            <button onClick={()=>dispatch(setData({temperature:20}))} >Set 20</button>
        </div>
    )
}

export default Base