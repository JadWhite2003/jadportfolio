import React from 'react'
import { skills } from '@/data'
import TimelineColumn from './timelineColumn'
import { education, experiences } from '@/data'

const Hire = () => {
    return (
        <div className="relative w-full min-h-screen py-20 px-1 sm:px-16 lg:px-24 bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(75,108,183,0.65)_0%,_rgba(24,40,72,0.65)_100%)] backdrop-blur-md dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(15,23,42,0.95)_0%,_rgba(2,8,18,0.95)_100%)]">
            <div className="text-center mb-12 space-y-3">
                <h1 className="text-4xl font-bold">Why hire me?</h1>
                <p className="text-white/70">Take a look at my journey so far</p>
            </div>
            <div>
                <div className='px-3'>
                    <h2 className='text-3xl font-bold mb-5'>My Tech Stack</h2>
                </div>
                <div className='grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2 justify-items-center gap-6 items-stretch'>
                    {skills.map((section) => {
                        return <div key={section.title} className='w-full rounded-sm border-white/10 p-6 border-2 shadow-md shadow-white/20 dark:bg-transparent bg-transparent hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] transition-all duration-300'>
                            <div className='mb-4 flex items-center gap-3 border-b border-white/10 pb-4 shadow-sm'>
                                <section.titleIcon className='w-6 h-6' />
                                <h3 className='font-semibold'>{section.title}</h3>
                            </div>
                            <div className='grid gap-3 justify-items-left items-center w-full'>
                                {section.skills.map((skill) => (
                                    <div key={skill.name} className='flex items-center gap-3 rounded-2xl px-0 py-2'>
                                        <img src={skill.icon} alt={skill.name} className='w-6 h-6 invert-0 dark:invert' />
                                        <span className='text-xs'>{skill.name}</span>

                                    </div>
                                ))}

                            </div>

                        </div>
                    }
                    )}

                </div>
            </div>
            {/* Scrolling divider */}
            <div className='relative overflow-hidden'>
                <div className='animate-scrollHorizontal flex flex-nowrap whitespace-nowrap gap-16'>
                    <span className='font-bold text-9xl text-white/20'> Communication </span>
                    <span className='font-bold text-9xl text-white/20'> Teamwork </span>
                    <span className='font-bold text-9xl text-white/20'> Problem-Solving </span>
                    <span className='font-bold text-9xl text-white/20'> Time management </span>

                    {'seamless animation'}
                    <span className='font-bold text-9xl text-white/20'> Communication </span>
                    <span className='font-bold text-9xl text-white/20'> Teamwork </span>
                    <span className='font-bold text-9xl text-white/20'> Problem-Solving </span>
                    <span className='font-bold text-9xl text-white/20'> Time management </span>

                </div>
            </div>
            {/*Experience and education */}
            <div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
                    {/* Education */}
                    <div>
                        <h2 className='font-bold text-3xl'>My Education</h2>
                        <TimelineColumn items={education} />

                    </div>
                    {/* Experience */}
                    <div>
                        <h2 className='font-bold text-3xl'>My Experience</h2>
                        <TimelineColumn items={experiences} />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Hire