
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Linkedin, Youtube, Menu, X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';


// const Header2 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'About me', href: '#' },
//     { name: 'Services', href: '#' },
//     { name: 'Blogs', href: '#' },
//     { name: 'Contact me', href: '#' },
//   ];

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
//         scrolled ? 'bg-white backdrop-blur-md border-b border-white/5' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Logo Section */}
      
//         <div className="group flex flex-shrink-0 cursor-pointer items-center">
//   <Link href="/" className="relative flex items-center">
    
//     <Image
//       src="/logo/13fb5d9e-e6b4-453a-974c-2ea5bdee18c2.png"   // put your logo inside public folder
//       alt="Researcher Logo"
//       width={150}
//       height={100}
//       className="invert brightness-0"
//       priority
//     />

//   </Link>
// </div>

//         {/* Desktop Navigation - Pill Shaped */}
//         <nav className="hidden lg:flex items-center px-12 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
//           <ul className="flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a 
//                   href={link.href} 
//                   className={`text-md font-medium transition-colors hover:text-white/70 ${
//                     link.name === 'Home' ? 'text-white' : 'text-gray-400'
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Right Section: Socials + CTA */}
//         <div className="flex items-center space-x-4">
       

//           <button className="hidden sm:block bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
//             Book a consultation
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="lg:hidden p-2 text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Drawer */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6">
//           <ul className="space-y-6 text-center text-white">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="text-xl font-medium block" onClick={() => setIsMenuOpen(false)}>
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//             <div className="pt-6 border-t border-white/10 flex flex-col items-center space-y-6">
//               <div className="flex space-x-6">
//                 <a href="#"><Linkedin size={24} /></a>
//                 <a href="#"><Youtube size={24} /></a>
//               </div>
//               <button className="w-full bg-white text-black py-4 rounded-full font-bold">
//                 Book a consultation
//               </button>
//             </div>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header2;


////////new
// "use client";

// import React, { useState, useEffect } from "react";
// import { Linkedin, Youtube, Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Header2 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   useEffect(() => {
//     if (!isHomePage) {
//       setScrolled(false);
//       return;
//     }

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHomePage]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About us", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "      Case Studies", href: "/projects" },
//     { name: "Blogs", href: "/blog" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
//         !isHomePage || scrolled
//           ? "bg-white shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="group flex flex-shrink-0 cursor-pointer items-center">
//           <Link href="/" className="relative flex items-center">
//             <Image
//               src="/logo/13fb5d9e-e6b4-453a-974c-2ea5bdee18c2.png"
//               alt="Researcher Logo"
//               width={150}
//               height={100}
//               className={`transition-all duration-300 ${
//                 !isHomePage || scrolled
//                   ? "invert-0 brightness-100"
//                   : "invert brightness-0"
//               }`}
//               priority
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav
//           className={`hidden lg:flex items-center px-12 py-2.5 rounded-full border transition-all duration-300 ${
//             !isHomePage || scrolled
//               ? "bg-gray-100 border-gray-200"
//               : "bg-white/5 border-white/10 backdrop-blur-md"
//           }`}
//         >
//           <ul className="flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className={`text-md font-medium transition-colors ${
//                     !isHomePage || scrolled
//                       ? "text-gray-700 hover:text-black"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
          
//           {/* CTA Button */}
//           <button
//             className={`hidden sm:block px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
//               !isHomePage || scrolled
//                 ? "bg-black text-white hover:bg-gray-800"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
//           >
//             Book a consultation
//           </button>

//           {/* Mobile Toggle */}
//           <button
//             className={`lg:hidden p-2 ${
//               !isHomePage || scrolled ? "text-black" : "text-white"
//             }`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6">
//           <ul className="space-y-6 text-center text-white">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="text-xl font-medium block"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//             <div className="pt-6 border-t border-white/10 flex flex-col items-center space-y-6">
//               <div className="flex space-x-6">
//                 <a href="#"><Linkedin size={24} /></a>
//                 <a href="#"><Youtube size={24} /></a>
//               </div>
//               <button className="w-full bg-white  text-black py-4 rounded-full font-bold">
//                 Book a consultation
//               </button>
//             </div>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header2;


