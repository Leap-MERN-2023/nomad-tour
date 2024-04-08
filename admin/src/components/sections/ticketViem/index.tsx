"use client"
import React from 'react'
import { TicketContext } from '@/context/ticket';

const index = () => {
   const {getTickets,tickets} = React.useContext(TicketContext)
  return (
    <section className='w-full'>
        <div className='flex justify-between w-[80%] items-center m-auto my-12'>
            <h1 className='text-3xl font-bold'>Tickets</h1>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
                 {tickets?.map((ticket : any) => {
                   return  <div key={ticket._id}
                     className="flex gap-4 items-center">
                        <div className="py-4 px-6 w-48">{ticket.flight.countryId.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.airline.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.departureAirportId.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.arrivalAirportId.name}</div>
                        <div className="py-4 px-6 w-48">{ticket.seatClass}</div>
                        <div className="py-4 px-6 w-48">{ticket.price.MNT}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.departureDate}</div>
                        <div className="py-4 px-6 w-48">{ticket.flight.arrivalDate}</div>
                        <div className='flex gap-2'>
                             <button className="btn btn-active btn-primary w-20 text-white">Put</button>
                             <button className="btn btn-error w-20 text-white" 
                            //  onClick={()=> {deleteAirport(airport._id)}}
                             >Del</button>
                        </div>
                     </div>
                      })}
        </div>
    </section>
  )
}

export default index;
