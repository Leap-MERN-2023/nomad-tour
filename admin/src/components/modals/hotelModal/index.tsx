'use client'
import React from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, Select, Textarea,Box } from '@chakra-ui/react'
import { CountryContext } from '@/context/countryProvider';

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { countries } = React.useContext(CountryContext)
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleCountrySelect = (event: any) => {
    setSelectedCountry(event.target.value);
  }
  return (
    <>
      <Button onClick={onOpen} colorScheme='blue'>New Hotel +</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Hotel</ModalHeader>
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
              <FormLabel>Hotel Name</FormLabel>
              <Input placeholder='Hotel Name'/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
                <Box sx={{'display':'flex', 'gap' : '2' }}>
                <Select placeholder='$' w={20}></Select>
                <Input placeholder='price'/>
                </Box>
            </FormControl> 
            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Select placeholder='Choose Star'/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='description' />
            </FormControl>
            <Button mt={4} colorScheme='messenger'>Upload Image</Button>
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

