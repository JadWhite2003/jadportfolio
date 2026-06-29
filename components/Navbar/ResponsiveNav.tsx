'use client';
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Nav onOpen={() => setOpen(true)} />
        {open && <MobileNav onClose={() => setOpen(false)} />}
    </div>
  )
}

export default ResponsiveNav