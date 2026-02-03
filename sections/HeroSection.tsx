'use client'
import { BriefcaseBusiness, ChevronRightIcon, Code, Github, Globe, Instagram, VideoIcon, Youtube } from "lucide-react";
import { motion } from "motion/react";
import TiltedImage from "../components/TiltImage";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function HeroSection() {
   
    const socialFeature = [
        { icon: <BriefcaseBusiness className="h-4 w-4" />, label: "Business" },
        { icon: <Globe className="h-4 w-4" />, label: "SEO" },
        { icon: <Youtube className="h-4 w-4" />, label: "YouTube" },
        { icon: <Code className="h-4 w-4" />, label: "Code" },
        { icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
    ]

    const router = useRouter();

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-pink-600 blur-[300px]"></div>
            <motion.a href="#" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-pink-100 bg-pink-200/15"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-pink-800 text-white text-xs px-3.5 py-1 rounded-full">
                    Gemini
                </span>
                <p className="flex items-center gap-1">
                    <span>Try 10,000 cradit free trial </span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>
            <motion.h1 className="text-5xl/17 md:text-6xl/21 font-medium max-w-2xl text-center text-white"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                  Generate Your favourite Content{" "}
                <span className="move-gradient px-3  rounded-xl text-nowrap">Ai Content</span>
            </motion.h1>
            <motion.p className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Learning the syntax, concepts, and principles of a programming language.</motion.p>
            <motion.div className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button onClick={()=> router.push('/dashboard')} className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-7 h-11">
                    Get started
                </button>
                <button  className="flex items-center gap-2 border text-white border-pink-900 hover:bg-pink-950/50 transition rounded-full px-6 h-11">
                    <Link className="flex gap-2 items-center" href={'https://github.com/Raushanmehta/ai-con'}>
                    <Github strokeWidth={1} />
                    <span>Documentation</span>
                    </Link>
                </button>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-4 mt-12 ">
                {socialFeature.map((item, index) => (
                    <motion.p className="flex items-center gap-2  px-4 py-2
            rounded-xl text-white text-sm
             backdrop-blur-md
            border border-white/20
            shadow-lg 
            hover:border-pink-700 " key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        
                        <span className="text-slate-400">{item.icon}</span>
                        <span className="text-slate-400">{item.label}</span>
                    </motion.p>
                ))}
            </div>
            <TiltedImage />
        </div>
    );
}