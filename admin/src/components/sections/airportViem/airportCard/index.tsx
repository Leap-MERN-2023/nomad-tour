import { AirPortContext } from '@/context/airportProvider';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'

const Index = ({airport} :any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {deleteAirport} = useContext(AirPortContext);
  return (
    <div key={airport._id}
                     className="flex my-6 items-center  gap-12">
                        <div className="py-4 px-6 border-b border-grey-light w-48">{airport.country.name}</div>
                        <div className="py-4 px-6 border-b border-grey-light w-96">{airport.name}
                        
                        </div>
                        <div className='flex gap-2'>
                             {/* <button className="btn btn-active btn-primary w-20 text-white">Put</button> */}
                             <button className="btn btn-error w-20 text-white" onClick={onOpen}>Del</button>
                             <Modal 
                             isOpen={isOpen} onClose={onClose}>
                               <ModalContent>
                               <ModalHeader>Delete</ModalHeader>
                                 <ModalBody sx={{"fontSize": "24px", "display":"flex" , "justifyContent": "center", "textColor" : "red", "flexDirection": "column" }}>
                                   You are sure delete this Airport?
                                   <div className='text-black'>{airport.name}</div>
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
  )
}

export default Index
