"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '@/context/authProvider';

const Index = ({user}:any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {deleteUser}= useContext(AuthContext);
  return (
    <div 
       key={user.name} 
         className="flex my-6 items-center w-full gap-24 justify-center">
            <div className="py-4 px-6 border-b border-grey-light w-96 text-start">{user.name}</div>
            <div className="py-4 px-6 border-b border-grey-light w-[600px] text-start">{user.email}</div>
            <div className="py-4 px-6 border-b border-grey-light w-48 text-start">{user.phoneNumber}</div>
            <div className='flex gap-2'>
                 <button className="btn btn-error w-20 text-white"  onClick={onOpen}>Delete</button>
                 <Modal
                 isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                    <ModalHeader>Delete</ModalHeader>
                      <ModalBody sx={{"fontSize": "24px", "display":"flex" , "justifyContent": "center", "textColor" : "red", "flexDirection": "column" }}>
                         You are sure delete this user?
                      <div className='text-black'>{user.name}</div>
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
  )
}

export default Index;
