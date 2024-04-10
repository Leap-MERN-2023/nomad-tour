"use client"
import React, { useContext } from 'react';
import { AuthContext } from '@/context/authProvider';
import PutModal from "@/components/modals/authModal"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';


const User = () => {
  const {users,deleteUser}= useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
 return (
    <div >
       <div className=''>
          <h1 className='text-5xl flex justify-center my-32 font-sans font-semibold'>All Users</h1>
       </div>
       {users?.map((user : any) => {
                   return  <div key={user._id}
                     className="flex my-6 items-center w-full gap-24 justify-center">
                        <div className="py-4 px-6 border-b border-grey-light w-96 text-start">{user.name}</div>
                        <div className="py-4 px-6 border-b border-grey-light w-[600px] text-start">{user.email}</div>
                        <div className="py-4 px-6 border-b border-grey-light w-48 text-start">{user.phoneNumber}</div>
                        <div className='flex gap-2'>
                             <PutModal/>
                             <button className="btn btn-error w-20 text-white"  onClick={onOpen}>Del</button>
                             <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader>Delete</ModalHeader>
                                  <ModalBody sx={{"fontSize": "24px", "display":"flex" , "justifyContent": "center", "textColor" : "red" }}>
                                     You are sure delete this item?
                                  </ModalBody>
                                  <ModalFooter sx={{"display": "flex", "justifyContent" : "center", "gap":"12px"}}>
                                    <Button colorScheme='red' onClick={()=> {deleteUser(user._id),onClose()}}>Delete</Button>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                      Close
                                    </Button>
                                  </ModalFooter>
                                 </ModalContent>
                              </Modal> 
                        </div>
                     </div>
                      })}
    </div>
  )
}

export default User;
