'use client';
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { SparklesCore } from './ui/sparkles'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(75,108,183,0.65)_0%,_rgba(24,40,72,0.65)_100%)] backdrop-blur-md dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(15,23,42,0.95)_0%,_rgba(2,8,18,0.95)_100%)]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[60rem] w-[34rem] overflow-hidden">
                {/* Tech stack logos scrolling */}
                <div className="flex flex-col gap-6 animate-scrollVertical px-6 hidden md:block">
                    <img src="/logos/react.svg" alt="React" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/javascript.svg" alt="JavaScript" className="w-[30rem] h-[30rem] opacity-25 filter filter invert-0 dark:invert  p-4" />
                    <img src="/logos/typescript.svg" alt="TypeScript" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert  p-4" />
                    <img src="/logos/python.svg" alt="Python" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/node.svg" alt="Node.js" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/tailwind.svg" alt="Tailwind CSS" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/next.svg" alt="Next.js" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/mysql.svg" alt="MySQL" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />

                    {/* Duplicate for seamless loop */}
                    <img src="/logos/react.svg" alt="React" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/javascript.svg" alt="JavaScript" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/typescript.svg" alt="TypeScript" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/python.svg" alt="Python" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/node.svg" alt="Node.js" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/tailwind.svg" alt="Tailwind CSS" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/next.svg" alt="Next.js" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                    <img src="/logos/mysql.svg" alt="MySQL" className="w-[30rem] h-[30rem] opacity-25 filter invert-0 dark:invert p-4" />
                </div>
            </div>

            {/* Hero content */}
            <div className='relative z-10 text-center'>
                <div className="sm:mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground mb-8 bg-white/10 dark:bg-gray-500/10 ">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Status: Available for work
                    </span>
                </div>
                {/* Hero title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Hi, I'm Jadon White</h1>
                {/* Hero subtitle with typewriter effect */}
                <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-6">
                    <TypeAnimation
                        sequence={[
                            "Full-Stack Developer",
                            2000,
                            "Software Engineer",
                            2000,
                            "Developer",
                            2000,
                            "Tech Enthusiast",
                            2000
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="font-mono"
                    />
                </div>
                
                <div className="w-[40rem] h-60 relative rounded-2xl overflow-hidden mx-auto">
                    {/* Sparkle Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={2}
                        particleDensity={1200}
                        className="w-full h-full z-10 rounded-2xl"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]">

                    </div>
                </div>
            </div>
            <div className="absolute right-30 top-70 -translate-y-1/2 hidden md:block">
                <Link
                    href="/projects"
                    className="
      px-6 py-3
      rounded-2xl
      bg-white/10 backdrop-blur-xl
      border border-white/20
      text-white font-medium
      hover:bg-white/20 transition
    "
                >
                    View Projects →
                </Link>
            </div>
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen dark:fill-white" />
                <Spotlight className="top-10 -left-full  h-[80vh] w-[50vw] dark:fill-purple" />
                <Spotlight className="top-28 -left-10  h-[80vh] w-[50vw] dark:fill-blue" />

            </div>
        </div>
    )
}

export default Hero