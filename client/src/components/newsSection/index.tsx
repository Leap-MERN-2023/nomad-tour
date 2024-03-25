"use client"
import React from 'react'
import NewsCard from '../newsCard';
import Slider from './slider';

type Props = {};

const newsSection = (props: Props) => {
  return (
    <section className="mt-12 w-[56%] flex flex-col items-center mx-auto">
        <div className='flex w-full justify-start'>
           <h1 className='text-5xl font-extrabold'>Feature News</h1>
        </div>
        <div className='w-full h-[500px] my-12'>
           <Slider/>
        </div>
        <div>

        </div>
    </section>
  );
};

export default newsSection;