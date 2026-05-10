"use client";

import { motion } from "framer-motion";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--surface)_0%,transparent_70%)] -z-10 opacity-50" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-heading font-semibold tracking-tighter leading-[0.85] mb-8">
              Bespoke Digital <br /> 
              <span className="text-accent italic">Architects.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10">
              Rythamo Studio is a boutique creative-technical collective.
              We build production-grade interfaces for startups and businesses who value craft over templates.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Start a Project</Button>
              <Button variant="outline" size="lg">View Our Work</Button>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="space-y-2 border-l border-accent/20 pl-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-bold">The Team</span>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-medium">Principal Architect</span>
              <span className="text-sm text-foreground/50">Full-stack & System Engineering</span>
            </div>
            <div className="flex flex-col pt-2">
              <span className="text-2xl font-heading font-medium">Creative Lead</span>
              <span className="text-sm text-foreground/50">UI/UX & Interactive Design</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-bold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-accent/30 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
