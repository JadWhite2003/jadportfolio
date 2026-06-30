import React from 'react'
import ProjectCard from './ProjectCard'
import {projects} from '@/data'
import { Spotlight } from '@/components/ui/spotlight'

const ProjectsPage = () => {
  return (
    <div className="relative w-full min-h-screen py-20 px-1 sm:px-16 lg:px-24 bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(75,108,183,0.65)_0%,_rgba(24,40,72,0.65)_100%)] backdrop-blur-md dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,_rgba(15,23,42,0.95)_0%,_rgba(2,8,18,0.95)_100%)]">
      {/* spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen dark:fill-white" />
      <Spotlight className="top-10 -left-full  h-[80vh] w-[50vw] dark:fill-purple" />
      <Spotlight className="top-28 -left-10  h-[80vh] w-[50vw] dark:fill-blue" />
      <div className="relative z-10">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-white/70">See all the things I'm working on</p>
        </div>

        <div className="grid justify-items-center gap-y-3 gap-x-0 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
          {projects.map((project, index) => (
            <div key={index} className="w-[18rem]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage