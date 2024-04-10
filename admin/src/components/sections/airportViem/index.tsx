"use client"
import React,{useContext} from 'react';
import { AirPortContext } from '@/context/airportProvider';
import AirportModal from "@/components/modals/airportModal";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';


const Airport = () => {
  const {airports,deleteAirport} = useContext(AirPortContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <section className='w-full'>
        <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Airports</h1>
            <AirportModal/>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
            <div className='flex items-center w-[50%] justify-between my-12'>
                    <h1 className='text-2xl'>Country</h1>
                    <h1 className='text-2xl'>City</h1>
                    <h1 className='text-2xl'>Active</h1>        
            </div>
                 {airports?.map((airport : any) => {
                   return  <div key={airport._id}
                     className="flex my-6 items-center  gap-[250px]">
                        <div className="py-4 px-6 border-b border-grey-light w-48">{airport.country.name}</div>
                        <div className="py-4 px-6 border-b border-grey-light w-96">{airport.name}
                        
                        </div>
                        <div className='flex gap-2'>
                             <button className="btn btn-active btn-primary w-20 text-white">Put</button>
                             <button className="btn btn-error w-20 text-white" onClick={onOpen}>Del</button>
                             <Modal isOpen={isOpen} onClose={onClose}>
                               <ModalOverlay />
                               <ModalContent>
                               <ModalHeader>Delete</ModalHeader>
                                 <ModalBody sx={{"fontSize": "24px", "display":"flex" , "justifyContent": "center", "textColor" : "red" }}>
                                   You are sure delete this item?
                                 </ModalBody>
                                 <ModalFooter sx={{"display": "flex", "justifyContent" : "center", "gap":"12px"}}>
                                   <Button colorScheme='red' onClick={()=> {deleteAirport(airport._id),onClose()}}>Delete</Button>
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
    </section>
    
  )
}

export default Airport


