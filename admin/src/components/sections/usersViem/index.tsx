"use client"
import React, { useContext } from 'react';
import { AuthContext } from '@/context/authProvider';
import Usercard from "./userCard";


const User = () => {
   const {users}= useContext(AuthContext);
   if (!users) {
      return <span className="loading loading-bars loading-lg"></span>;
    }
   return (
    <div >
       <div className=''>
          <h1 className='text-5xl flex justify-center my-32 font-sans font-semibold'>All Users</h1>
       </div>
       {users.map((user : any) =>{
        return <Usercard key={user._id} user={user}/>
       })}
    </div>
  )
}

export default User;
