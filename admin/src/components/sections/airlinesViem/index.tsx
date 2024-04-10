"use client"
import React, { useContext } from 'react';
import { AirlinesContext } from '@/context/airlines';
import AirlineModal from "@/components/modals/airlineModal";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, Flex, ModalHeader } from '@chakra-ui/react';

const Airline = () => {
  const { airlines, deleteAirline } = useContext(AirlinesContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <section className='w-full'>
        <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Airlines</h1>
            <AirlineModal/>
        </div>
        <div className='flex justify-center w-[80%] flex-col items-center'>
<<<<<<< HEAD
        {airlines?.map((airline : any) => {
                      return  <div key={airline._id}
                        className="flex my-6 items-center gap-[250px]">
                            <img className="py-4 px-6 border-b border-grey-light w-28" src={airline.logo}/>
                            <div className="py-4 px-6 border-b border-grey-light w-[400px]">{airline.name}
                            
                            </div>
                            <div className='flex gap-2 w-[200px]'>
                                <button className="btn btn-active btn-primary w-20 text-white">Put</button>
                                <button className="btn btn-error w-20 text-white" 
                                onClick={()=> {deleteAirline(airline._id)}}
                                >Del</button>
                            </div>
                        </div>
                          })}
=======
        {airlines?.map((airline : any) => (
          <div key={airline._id} className="flex my-6 items-center gap-[250px]">
            <img width={24} height={20} src={airline.logo} alt='logo' className='w-24' />
            <div className="py-4 px-6 border-b border-grey-light w-[400px]">{airline.name}</div>
            <div className='flex gap-2 w-[200px]'>
              <button className="btn btn-active btn-primary w-20 text-white">Put</button>
              <button className="btn btn-error w-20 text-white" onClick={onOpen}
              >del</button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Delete</ModalHeader>
                  <ModalBody sx={{"fontSize": "24px", "display":"flex" , "justifyContent": "center", "textColor" : "red" }}>
                    You are sure delete this item?
                  </ModalBody>
                  <ModalFooter sx={{"display": "flex", "justifyContent" : "center", "gap":"12px"}}>
                    <Button colorScheme='red' onClick={()=> {deleteAirline(airline._id),onClose()}}>Delete</Button>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        ))}
>>>>>>> main
        </div>
    </section>
  );
}

export default Airline;

