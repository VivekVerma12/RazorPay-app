'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">L</div>
          <span className="font-semibold text-lg">LearnLab</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/courses" className="hover:text-indigo-600">Courses</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border">Menu</button>
        </div>
      </div>
    </nav>
  )
}
