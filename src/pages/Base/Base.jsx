import Panel from '../../components/Panel/Panel';
import GaugeTemper from "../../components/GaugeTemper/GaugeTemper";
import ListUser from '../../components/ListRegister/ListResgister';
import { setData } from "../../reducers/slices/Gauge";
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { viewRegisterUsers } from '../../services/firebase/functionFire';


const Base = () => {
    const { data } = useSelector((state) => state.reducerAll.Gauge);
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const [value, setValue] = useState(50)//aqui puede ir el valor que saque de firebase

    const ch4Function = () =>{
        console.log("para ch4")
    }

    const ch5Function = () =>{
        console.log("para ch5")
    }

    useEffect(() => {
        viewRegisterUsers(setUsers)
        dispatch(setData({ temperature: value }))
    }, [])


    return (
        <div>
            {users.length !== 0?<ListUser users={users} />:null}
            <Outlet />
            <div style={{ display: "flex", }}>
                <GaugeTemper gauge_data={data} />
                <Panel
                    method1={ch4Function}
                    method2={ch5Function}
                />

            </div>
        </div>
    )
}

export default Base