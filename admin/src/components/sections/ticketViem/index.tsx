"use client"
import React, { useContext } from 'react'
import { TicketContext } from '@/context/ticket';
import TicketModal from "@/components/modals/ticketModal"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';

const Ticket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {getTickets,tickets,deleteticket} = useContext(TicketContext)
  return (
    <section className='w-full'>
        <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Tickets</h1>
            <TicketModal/>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
                 {tickets?.map((ticket : any) => {
                   return  <div key={ticket._id}
                     className="flex gap-4 items-center">
                        <div className="py-4 px-6 w-48">{ticket.flight.countryId.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.airline.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.departureAirportId.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.arrivalAirportId.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.seatClass}</div>
                        <div className="py-4 px-6 w-48">{ticket.price.MNT}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.departureDate}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.arrivalDate}</div>
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
                                          <Button colorScheme='red' onClick={()=> {deleteticket(ticket._id),onClose()}}>Delete</Button>
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

export default Ticket;
