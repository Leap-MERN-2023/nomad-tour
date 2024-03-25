"use client"
import React from 'react'
import NewsCard from '../newsCard';
import Slider from './slider';
import { url } from 'inspector';

type Props = {};

const testSection = (props: Props) => {
  return (
    <section className="mt-12 w-[56%] flex flex-col items-center mx-auto relative ">
        <img src='umbrella.jpg' className='w-[100%] h-[100%] absolute'/>
        <div className='absolute w-full h-full bg-black opacity-70'></div>
        <div className='flex w-full justify-start'>
           <h1 className='text-5xl font-extrabold z-10 p-12 text-white'>Testimonials</h1>
        </div>
        <div className='w-full h-[500px] mx-12'>
           <Slider/>
        </div>
    </section>
  );
};

export default testSection;