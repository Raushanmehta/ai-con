import { BriefcaseBusiness, Code, Globe, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const SocialButton = () => {
  return (
    <motion.div className="flex flex-wrap gap-3">
      {[
        { icon: <BriefcaseBusiness className="h-4 w-4" />, label: "Business" },
        { icon: <Globe className="h-4 w-4" />, label: "SEO" },
        { icon: <Youtube className="h-4 w-4" />, label: "YouTube" },
        { icon: <Code className="h-4 w-4" />, label: "Code" },
        { icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
      ].map((item, i) => (
        <Link
          key={i}
          href="/"
          className="
            flex items-center gap-2 px-4 py-2
            rounded-xl text-white text-sm
             backdrop-blur-md
            border border-white/20
            shadow-lg
            transition-all duration-300
            hover:border-pink-400 hover:scale-104
            active:scale-94
          "
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
};

export default SocialButton;