////////another
"use client";

import React, { useState, useEffect } from "react";
import { Linkedin, Youtube, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "      Case Studies", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        !isHomePage || scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="group flex flex-shrink-0 cursor-pointer items-center">
          <Link href="/" className="relative flex items-center">
            <Image
              src="/logo/13fb5d9e-e6b4-453a-974c-2ea5bdee18c2.png"
              alt="Researcher Logo"
              width={150}
              height={100}
              className={`transition-all duration-300 ${
                !isHomePage || scrolled
                  ? "invert-0 brightness-100"
                  : "invert brightness-0"
              }`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex items-center px-12 py-2.5 rounded-full border transition-all duration-300 ${
            !isHomePage || scrolled
              ? "bg-gray-100 border-gray-200"
              : "bg-white/5 border-white/10 backdrop-blur-md"
          }`}
        >
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-md font-medium transition-colors ${
                    !isHomePage || scrolled
                      ? "text-gray-700 hover:text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          
          {/* CTA Button */}
          <button
            className={`hidden sm:block px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              !isHomePage || scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Book a consultation
          </button>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 ${
              !isHomePage || scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6">
          <ul className="space-y-6 text-center text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xl font-medium block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col items-center space-y-6">
              <div className="flex space-x-6">
                <a href="#"><Linkedin size={24} /></a>
                <a href="#"><Youtube size={24} /></a>
              </div>
              <button className="w-full bg-white  text-black py-4 rounded-full font-bold">
                Book a consultation
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header2;

// "use client";
// import React, { useState, useEffect } from 'react';
// import { Linkedin, Youtube, Menu, X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// /**
//  * Lara Acosta Inspired Glassmorphic Header
//  * Features: Scroll-based background transition, 
//  * pill-shaped desktop nav, and mobile drawer.
//  */
// const Header2 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'About me', href: '#' },
//     { name: 'Services', href: '#' },
//     { name: 'Blogs', href: '#' },
//     { name: 'Contact me', href: '#' },
//   ];

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
//         scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Logo Section */}
      
//           <div className="group flex flex-shrink-0 cursor-pointer items-center">
//   <Link href="/" className="relative flex items-center">
    
//     <Image
//       src="/logo/13fb5d9e-e6b4-453a-974c-2ea5bdee18c2.png"   // put your logo inside public folder
//       alt="Researcher Logo"
//       width={150}
//       height={100}
//       className="invert brightness-0"
//       priority
//     />

//   </Link>
// </div>

//         {/* Desktop Navigation - Pill Shaped */}
//         <nav className="hidden lg:flex items-center px-12 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
//           <ul className="flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a 
//                   href={link.href} 
//                   className={`text-lg font-medium transition-colors hover:text-white/70 ${
//                     link.name === 'Home' ? 'text-white' : 'text-gray-400'
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Right Section: Socials + CTA */}
//         <div className="flex items-center space-x-4">
       

//           <button className="hidden sm:block bg-[linear-gradient(135deg,#ff4d4d,#b336cc,#29abe2,#00ffc3)] text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
//             Book a consultation
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="lg:hidden p-2 text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Drawer */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6">
//           <ul className="space-y-6 text-center text-white">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a href={link.href} className="text-xl font-medium block" onClick={() => setIsMenuOpen(false)}>
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//             <div className="pt-6 border-t border-white/10 flex flex-col items-center space-y-6">
//               <div className="flex space-x-6">
//                 <a href="#"><Linkedin size={24} /></a>
//                 <a href="#"><Youtube size={24} /></a>
//               </div>
//               <button className="w-full bg-white text-black py-4 rounded-full font-bold">
//                 Book a consultation
//               </button>
//             </div>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header2;
