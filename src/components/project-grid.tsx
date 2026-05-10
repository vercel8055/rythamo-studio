"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Health Metro",
    category: "Preventive Healthcare Platform",
    description: "A comprehensive monolithic architecture for digital health tracking and doctor-patient registration.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070", // Placeholder if I don't have an image
    link: "https://github.com/Rythamo8055/Health-Metro-Mono",
    tags: ["Next.js", "Supabase", "Node.js"]
  },
  {
    title: "Car App X",
    category: "Immersive 3D Experience",
    description: "A gorgeous 3D parallax Car Explorer Flutter App with video feeds and bookings tray.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070",
    link: "https://github.com/Rythamo8055/car-app-x",
    tags: ["Flutter", "Dart", "3D Animation"]
  }
];

export function ProjectGrid() {
  return (
    <section id="projects" className="py-32 px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-heading font-semibold tracking-tighter mb-6">
              Selected <span className="text-accent italic">Works.</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              We focus on building deep, high-fidelity applications that push the boundaries of conventional web and mobile design.
            </p>
          </div>
          <Link href="https://github.com/Rythamo8055" className="text-sm font-bold uppercase tracking-widest text-accent hover:underline flex items-center gap-2 mb-4">
            Browse All <ArrowUpRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="group"
            >
              <Link href={project.link} className="block space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-subtle rounded-sm">
                   {/* Fallback pattern if image fails */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] opacity-5 group-hover:opacity-10 transition-opacity" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 p-3 bg-background/90 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <ArrowUpRight size={20} className="text-accent" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-accent/10 text-accent rounded-xs">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-heading font-semibold tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/50 leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
