"use client"
import React,{useContext} from 'react'
import { CountryContext } from '@/context/countryProvider'
import CountryModal from "@/components/modals/countryModal";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
const Country = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {countries, getCountries,deleteCountry} = useContext(CountryContext);
  return (
    <div className='w-full'>
      <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Countries</h1>
            <CountryModal/>
      </div>
      <div>
      {countries?.map((country : any) => {
        return <div key={country._id} className="flex my-24 items-center w-[70%] justify-between ml-[250px] gap-12 ">
           <div className="w-32">{country.name}</div>
           <div className="w-[900px]">{country.description}</div>
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
                      <Button colorScheme='red' onClick={()=> {deleteCountry(country._id),onClose()}}>Delete</Button>
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
    </div>
  )
}

export default Country;
