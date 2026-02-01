import React from 'react'
import { Button } from '@/components/Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'




const navLinks = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#experience", title: "Experience" },
  { href: "#testimonials", title: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
          PM<span className='text-primary'>.</span>
        </a>
        {/* Desktop Navbar */}
        <div className='flex items-center gap-10'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className='hidden md:block'>
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className='md:hidden p-2 text-foreground cursor-pointer' 
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in '>
          <div className='container mx-auto px-6 py-6 flex flex-col gap-4  '>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className='text-lg text-muted-foreground hover:text-foreground py-2'>
                {link.title}
              </a>
            ))}
            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar