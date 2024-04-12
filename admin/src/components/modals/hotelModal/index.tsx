'use client'
import React, { useState } from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, Select, Textarea,Box } from '@chakra-ui/react'
import { CountryContext } from '@/context/countryProvider';
import { HotelContext } from '@/context/hotelProvider';
import { CldUploadWidget } from 'next-cloudinary';

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { countries } = React.useContext(CountryContext);
  const {createHotel,handleHotelForm,addImage} = React.useContext(HotelContext);
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [photo,setPhoto] = useState(false);

  const handleShow = () => {
    setPhoto(false)
  }

  const handleSave = () => {
    createHotel(),onClose()
  }
  const  handleSuccess = (result:any) => {
    console.log("url",result.info.url)
    addImage(result.info.url)
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
              <Select 
              name='country'
              variant='outline' 
              placeholder='Select Country'
              onChange={handleHotelForm} >
                {countries.map(country => (
                  <option key={country._id} value={country._id}>{country.name}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Hotel Name</FormLabel>
              <Input 
              name='name'
              onChange={handleHotelForm}
              placeholder='Hotel Name'/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
                <Input 
                name='price'
                onChange={handleHotelForm}
                placeholder='price'/>
            </FormControl> 
            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input 
              name='rating'
              onChange={handleHotelForm}
              placeholder='1-5'/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
              name='description'
              onChange={handleHotelForm}
              placeholder='description' />
            </FormControl>
            <FormControl mt={4} sx={{display: "flex"}}>               
              <CldUploadWidget
                    uploadPreset='cloud9'
                    onSuccess={handleSuccess}
                    >
                     {({ open }) => {
                      function handleOnClick() {
                      open(); setPhoto(true)
                   }
                   return (
                   <button 
                    className='p-3 rounded-xl bg-blue-600 text-white'
                    onClick={handleOnClick}>
                     Upload Images
                   </button>
                      );
                    }}
              </CldUploadWidget>
              <div className='w-12 h-12 rounded-full hidden'>
                <img className='w-full h-full' src="/assets/correct.jpg" alt="cor " />
              </div>
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

