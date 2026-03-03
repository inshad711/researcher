
// "use client";
// import React from 'react';
// import { 
//   Facebook, 
//   Twitter, 
//   Instagram, 
//   Linkedin, 
//   MapPin, 
//   Phone, 
//   Mail 
// } from 'lucide-react';


// const Footer2: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   // Social Media Links Configuration
//   const socialLinks = [
//     { icon: <Facebook size={18} />, href: "#", color: "bg-blue-600" },
//     { icon: <Twitter size={18} />, href: "#", color: "bg-sky-500" },
//     { icon: <Instagram size={18} />, href: "#", color: "bg-pink-600" },
//     { icon: <Linkedin size={18} />, href: "#", color: "bg-blue-700" },
//   ];

//   // Link Section Configuration
//   const quickLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
//   const services = ["Web Design", "Development", "Marketing", "Consulting", "Analytics"];

//   return (
//     <footer className="bg-[#050505] text-white py-12 md:py-16">
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
//           {/* Column 1: Company Info */}
//           <div className="space-y-6">
//             <h5 className="text-3xl font-semibold mb-4 text-white">Researcher</h5>
//             <p className="text-zinc-400 leading-relaxed max-w-sm">
//               We are dedicated to providing innovative solutions that help businesses grow and succeed 
//               in the digital age.
//             </p>
//             {/* <div className="flex items-center space-x-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className={`${social.color} w-9 h-9 flex items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 shadow-lg`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div> */}
//             <div className="flex items-center gap-4">
//   {socialLinks.map((social, index) => (
//     <a
//       key={index}
//       href={social.href}
//       className="relative group"
//     >
    
//       {/* Icon Container */}
//       <span className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-transparent">
//         <span className="transition-transform duration-300 group-hover:rotate-12">
//           {social.icon}
//         </span>
//       </span>
//     </a>
//   ))}
// </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h5 className="text-xl font-semibold mb-6 text-white">Quick Links</h5>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link}>
//                   <a 
//                     href="#" 
//                     className="text-zinc-400 hover:text-blue-500 transition-colors duration-200 block"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Services */}
//           <div>
//             <h5 className="text-xl font-semibold mb-6 text-white">Services</h5>
//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <a 
//                     href="#" 
//                     className="text-zinc-400 hover:text-blue-500 transition-colors duration-200 block"
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Contact Info */}
//           <div>
//             <h5 className="text-xl font-semibold mb-6 text-white">Contact Info</h5>
//             <ul className="space-y-4">
//               <li className="flex items-start text-zinc-400 group">
//                 <MapPin className="mr-3 text-blue-500 shrink-0 mt-1" size={18} />
//                 <span className="group-hover:text-zinc-200 transition-colors duration-200">
//                   123 Business Street, New York, NY 10001
//                 </span>
//               </li>
//               <li className="flex items-center text-zinc-400 group">
//                 <Phone className="mr-3 text-blue-500 shrink-0" size={18} />
//                 <a 
//                   href="tel:+1234567890" 
//                   className="hover:text-blue-500 transition-colors duration-200"
//                 >
//                   +1 (234) 567-890
//                 </a>
//               </li>
//               <li className="flex items-center text-zinc-400 group">
//                 <Mail className="mr-3 text-blue-500 shrink-0" size={18} />
//                 <a 
//                   href="mailto:contact@example.com" 
//                   className="hover:text-blue-500 transition-colors duration-200"
//                 >
//                   contact@example.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-16 pt-8 border-t border-zinc-800">
//           <div className="text-center">
//             <p className="text-zinc-500 text-sm">
//               &copy; {currentYear} Your Company. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer2;



import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Youtube,
  
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesMenu, type ServiceMenuItem } from '@/data/servicesMenu';


