'use client'

import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"


interface IFooterLink {
  name: string
  href: string
}

interface IFooterSection {
  title: string
  links: IFooterLink[]
}


const footerData: IFooterSection[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Templates", href: "/templates" },
      { name: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Docs", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "Community", href: "/community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
]

/* ================= COMPONENT ================= */

const Footer = () => {
  return (
   <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <a href="#!">
                    <Image className="size-8 aspect-square" src="/logo.png" alt="footer logo" width={32} height={32} priority />
                </a>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-pink-600 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="#!" rel="noreferrer">
                        <DribbbleIcon className="size-5 hover:text-pink-500" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <LinkedinIcon className="size-5 hover:text-pink-500" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <TwitterIcon className="size-5 hover:text-pink-500" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <YoutubeIcon className="size-6 hover:text-pink-500" />
                    </a>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} • Raushanmehta copyright</p>
            </motion.div>
        </footer>
  )
}
export default Footer
