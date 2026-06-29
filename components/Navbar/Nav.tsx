'use client';
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Navlinks } from '@/Constant/constant'
import Link from 'next/link'
import { Download, MenuIcon, Type, User } from 'lucide-react'
import ThemeToggler from '../Helper/ThemeToggler'

type Props = {
    onOpen: () => void
}

const Nav = ({ onOpen }: Props) => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()


  return (
    <nav className="fixed top-0 z-50 flex items-center justify-center gap-x-2 sm:gap-x-8 w-full h-16 px-6 py-4 bg-transparent transition-all">
        <div className="flex items-center gap-4 border border-black-800 rounded-2xl px-3 py-3 shadow-xs shadow-zinc-500 dark:shadow-zinc-900/20">
            <User className="w-4 h-4 " />

        </div>

         <div className="flex items-center backdrop-blur-xl border border-white/10 gap-3 rounded-4xl px-4 py-4 hidden lg:flex bg-white/10 dark:bg-zinc-800/10 shadow-xs shadow-zinc-500 dark:shadow-zinc-900/20">
        {Navlinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive
                  ? "text-blue-400 font-medium"
                  : "text-black-300 hover:text-blue-800"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {/*buttons */}
      <div className="flex items-center gap-4 rounded-2xl px-4 py-2" >
        <a href="#" className="box-border relative z-20 inline-flex items-center justify-center w-auto sm:px-6 py-2 px-4 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-500 ring-offset-blue-500 hover:ring-offset-blue-400 ease focus:outline-none shadow-md shadow-zinc-500">
            <span className='relative z-20 flex items-center space-x-2 text-sm'>
                <Download className='w-4 h-4' />
                <span>CV</span>
            </span>
        </a>
        {/* Darkmode toggle */}
        <ThemeToggler/>
        {/* Mobile nav */}
        <button aria-label="Open menu" onClick={onOpen}>
          <MenuIcon className='w-6 h-6 cursor-pointer text-black dark:text-white lg:hidden' />
        </button>
      </div>
    </nav>
  )
}

export default Nav