"use client";
import React, { useContext } from "react";
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
  Textarea,
} from "@chakra-ui/react";
import { CountryContext } from "@/context/countryProvider";
import { CldUploadWidget, CloudinaryUploadWidgetInfo} from "next-cloudinary";
// import Upload from "@/components/uploadImages"

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { createCountry, handleCountryForm, addImage} =
    useContext(CountryContext);

  const handleSave = () => {
    onClose();
    createCountry();
  };
  
  const  handleSuccess = (result:any) => {
         console.log("url",result.info.url)
         addImage(result.info.url)
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        New Country +
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Country</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                name="name"
                placeholder="Country name"
                onChange={handleCountryForm}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                placeholder="description"
                onChange={handleCountryForm}
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
                      Upload an Image
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
