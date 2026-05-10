import PillNav from "@/components/pill-nav/pill-nav";
import FlowingMenu from "@/components/flowing-menu/flowing-menu";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

const serviceItems = [
  { link: '#', text: 'Web Design', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600' },
  { link: '#', text: 'App Development', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600' },
  { link: '#', text: 'UI/UX Strategy', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600' },
  { link: '#', text: '3D Experiences', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600' }
];

export default function Home() {
  return (
    <main className="relative bg-background overflow-hidden">
      <PillNav 
        logo="/logo.png" 
        logoAlt="Rythamo Studio"
        items={navItems}
        activeHref="/"
      />
      
      <Hero />
      
      <ProjectGrid />
      
      {/* Services Section with FlowingMenu */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <h2 className="text-5xl md:text-7xl font-heading font-semibold tracking-tighter">
            Our <span className="text-accent italic">Expertise.</span>
          </h2>
        </div>
        
        <div className="h-[600px] relative">
          <FlowingMenu 
            items={serviceItems}
            speed={20}
          />
        </div>
      </section>
      
      {/* Footer Minimal */}
      <footer id="contact" className="py-20 px-8 border-t border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-heading font-semibold tracking-tighter">
            RYTHAMO<span className="text-accent">STUDIO</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold">
            © 2026 Rythamo Studio. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">GitHub</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
