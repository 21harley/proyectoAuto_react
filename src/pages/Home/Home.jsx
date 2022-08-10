import { useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import Login from '../Login/Login'

function Home(){
  const { user,login_sucess } = useSelector((state) => state.reducerAll.User);
  //const dispatch = useDispatch()

  return (
    <>
    {
      (login_sucess)
        ? (
        <div>
          <Navbar></Navbar>
       </div>
          )
        : <Login/>
    }

    </>
  )
}

export default Home