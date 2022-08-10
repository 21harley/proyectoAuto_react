import appFire from './firebaseDB'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'
import { getDatabase, onValue, ref} from 'firebase/database'

export async function creteUserFire (obj) {
  const auth = getAuth(appFire)
  switch (obj.type) {
    case 'EmailAndPassword':
      return createUserWithEmailAndPassword(auth, obj.email, obj.pass)
  }
}

export async function loginUser (obj) {
  const auth = getAuth(appFire)
  switch (obj.type) {
    case 'EmailAndPassword':
      return signInWithEmailAndPassword(auth, obj.email, obj.pass)
  }
}

export function closetSession () {
  console.log('cerrar login')
  const auth = getAuth(appFire)
  signOut(auth)
}

export function providerAuth (type) {
  const auth = getAuth(appFire)
  switch (type) {
    case 'google':
      return signInWithRedirect(auth, new GoogleAuthProvider())
  }
}

export function viewRegisterUsers(setArray){
  const db = getDatabase()
  const reference = ref(db, "Usuarios")
  onValue(reference, (resp) => {
    const data = resp.val()
    setArray(Object.entries(data))
  })

}

export function setTempurature(setValue){
  const db = getDatabase()
  const reference = ref(db, "Nodemcu/TThermok")
  onValue(reference, (resp) => {
    const data = resp.val()
    const list = Object.values(data)
    const indexChoose = Math.round(Math.random() * list.length)
    const temp = list[indexChoose]
    setValue(temp)
  })
  
}