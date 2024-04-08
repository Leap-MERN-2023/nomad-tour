"use client";
import React from "react";
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
import { AirlinesContext } from "@/context/airlines";
import { CountryContext } from "@/context/countryProvider";
import { CldUploadWidget } from "next-cloudinary";

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {createAirline ,handleAirlineForm,addImage} = React.useContext(AirlinesContext);
  const { countries } = React.useContext(CountryContext);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSave = () => {
    onClose(), createAirline();
  };
  const  handleSuccess = (result:any) => {
    console.log("url",result.info.url)
    addImage(result.info.url)
}
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        New Airline +
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Airline</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl>
              <FormLabel>Select Country</FormLabel>
              <Select
                name="country"
                variant="outline"
                placeholder="Select Country"
                onChange={handleAirportForm}
              >
                {countries.map((country) => (
                  <option key={country.name} value={country._id}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </FormControl> */}

            <FormControl mt={4}>
              <FormLabel>Airline Name</FormLabel>
              <Input
                placeholder="Airport Name"
                name="name"
                onChange={handleAirlineForm}
              />
            </FormControl>
            <FormControl mt={4}>
              <CldUploadWidget
                uploadPreset="cloud9"
                onSuccess={handleSuccess}
              >
                {({ open }) => {
                  function handleOnClick() {
                    open();
                  }
                  return (
                    <button
                      className="p-3 rounded-xl bg-blue-600 text-white"
                      onClick={handleOnClick}
                    >
                      Upload Logo
                    </button>
                  );
                }}
              </CldUploadWidget>
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
