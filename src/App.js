import React, { useEffect} from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {useSelector, useDispatch}  from 'react-redux'
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('USER>>>>', authUser)
      if (authUser) {
        // the user is logged in
        dispatch(login({
          userId: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName

        }))

      } else {
        // the user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    
    <div className="app">
      {user ? (
      <>
        <Sidebar />
        <Chat />
      </>
      ):(
        <Login/>
      )
      }
      
    </div>
  );
}

export default App;
