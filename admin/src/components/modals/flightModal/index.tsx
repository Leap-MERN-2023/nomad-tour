"use client"
import React from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, Select, Flex, Box } from '@chakra-ui/react'
import { AirPortContext } from '@/context/airportProvider';
import { CountryContext } from '@/context/countryProvider';

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {airports} = React.useContext(AirPortContext)
  const { countries } = React.useContext(CountryContext)
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [selectedAirport, setSelectedAirport] = React.useState(null);
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleCountrySelect = (event: any) => {
    setSelectedCountry(event.target.value);
  }
  const handleAirportSelect = (event: any) => {
    setSelectedAirport(event.target.value);
  }


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
                <Select variant='outline' placeholder='Select Country' onChange={handleCountrySelect}>
                  {countries.map(country => (
                    <option key={country.name} value={country.name}>{country.name}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Select Departure Airport</FormLabel>
                <Select variant='outline' placeholder='Select Airport' onChange={handleAirportSelect}>
                  {airports.map((airport: any) => (
                    <option key={airport._id} value={airport.name}>{airport.name}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Select Departure Airport</FormLabel>
                <Select variant='outline' placeholder='Select Airport' onChange={handleAirportSelect}>
                  {airports.map((airport: any) => (
                    <option key={airport._id} value={airport.name}>{airport.name}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Seats number</FormLabel>
                <Input placeholder='Seats'/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
                <Box sx={{'display':'flex', 'gap' : '2' }}>
                <Select placeholder='$' w={20}></Select>
                <Input placeholder='price'/>
                </Box>
            </FormControl> 
            <FormControl mt={4}>
              <FormLabel>Departure Date</FormLabel>
                <Input placeholder='2000/12/31'/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Arrival Date</FormLabel>
                <Input placeholder='2000/12/31'/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
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


