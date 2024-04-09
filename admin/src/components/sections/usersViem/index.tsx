"use client"
import React, { useContext } from 'react';
import { AuthContext } from '@/context/authProvider';
import PutModal from "@/components/modals/authModal"


const index = () => {
 
  const {users,deleteUser}= useContext(AuthContext);

  
  return (
    <div >
       <div className=''>
          <h1 className='text-5xl flex justify-center my-32 font-sans font-semibold'>All Users</h1>
          <button>Google</button>
       </div>
       {users?.map((user : any) => {
                   return  <div key={user._id}
                     className="flex my-6 items-center w-full gap-24 justify-center">
                        <div className="py-4 px-6 border-b border-grey-light w-96 text-start">{user.name}</div>
                        <div className="py-4 px-6 border-b border-grey-light w-[600px] text-start">{user.email}</div>
                        <div className="py-4 px-6 border-b border-grey-light w-48 text-start">{user.phoneNumber}</div>
                        <div className='flex gap-2'>
                             <PutModal/>
                             <button className="btn btn-error w-20 text-white"  onClick={()=> {deleteUser(user._id)}}>Del</button>
                        </div>
                     </div>
                      })}
    </div>
  )
}

export default index
