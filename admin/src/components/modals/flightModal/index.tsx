"use client"
import React, { useEffect, useState } from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, Select, Flex, Box } from '@chakra-ui/react'
import { AirPortContext } from '@/context/airportProvider';
import { CountryContext } from '@/context/countryProvider';
import { FlightContext } from '@/context/flightProvider';
import { AirlinesContext } from '@/context/airlines';

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {airports} = React.useContext(AirPortContext);
  const { countries } = React.useContext(CountryContext);
  const {airlines,getAirlines} = React.useContext(AirlinesContext)
  const {createFlight,handleFlightForm,flights} = React.useContext(FlightContext);
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
  const handleSave = () => {
    onClose(), createFlight();
  };
  const rounds = [
   "true",
   "false",
  ]
  return (
    <>
      <Button onClick={onOpen} colorScheme='blue'>New flight +</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Flight</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Select Country</FormLabel>
                <Select variant='outline'
                 placeholder='Select Country' 
                 name='countryId'
                 onChange={handleFlightForm}>
                  {countries.map(country => (
                    <option key={country._id} value={country._id}>{country.name}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Select Airline</FormLabel>
                <Select variant='outline'
                 placeholder='Select Airline' 
                 name='airline'
                 onChange={handleFlightForm}>
                  {airlines.map((airline :any) => (
                    <option key={airline._id} value={airline._id}>{airline.name}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Select Departure Airport</FormLabel>
                <Select variant='outline' 
                placeholder='Select Airport' 
                name='departureAirportId'
                onChange={handleFlightForm}>
                  {airports.map((airport: any) => (
                    <option key={airport._id} value={airport._id}>{airport.name}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Select Arrival Airport</FormLabel>
                <Select variant='outline' 
                placeholder='Select Airport' 
                name='arrivalAirportId'
                onChange={handleFlightForm}>
                  {airports.map((airport: any) => (
                    <option key={airport._id} value={airport._id}>{airport.name}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Seats</FormLabel>
                <Input 
                name='availableSeats'
                onChange={handleFlightForm}
                placeholder='Seats'/>
            </FormControl>
            <FormLabel>Is rounded</FormLabel>
            <FormControl>
                <Select variant='outline' 
                placeholder='Select Round' 
                name='isRounded'
                onChange={handleFlightForm}>
                  {rounds.map((round: any) => (
                    <option key={round} value={round}>{round}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Departure Date</FormLabel>
                <Input
                name='departureDate'
                onChange={handleFlightForm} 
                placeholder='2024-05-10'/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Arrival Date</FormLabel>
                <Input
                name='arrivalDate'
                onChange={handleFlightForm} 
                placeholder='2024-05-10'/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Index;


