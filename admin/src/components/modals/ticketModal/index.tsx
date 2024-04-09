"use client";
import React, { useState } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import { FlightContext } from "@/context/flightProvider";
import { TicketContext } from "@/context/ticket";



function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {flights } = React.useContext(FlightContext);
  const {handleTicketForm,createTicket,handleValueForm}=React.useContext(TicketContext)
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSave = () => {
    onClose(),createTicket()
  };

  const tickets = [
    "Economy",
    "Business class",
    "First class",
    "Premium"
  ];
  

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        New Ticket +
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Flight</FormLabel>
              <Select
                name="flight"
                variant="outline"
                placeholder="Select Flight"
                onChange={handleTicketForm}
              >
                {flights.map((flight: any) => (
                  <option key={flight._id} value={flight._id}>
                    {flight.countryId.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Seat Class</FormLabel>
              <Select
                name="seatClass"
                variant="outline"
                placeholder="Select Class"
                onChange={handleTicketForm}
              >
                {tickets.map((ticket: any) => (
                  <option key={ticket} value={ticket}>
                    {ticket}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Seat Number</FormLabel>
              <Input my={4}
                placeholder="Seat"
                name="seatNumber"
                onChange={handleTicketForm}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input my={4}
                placeholder="USD"
                name="USD"
                onChange={handleValueForm}
              />
              <Input my={4}
                placeholder="MNT"
                name="CNY"
                onChange={handleValueForm}
              />
              <Input my={4}
                placeholder="CNY"
                name="MNT"
                onChange={handleValueForm}
              />
              </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Index;
