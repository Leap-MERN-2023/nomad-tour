import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AirlinesContext } from "@/context/airlines";

const Index = ({airline}:any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { deleteAirline } = useContext(AirlinesContext);
  return (
    <div key={airline._id} className="flex my-6 items-center gap-12 justify-center">
            <img
              width={24}
              height={20}
              src={airline.logo}
              alt="logo"
              className="w-24"
            />
            <div className="py-4 px-6 border-b border-grey-light w-[400px]">
              {airline.name}
            </div>
            <div className="flex gap-2 w-[200px]">
              {/* <button className="btn btn-active btn-primary w-20 text-white">
                Put
              </button> */}
              <button
                className="btn btn-error w-20 text-white"
                onClick={onOpen}
              >
                delete
              </button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Delete</ModalHeader>
                  <ModalBody
                    sx={{
                      fontSize: "24px",
                      display: "flex",
                      justifyContent: "center",
                      textColor: "red",
                      flexDirection: "column"
                    }}
                  >
                    You are sure delete this Airline?
                    <div className='text-black'>{airline.name}</div>
                  </ModalBody>
                  <ModalFooter
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "12px",
                    }}
                  >
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deleteAirline(airline._id), onClose();
                      }}
                    >
                      Delete
                    </Button>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
  )
}

export default Index
