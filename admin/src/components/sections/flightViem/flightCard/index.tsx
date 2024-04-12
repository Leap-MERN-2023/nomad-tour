import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react';
import { FlightContext } from "@/context/flightProvider";

const Index = ({flight} :any) => {
    const {  deleteFlight } = useContext(FlightContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div key={flight._id} className="flex my-6 items-center w-full gap-6">
    <div className="py-4 px-6 w-[200px]">{flight.countryId.name}</div>
    {/* <div className="py-4 px-6 w-[200px]">{flight.airline.name}</div> */}
    <div className="py-4 px-6 w-[400px]">{flight.arrivalAirportId.name}</div>
    <div className="py-4 px-6 w-[300px]">{flight.departureAirportId.name}</div>
    {/* <div className="py-4 px-6 w-[400px]">{flight.departureDate}</div>
    <div className="py-4 px-6 w-[400px]">{flight.arrivalDate}</div> */}
    <div className="py-4 px-6 w-[200px]">{flight.availableSeats}</div>
    <div className='flex gap-2'>
      {/* <button className="btn btn-active btn-primary w-20 text-white">Put</button> */}
      <button className="btn btn-error w-20 text-white" onClick={onOpen}>Delete</button>
      <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <ModalHeader>Delete</ModalHeader>
            <ModalBody sx={{"fontSize": "24px", "display":"flex" , "justifyContent": "center", "textColor" : "red", "flexDirection": "column" }}>
               You are sure delete this flight?
               <div className='text-black'>{flight.countryId.name}</div>
            </ModalBody>
            <ModalFooter sx={{"display": "flex", "justifyContent" : "center", "gap":"12px"}}>
              <Button colorScheme='red' onClick={()=> {deleteFlight(flight._id),onClose()}}>Delete</Button>
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
