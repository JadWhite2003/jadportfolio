'use client';
import { Navlinks } from '@/Constant/constant'
import { X } from 'lucide-react';
import Link from 'next/dist/client/link'
import React from 'react'

type Props = {
    onClose: () => void
}

const MobileNav = ({ onClose }: Props) => {
  return (
    <div className='fixed inset-0 z-50 w-full h-full bg-black/50 backdrop-blur-md flex justify-center items-center'>
        {/* Mobile nav blurred overlay*/ }
        <div className='flex flex-col gap-6 w-72 p-6 bg-black-900/40 backdrop-blur-md border border-white/10 rounded-2xl'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold text-white'>Navigation</h2>
            <button aria-label="Close menu" className='text-white text-lg cursor-pointer' onClick={onClose}>
                    <X className='w-6 h-6' />
                </button>
        </div>
        {/* Mobile nav links */ }
        <nav className='flex flex-col gap-4'>
            {Navlinks.map((link) => {

          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition hover:text-blue-400"
              onClick={onClose}
            >
              {link.name}
            </Link>
             );
        })}
        </nav>
            
        </div>

    </div>
  )
}

export default MobileNav