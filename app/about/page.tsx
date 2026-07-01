import { socials } from '@/data'
import { Icon } from 'lucide-react'
import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'

const About = () => {
    return (
        <div className="relative w-full min-h-screen py-20 px-6 bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(75,108,183,0.65)_0%,_rgba(24,40,72,0.65)_100%)] backdrop-blur-md dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(15,23,42,0.95)_0%,_rgba(2,8,18,0.95)_100%)]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* About me text left side*/}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold"> About Me </h2>
                    <p className="text-white/80 leading-relaxed">
                        Hey there 👋🏻 I'm Jadon White, a passionate software engineer wanting to leave their mark and create useful applications.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                        My journey into technology began with gaming, I loved seeing how my input affected the game world which made me curious about how things work under the hood of software, apps and websites.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                        I love discovering new technologies and tools that allow me to create and innovate. Programming has become my passion as it has given me the ability to bring my ideas to life and make a positive impact on the world.
                    </p>
                    <p className="text-white/80 leading-relaxed"> "Atleast the stars will remember the shape I gave them"</p>
                    <p className='text-white/80 italic'>- Oryx Taken King</p>
                    

                </div>
                {/* About me image right side and socials*/}
                <div className='flex flex-col items-center gap-6'>
                    <div>
                        <img src="/images/profile.png" alt="Jadon White" className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel='noopener noreferrer'
                                className='text-white/80 hover:text-white transition invert dark:invert-0 flex justify-between gap-1'>
                                <Icon className='w-6 h-6' />
                                <span className='text-white font-semibold'>{label}</span>

                            </a>
                        ))}

                    </div>
                </div>

            </div>
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen dark:fill-white" />
                <Spotlight className="top-10 -left-full  h-[80vh] w-[50vw] dark:fill-purple" />
                <Spotlight className="top-28 -left-10  h-[80vh] w-[50vw] dark:fill-blue" />

            </div>
            {/* Scrolling divider */}
            <div className='relative overflow-hidden'>
                <div className='animate-scrollHorizontal flex flex-nowrap whitespace-nowrap gap-16'>
                    <span className='font-bold text-9xl text-white/20'> Problem Solver </span>
                    <span className='font-bold text-9xl text-white/20'> Gamer </span>
                    <span className='font-bold text-9xl text-white/20'> Creative </span>
                    <span className='font-bold text-9xl text-white/20'> Deep Thinker </span>

                    {/*seamless animation*/}
                    <span className='font-bold text-9xl text-white/20'> Problem Solver </span>
                    <span className='font-bold text-9xl text-white/20'> Gamer </span>
                    <span className='font-bold text-9xl text-white/20 '> Creative </span>
                    <span className='font-bold text-9xl text-white/20'> Deep Thinker </span>

                </div>
            </div>
        </div>
    )
}

export default About