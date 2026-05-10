"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
    >
      <Link href="/" className="text-xl font-heading font-semibold tracking-tighter text-background">
        RYTHAMO<span className="text-accent">STUDIO</span>
      </Link>
      
      <div className="flex items-center gap-10">
        <Link href="#projects" className="text-sm font-medium text-background/80 hover:text-background transition-colors">
          Work
        </Link>
        <Link href="#services" className="text-sm font-medium text-background/80 hover:text-background transition-colors">
          Services
        </Link>
        <Link href="#contact" className="text-sm font-medium text-background/80 hover:text-background transition-colors">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
