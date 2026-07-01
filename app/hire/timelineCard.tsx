'use client'
import React from 'react'

type timelineProps = {
    title:string;
    company:string;
    duration:string;
    description:string;
}

const TimelineCard = ({title, company, duration, description}:timelineProps) => {
  return (
    <div className='relative flex h-full min-h-[14rem] flex-col rounded-sm border-white/10 p-6 border-2 shadow-md shadow-white/20 dark:bg-transparent bg-transparent hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] transition-all duration-300 '>
        <span className='text-sm text-white/20 font-semibold'>{duration}</span>
        <h3 className='text-lg font-bold mt-1'>{title}</h3>
        <p className='text-sm font-semibold'>{company}</p>
        <p className='text-sm mt-4 '>{description}</p>
    </div>
  )
}

export default TimelineCard