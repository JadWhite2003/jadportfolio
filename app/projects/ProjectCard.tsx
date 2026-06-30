import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'


type Props = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    demo?: string;
    featured?: boolean;

}


const ProjectCard = ({ description, title, technologies, image, demo, github, featured }: Props) => {
    return (
        <div
            className={`group relative flex h-full flex-col rounded-sm bg-gray-500 dark:bg-zinc-800 border border-white/10 backdrop-blur-xl hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,0,0,0.45)] transition-all duration-300 overflow-hidden
    ${featured ? "shadow-[0_0_30px_rgba(129,140,248,0.6)]" : ""}
  `}
        ><div className='relative h-48 overflow-hidden'>
            <img
                src={image}
                alt={title}
                width={400}
                height={400}
                className=" w-full h-full object-cover rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.45)]"
            />
        </div>
        <div className='p-6 flex-1 flex flex-col'>
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white group-hover:text-blue-500 transition-colors">{title}</h3>
            <p className="text-white/70 mb-4 text-sm">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/20 "
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 mt-auto justify-between">
                {github && (
                    <Link
                        href={github}
                        className="px-3 py-2 text-sm rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition flex justify-between gap-2 items-center"
                    >
                        GitHub <ExternalLink className='w-4 h-4'/>
                    </Link>
                )}

                {demo && demo.length > 0 && (
                    <Link
                        href={demo}
                        className="px-3 py-2 text-sm rounded-xl bg-blue-500/20 border border-blue-500/40 hover:bg-blue-500/30 transition flex justify-between gap-2 items-center"
                    >
                        Live Demo <ExternalLink className='w-4 h-4'/>
                    </Link>
                )}
            </div>
        </div>
            
        </div>
    )
}

export default ProjectCard