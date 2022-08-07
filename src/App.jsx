import appFire from './services/firebase/firebaseDB'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { loginState } from './reducers/slices/User'
import AppRoutes from './routes/AppRoute'

const auth = getAuth(appFire)

function App () {
  const dispatch = useDispatch()

  const validar = (datos) => {
    dispatch(loginState({ user: datos }))
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      validar(user.uid)
      // ...
    } else {
      // User is signed out
      // ...
      console.log('User is signed out')
    }
  })
  return (
      <AppRoutes/>
  )
}

export default App