import React from 'react'




const navLinks = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#experience", title: "Experience" },
  { href: "#testimonials", title: "Testimonials" },
];

export const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
          PM<span className='text-primary'>.</span>
        </a>
        {/* Desktop Navbar */}
        <div className='flex items-center gap-10'>
          <div className='glass'>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar