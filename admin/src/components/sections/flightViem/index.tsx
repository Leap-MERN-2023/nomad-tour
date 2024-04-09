"use client"
import FlightModal from "@/components/modals/flightModal";
import { FlightContext } from "@/context/flightProvider";
import { AirlinesContext } from "@/context/airlines";
import { AirPortContext } from "@/context/airportProvider";
import { useContext } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

const Flight = () => {
  const {airlines} = useContext(AirlinesContext);
  const {airports} = useContext(AirPortContext);
  const { flights, deleteFlight } = useContext(FlightContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!airlines) {
    return <div>Loading airlines...</div>;
  }
  if (!airports) {
    return <div>Loading airports...</div>;
  }


  return (
    <div>
      <div className='flex justify-between w-[80%] items-center m-auto my-12'>
        <h1 className='text-3xl font-bold'>Flights</h1>
        <FlightModal/>
      </div> 
      <div>
        {flights.map((flight: any) => (
          <div key={flight._id} className="flex my-6 items-center w-full gap-6">
            <div className="py-4 px-6 w-[200px]">{flight.countryId.name}</div>
            <div className="py-4 px-6 w-[200px]">{flight.airline}</div>
            <div className="py-4 px-6 w-[400px]">{flight.arrivalAirportId.name}</div>
            <div className="py-4 px-6 w-[400px]">{flight.departureAirportId.name}</div>
            <div className="py-4 px-6 w-[400px]">{flight.departureDate}</div>
            <div className="py-4 px-6 w-[400px]">{flight.arrivalDate}</div>
            <div className="py-4 px-6 w-[200px]">{flight.availableSeats}</div>
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
                      <Button colorScheme='red' onClick={()=> {deleteFlight(flight._id),onClose()}}>Delete</Button>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                   </ModalContent>
                </Modal> 
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Flight;

