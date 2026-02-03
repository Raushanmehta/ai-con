"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"



interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Templates", href: "/templates" },
  { name: "Pricing", href: "/pricing" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter();

  return (
    <>
      <motion.nav
        className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >

        <Link href="/">
          <Image
            src="/logo-white.png"
            alt="logo"
            width={130}
            height={34}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-pink-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button onClick={()=> router.push('/dashboard')} className="hidden md:block px-6 py-2.5 bg-pink-600
        hover:bg-pink-700 text-white rounded-full transition active:scale-95">
          Start free
        </button>

        
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </motion.nav>

      
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            {link.name}
          </Link>
        ))}

        <button
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center size-10 rounded-md bg-pink-600 hover:bg-pink-700 text-white transition"
          aria-label="Close menu"
        >
          <X />
        </button>
      </div>
    </>
  )
}

export default Navbar