const Footer2: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Social Media Links Configuration
  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/ResearchersMe/", color: "bg-blue-600" },
    { icon: <Twitter size={18} />, href: "https://x.com/researchers_me", color: "bg-sky-500" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/researchers.me/", color: "bg-pink-600" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/researchers-me/", color: "bg-blue-700" },
    { icon: <Youtube size={18} />, href: "https://www.youtube.com/@Researchers-MENA", color: "bg-blue-700" },
    // { icon: <PinterestIcon size={18} />, href: "https://in.pinterest.com/researchers_me/", color: "bg-blue-700" },
    {
  icon: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49-.09-.81-.17-2.06.04-2.95.19-.81 1.23-5.17 1.23-5.17s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.34.67 1.34 1.48 0 .9-.57 2.24-.86 3.48-.24 1.02.51 1.86 1.51 1.86 1.81 0 3.2-1.91 3.2-4.66 0-2.44-1.75-4.15-4.26-4.15-2.9 0-4.6 2.17-4.6 4.42 0 .88.34 1.83.76 2.34.08.1.09.19.07.29-.08.32-.25 1.02-.28 1.16-.04.19-.14.23-.32.14-1.2-.56-1.95-2.33-1.95-3.74 0-3.04 2.21-5.83 6.37-5.83 3.34 0 5.94 2.38 5.94 5.57 0 3.32-2.09 5.99-4.99 5.99-.97 0-1.88-.5-2.19-1.1l-.6 2.28c-.22.85-.82 1.92-1.22 2.57.92.28 1.9.43 2.92.43 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  ),
  href: "https://in.pinterest.com/researchers_me/",
},
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const flattenServiceLinks = (items: ServiceMenuItem[]): { name: string; href: string }[] => {
    const links: { name: string; href: string }[] = [];
    for (const item of items) {
      if (item.href) {
        links.push({ name: item.name, href: item.href });
      }
      if (item.children?.length) {
        links.push(...flattenServiceLinks(item.children));
      }
    }
    return links;
  };

  const services = flattenServiceLinks(servicesMenu).slice(0, 6);

  return (
   <footer className="relative bg-black text-white overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />

  <div className="relative container mx-auto px-4 pt-16 pb-8 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Column 1 */}
      <div className="space-y-6">
        {/* <h5 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Researcher
        </h5> */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="/logo/13fb5d9e-e6b4-453a-974c-2ea5bdee18c2.png"
              alt="Researcher Logo"
              width={150}
              height={100}
            className=' invert brightness-0'
              priority
            />
          </Link>
        <p className="text-zinc-300 leading-relaxed">
          We create innovative digital experiences that empower brands and help
          businesses grow in the modern era.
        </p>

                  <div className="flex items-center gap-2">
  {socialLinks.map((social, index) => (
    <a
      key={index}
      href={social.href}
      className="relative group"
    >
    
      {/* Icon Container */}
      <span className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-transparent">
        <span className="transition-transform duration-300 group-hover:rotate-12">
          {social.icon}
        </span>
      </span>
    </a>
  ))}
</div>
      </div>

      {/* Column 2 */}
      <div>
        <h5 className="text-xl font-semibold mb-6 relative inline-block">
          Quick Links
          <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-white"></span>
        </h5>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-zinc-300 hover:text-white transition-colors duration-300 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h5 className="text-xl font-semibold mb-6 relative inline-block">
          Services
                 <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-white"></span>
        </h5>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="text-zinc-300 hover:text-white transition-colors duration-300 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h5 className="text-xl font-semibold mb-6 relative inline-block">
          Contact
         <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-white"></span>
        </h5>

        <ul className="space-y-4 text-zinc-300">
          {/* <li className="flex items-start gap-3 hover:text-white transition">
            <MapPin size={18} className="text-blue-500 mt-1" />
           UAE Office Address: 20th Floor, Regal Tower, Business Bay, Dubai, United Arab Emirates
          </li> */}
          <li className="flex items-start gap-3 hover:text-white transition">
  {/* Add flex-shrink-0 here */}
  <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
  UAE Office Address: 20th Floor, Regal Tower, Business Bay, Dubai, United Arab Emirates
</li>

          <li className="flex items-center gap-3 hover:text-white transition">
            <Phone size={18} className="text-purple-500" />
          +966 56 639 2386
          </li>

          <li className="flex items-center gap-3 hover:text-white transition">
            <Mail size={18} className="text-blue-400" />
         info@researchers.me
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
      <p>© {currentYear} Researcher. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer2;


///new 

// "use client";
// import React from 'react';
// import { 
//   Facebook, 
//   Twitter, 
//   Instagram, 
//   Linkedin, 
//   MapPin, 
//   Phone, 
//   Mail 
// } from 'lucide-react';


// const Footer2: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   // Social Media Links Configuration
//   const socialLinks = [
//     { icon: <Facebook size={18} />, href: "#", color: "bg-blue-600" },
//     { icon: <Twitter size={18} />, href: "#", color: "bg-sky-500" },
//     { icon: <Instagram size={18} />, href: "#", color: "bg-pink-600" },
//     { icon: <Linkedin size={18} />, href: "#", color: "bg-blue-700" },
//   ];

//   // Link Section Configuration
//   const quickLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
//   const services = ["Web Design", "Development", "Marketing", "Consulting", "Analytics"];

//   return (
//     <footer className="bg-gradient-to-r from-[#b6134e] to-[#e38d2c] text-white py-12 md:py-16">
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
//           {/* Column 1: Company Info */}
//           <div className="space-y-6">
//             <h5 className="text-3xl font-semibold mb-4 text-white">Researcher</h5>
//             <p className="text-zinc-400 leading-relaxed max-w-sm">
//               We are dedicated to providing innovative solutions that help businesses grow and succeed 
//               in the digital age.
//             </p>
//             <div className="flex items-center space-x-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className={`${social.color} w-9 h-9 flex items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 shadow-lg`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h5 className="text-xl font-semibold mb-6 text-white">Quick Links</h5>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link}>
//                   <a 
//                     href="#" 
//                     className="text-zinc-400 hover:text-blue-500 transition-colors duration-200 block"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Services */}
//           <div>
//             <h5 className="text-xl font-semibold mb-6 text-white">Services</h5>
//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <a 
//                     href="#" 
//                     className="text-zinc-400 hover:text-blue-500 transition-colors duration-200 block"
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Contact Info */}
//           <div>
//             <h5 className="text-xl font-semibold mb-6 text-white">Contact Info</h5>
//             <ul className="space-y-4">
//               <li className="flex items-start text-zinc-400 group">
//                 <MapPin className="mr-3 text-blue-500 shrink-0 mt-1" size={18} />
//                 <span className="group-hover:text-zinc-200 transition-colors duration-200">
//                   123 Business Street, New York, NY 10001
//                 </span>
//               </li>
//               <li className="flex items-center text-zinc-400 group">
//                 <Phone className="mr-3 text-blue-500 shrink-0" size={18} />
//                 <a 
//                   href="tel:+1234567890" 
//                   className="hover:text-blue-500 transition-colors duration-200"
//                 >
//                   +1 (234) 567-890
//                 </a>
//               </li>
//               <li className="flex items-center text-zinc-400 group">
//                 <Mail className="mr-3 text-blue-500 shrink-0" size={18} />
//                 <a 
//                   href="mailto:contact@example.com" 
//                   className="hover:text-blue-500 transition-colors duration-200"
//                 >
//                   contact@example.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-16 pt-8 border-t border-zinc-800">
//           <div className="text-center">
//             <p className="text-zinc-500 text-sm">
//               &copy; {currentYear} Your Company. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer2;
