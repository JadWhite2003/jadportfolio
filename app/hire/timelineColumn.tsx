import React from 'react'
import TimelineCard from './timelineCard'

const TimelineColumn = ({items}: {items: any[]} ) => {
  return (
    <div className='relative p-8'>
        <div className='absolute left-0 top-0 h-full w-[2px] bg-white/10'></div>
        <div className='flex flex-col gap-12'>
            {items.map((item, index) =>(
                <div key={index} className='relative pl-10'>
                    <div className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-9 w-4 h-4 rounded-full bg-blue-500'></div>
                    <TimelineCard {...item} />
                </div>

            ))}
        </div>
    </div>
  )
}

export default TimelineColumn