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
import { AirPortContext } from "@/context/airportProvider";
import { CountryContext } from "@/context/countryProvider";

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createAirport, handleAirportForm } = React.useContext(AirPortContext);
  const { countries } = React.useContext(CountryContext);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSave = () => {
    onClose(), createAirport();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        New Airports +
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Airport</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
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
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Airport Name</FormLabel>
              <Input
                placeholder="Airport Name"
                name="name"
                onChange={handleAirportForm}
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
