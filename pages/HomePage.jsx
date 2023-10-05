import { getAuth, signOut } from 'firebase/auth';
import {app} from "@/firebase"
import React from 'react';



const auth=getAuth(app);
const HomePage = () => {
  return (
    <div className='h-screen gap-2 flex flex-col justify-center items-center'>
        <h1>Hello</h1>
        <button onClick={()=>signOut(auth)}>Click me</button>
    </div>
  )
}

export default HomePage