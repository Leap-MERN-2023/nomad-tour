import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { HotelContext } from "@/context/hotelProvider";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react";

const HotelCard = ({hotel}: any) => {
  // console.log("hotel card", hotel.images)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {deleteHotel} = React.useContext(HotelContext)
  return (
    <div className="card card-compact 2xl:w-96 bg-base-100 shadow-xl h-[400px] cursor-pointer sm:flex m-auto w-[300px]">
      <figure className="relative">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-48 absolute"
      >
        {hotel.images.map((image : any) => (
          <SwiperSlide key={image}>
            <img
              className="w-full h-48 rounded-btn object-cover"
              src={image}
              alt="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="flex justify-center items-center absolute z-10 bg-neutral-600 px-2 right-4 top-4 text-white gap-1 rounded-xl">
          <div className="w-4 h-4"><img className="w-full h-full bg-neutral-600" src="/assets/star.png" alt="star"/></div>
          <h1>{hotel.stars}</h1>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-sm font-bold text-black">{hotel.name}</h2>
          <h2 className="text-2xl font-bold text-black">{hotel.price}$</h2>
        </div>
        <div className="flex justify-center items-center gap-1">
        <div className="w-4 h-4"><Image width={4} height={4} alt="star" className="w-full h-full" src="/assets/location.jpg" /></div>
          <p>{hotel.name}</p>
        </div>
      </div>
      <div className="flex justify-center mb-6">
      <button className="btn btn-error w-1/3 text-white" onClick={onOpen}>Delete</button>
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalContent>
          <ModalHeader>Delete</ModalHeader>
           <ModalBody sx={{"fontSize": "24px", "display":"flex" , "justifyContent": "center", "textColor" : "red", "flexDirection":"column" }}>
              You are sure delete this Hotel?
              <div className='text-black'>{hotel.name}</div>
           </ModalBody>
           <ModalFooter sx={{"display": "flex", "justifyContent" : "center", "gap": "12px"}}>
             <Button colorScheme='red' onClick={()=> {deleteHotel(hotel._id),onClose()}}>Delete</Button>
             <Button colorScheme='blue' mr={3} onClick={onClose}>
               Close
             </Button>
           </ModalFooter>
          </ModalContent>
       </Modal> 
      </div>
    </div>
  );
};

export default HotelCard;
