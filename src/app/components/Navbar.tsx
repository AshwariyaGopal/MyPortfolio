"use client"; // This directive tells Next.js to treat this as a client component

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black font-bold shadow-md z-50 ">
      <nav className="container mx-auto flex justify-between items-center p-3">
        <div className="text-2xl font-bold ">
          <div className='font-bold '> My Portfolio</div>
        </div>
        <div className="hidden md:flex space-x-8 mr-5">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col md:hidden bg-gray-800 p-5 space-y-4">
          <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}
