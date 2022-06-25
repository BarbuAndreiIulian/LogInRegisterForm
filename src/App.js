 import { useEffect, useState } from 'react';
 import {createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
onAuthStateChanged, signOut} from "firebase/auth"
import './App.css';
import {auth} from './firebase-config'

function App() {

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [logInEmail, setLogInEmail] = useState("")
  const [logInPassword, setLogInPassword] = useState("")

  const[user,setUser] = useState({});

  useEffect(() =>{onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });},[])
  

  // const register = async () => {
  //   try{
  //   const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
  //   console.log(user)
  //   } catch (error){
  //     console.log(error.message)
  //   }
  // }

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth,registerEmail, registerPassword)
      console.log(user)
    }catch (error) {
      console.log(error.message)
    }
  }


  const login = async () =>{
    try{
      const user = await signInWithEmailAndPassword(auth,logInEmail,logInPassword);
      console.log(user)
      } catch (error){
        console.log(error.message)
      }
  } 

  const logout = async () =>{
    await signOut(auth);
  }


  return (
    <div className="App">
      
      <div>
        <h3>Register User</h3>
        <input placeholder="Email..." onChange={(e) => setRegisterEmail(e.target.value)} />
        <input placeholder="Password..." onChange={(e) => setRegisterPassword(e.target.value)} />

        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input placeholder="Email..." onChange={(e) => setLogInEmail(e.target.value)}  />
        <input placeholder="Password..." onChange={(e) => setLogInPassword(e.target.value)} />

        <button onClick={login}>Login</button>
      </div>

      <h4>User Logged In: </h4>
      {user?.email}

      <button onClick={logout}>Sign Out</button>

    </div>
  );
}

export default App;
