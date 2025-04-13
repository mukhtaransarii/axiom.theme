import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram } from 'react-icons/fa';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null)
  
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PAGES", path: "/pages" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];
 
  const socialIcon = [
    { url: 'https://m.facebook.com/@AxiomThemes', icon: <FaFacebookF /> },
    { url: 'https://x.com/ThemesAxiom', icon: <FaTwitter /> },
    { url: 'https://dribbble.com/AxiomThemes', icon: <FaDribbble /> },
    { url: 'https://www.instagram.com/axiom_themes/', icon: <FaInstagram /> }
  ];
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const nav = navRef.current;
  
    ScrollTrigger.create({
      trigger: nav,
      start: "top -10%",
      end: "top-0",
      onEnter: () => {
        nav.classList.remove("top-0", "w-full")
        nav.classList.add(
          "top-4",
          "bg-white/30",
          "backdrop-blur-md",
          "rounded-md",
          "w-[85vw]",
          "left-[7.5vw]",
        );
      },
      onLeaveBack: () => {
        nav.classList.remove(
          "top-4",
          "bg-white/30",
          "backdrop-blur-md",
          "rounded-md",
          "w-[85vw]",
          "left-[7.5vw]",
        );
      nav.classList.add("top-0", "w-full")
      },
    });
  }, []);




  


  return (
    <nav
    ref={navRef}
    className="fixed top-0 left-0 z-[999] h-16 w-full px-4 py-3 flex items-center justify-between transition-all duration-500 ease-in-out"
  >

      {/* Logo & Desktop Nav */}
      <img src="/image/logo.webp" className="w-32 lg:w-20 relative z-[1000] invert" alt="Logo" />
      <div className="flex items-center gap-3">

        <div className="hidden lg:flex lg:gap-2">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`text-xs ${
                active === item.name
                  ? "underline underline-offset-2 decoration-2 font-semibold text-cyan-400"
                  : "text-black"
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Search Icon (all sizes) */}
        <button className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
          </svg>
        </button>

        {/* CTA (desktop only) */}
        <button className="hidden lg:block bg-[#4703FF] rounded-full px-3 py-2 text-white text-sm font-semibold">
          Let's Talk
        </button>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden relative z-[1000] flex flex-col justify-center items-center w-16 h-8"
          onClick={() => setMenuOpen(!menuOpen)}>
          
          <span className={`block mb-1 w-16 h-0.5 bg-black transform transition duration-300 ease-in-out origin-left ${
              menuOpen ? 'rotate-[9.5deg]' : ''}`}/>
        
          <span className={`block mt-1 w-16 h-0.5 bg-black transform transition duration-300 ease-in-out origin-left ${
                menuOpen ? '-rotate-[9.5deg]' : ''}`}/>
        
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed -top-16 left-1/2 -translate-x-1/2 w-[100vw] h-[120vh] bg-gray-50 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >

       <div className="flex flex-col px-4 mt-[30vh]">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-7xl text-zinc-800 font-[Grotesk] leading-none"
              onClick={() => setMenuOpen(false)}
              >
              <span className="text-sm font-light mr-2">0{i+1}</span>
              {item.name}       
            </Link>
          ))}
       </div>
       
       {/*Soical Icons*/}
       <hr className="mt-16 mx-4 border-[0.5px] border-gray-400"/>
       <div className="p-4 flex gap-4">
          {socialIcon.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="text-gray-400">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
