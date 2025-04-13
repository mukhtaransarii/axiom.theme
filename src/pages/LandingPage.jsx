import { useState, useEffect, useRef } from 'react'
import Hero from '../components/Hero.jsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Testimonials from '../components/Testimonials.jsx'
import PartnersLogo from '../components/PartnersLogo.jsx'
import Blog from '../components/Blog.jsx'
import Footer from '../components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
 const statRefs = useRef([])

 
 const stats = [
    { label: 'Projects', value: 98 },
    { label: 'People', value: 65 },
    { label: 'Years', value: 10 },
    { label: 'Offices', value: 15 }
  ];
  
  useEffect(() => {
    statRefs.current.forEach((el, index) => {
      gsap.to(el, {
        innerText: stats[index].value,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        snap: { innerText: 1 }
      })
    })
  }, [])
  
  const images = [
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-14.png',
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-15.png',
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-16.png',
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-17.png',
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-14.png',
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-15.png',
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-16.png',
    'https://seo.axiomthemes.com/wp-content/uploads/2023/03/image-17.png',
  ]

  return (
    <div>
      <Hero/>
      
      {/* 2nd box */}
      <div className="p-4 flex flex-col lg:flex-row gap-4">
        <div className="relative lg:w-[400px] lg:h-[400px] w-[90vw] h-[90vw] mx-auto lg:mx-0">
          <img src="https://plus.unsplash.com/premium_photo-1695161972717-88604b9c5642" className="rounded-2xl w-[75%] absolute" />
          <img src="https://images.unsplash.com/photo-1531421331102-e5124fed6bc0" className="rounded-2xl w-[75%] absolute bottom-0 right-0" />
        </div>
        
        <div className="p-4">
          <p className="text-sm">CREATIVE AGENCY</p>
          <h1 className="my-2 text-3xl font-bold">We help your business grow</h1>
          <p className="text-sm text-gray-400">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
           
          <div className="mt-4 flex gap-2 items-center">
            <svg className="w-12 h-12" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 80.3 80.3" xmlSpace="preserve"><style>{".st6{fill:#0c2c48}.st28{fill:#a3b9c4}"}</style><circle cx="40.2" cy="40.2" r="40.2" fill="#f6a09c"/><path fill="#fff" d="M13.7 16.6h52.9v47.3H13.7z"/><path fill="#f8a06d" d="M14.2 16.4h51.9v6.8H14.2z"/><path className="st6" d="M67.2 23.8H13v-8.2h54.2v8.2zm-52.7-1.5h51.2v-5.2H14.5v5.2zM27.7 59.7H16V25.8h11.7v33.9zm-10.2-1.5h8.7V27.3h-8.7v30.9zM29.9 26h34.3v8.3H29.9z"/><path className="st28" d="M31.4 27.5h31.3v5.3H31.4z"/><path className="st6" d="M29.9 35.7h9.2v21.7h-9.2z"/><path fill="#55ab99" d="M31.4 37.2h6.2v18.7h-6.2z"/><path className="st6" d="M42.5 35.7h9.2v21.7h-9.2z"/><path fill="#ed6b5a" d="M44 37.2h6.2v18.7H44z"/><path className="st6" d="M55.2 35.7h9.2v21.7h-9.2z"/><path className="st28" d="M56.7 37.2h6.2v18.7h-6.2z"/><path className="st6" d="M16.6 19.8c0-.4.3-.8.7-.8.4 0 .7.3.7.8 0 .4-.3.8-.7.8-.4-.1-.7-.4-.7-.8zM19 19.8c0-.4.3-.8.7-.8.4 0 .7.3.7.8 0 .4-.3.8-.7.8-.4-.1-.7-.4-.7-.8zM21.5 19.8c0-.4.3-.8.7-.8.4 0 .7.3.7.8 0 .4-.3.8-.7.8-.4-.1-.7-.4-.7-.8z"/><g><path className="st6" d="M34.1 30c0-.4.3-.8.7-.8.4 0 .7.3.7.8 0 .4-.3.8-.7.8-.4 0-.7-.4-.7-.8zM36.6 30c0-.4.3-.8.7-.8.4 0 .7.3.7.8 0 .4-.3.8-.7.8-.5 0-.7-.4-.7-.8zM39 30c0-.4.3-.8.7-.8s.7.3.7.8c0 .4-.3.8-.7.8-.4 0-.7-.4-.7-.8z"/></g></svg>
            <div>
              <p className="font-bold">Creative Design</p>
              <p className="text-gray-400">Natus error sit voluptatem accus antium doloremque.</p>
            </div>
          </div>
          
          <div className="mt-4 flex gap-2 items-center">
           <svg className="w-12 h-12" viewBox="0 0 80.3 80.3" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="40.2" cy="40.2" r="40.2" fill="#f8a06d"/><path fill="#0c2c48" d="M38.6 34.2h1.3V60h-1.3z"/><ellipse cx="23.1" cy="18" rx="10.3" ry="4.8" fill="#fff"/><path fill="#55ab99" d="M46 51.5c0 .4-.4.8-.8.8H33.4c-.4 0-.8-.4-.8-.8v-9.9c0-.4.4-.8.8-.8h11.9c.4 0 .8.4.8.8v9.9z"/><path fill="#0c2c48" d="M34.8 46.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM38.3 46.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM41.8 46.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/><path fill="#ed6b5a" d="M46 35.5c0 .4-.4.8-.8.8H33.4c-.4 0-.8-.4-.8-.8v-9.9c0-.4.4-.8.8-.8h11.9c.4 0 .8.4.8.8v9.9z"/><path fill="#0c2c48" d="M34.8 30.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM38.3 30.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM41.8 30.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/><path fill="#698391" d="M46 67.6c0 .4-.4.8-.8.8H33.4c-.4 0-.8-.4-.8-.8v-9.9c0-.4.4-.8.8-.8h11.9c.4 0 .8.4.8.8v9.9z"/><path fill="#0c2c48" d="M34.8 62.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM38.3 62.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM41.8 62.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM30.8 31.1h-5c-2 0-3.7-1.8-3.7-4v-2.7h1.4v2.7c0 1.4 1 2.6 2.3 2.6h5v1.4zM61.3 53.2h-1.4v-3c0-1.3-1-2.3-2.3-2.3H48v-1.4h9.7c2 0 3.7 1.7 3.7 3.7v3zM53.4 55h16.3v10H53.4zM57.6 45.4H48V44h9.7c1.3 0 2.3-1 2.3-2.3v-3h1.4v3c-.1 2-1.7 3.7-3.8 3.7zM31.4 63.1H18.8c-2 0-3.7-1.8-3.7-4v-2.7h1.4v2.7c0 1.4 1 2.6 2.3 2.6h12.6v1.4z"/><path fill="#bfd9e6" d="M68.5 37.6H53.7V22.8h10l4.8 4.5z"/><path fill="#fff" d="M68.5 27.3h-4.8v-4.5z"/><path fill="#798287" d="M55.9 26.2H63v1.2h-7.1zM55.9 29.6h10.4v1.2H55.9zM55.9 33h10.4v1.2H55.9zM17.1 15.9h12.5v1.3H17.1zM17.1 18.4h12.5v1.3H17.1z"/><path fill="#a3b9c4" d="M23.8 55.1H9V40.3h9.9l4.9 4.6z"/><path fill="#fff" d="M23.8 44.9H19v-4.6z"/><path fill="#798287" d="M11.2 43.7h7.1v1.2h-7.1zM11.2 47.2h10.4v1.2H11.2zM11.2 50.6h10.4v1.2H11.2zM55.8 57.7h11.5v1.2H55.8zM55.8 60.4h11.5v1.2H55.8z"/></svg>
           <div>
              <p className="font-bold">Endless possibilities</p>
              <p className="text-gray-400">Sit voluptatem accus antium doloremque laudan.</p>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-2 text-center lg:grid-cols-4">
            {stats.map((item, index) => (
              <div key={index} className="relative py-10">
                <h2
                  ref={(el) => (statRefs.current[index] = el)}
                  className="text-blue-50 text-8xl font-bold"
                  data-target={item.value}
                  id={`count-${index}`}
                >
                  0
                </h2>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-950 text-lg font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/*3rd Card*/}
      <div className="p-4">
        <p className="text-sm">CREATIVE SOLUTIONS</p>
        <h1 className="my-2 text-3xl font-bold">We make unique & memorable brands</h1>
        <p className="text-sm text-gray-400">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
         
         {/* Scroll Images Div */}
         <div className="my-4 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-4 w-max">
              {images.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  className="w-[80vw] lg:w-[30vw] object-cover rounded-2xl snap-center"
                />
              ))}
           </div>
         </div>
      </div>
      
      {/*4th Subscribe with email*/}
      <div className="bg-white px-4 py-8 rounded-xl w-full flex flex-col justify-between lg:flex-row gap-4">
        <h2 className="text-2xl font-semibold text-black">
          Subscribe for the exclusive updates!
        </h2>
        
        <div className="flex-1">
        <div className="flex items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="px-4 py-3 rounded-full w-full max-w-md outline-none text-gray-700 bg-gray-100 placeholder-gray-500"
          />
          <button className="flex items-center gap-2 bg-[#4F21F0] text-white px-6 py-3 rounded-full font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6-9 6-9-6zm0 0v10l9-6 9 6V10" />
            </svg>
            Subscribe
          </button>
        </div>
      
        <label className="mt-4 flex items-center text-sm text-gray-600 cursor-pointer gap-2">
          <input type="checkbox" className="w-4 h-4" />
          I agree to the <span className="underline text-gray-800">Privacy Policy</span>.
        </label>
        </div>
      </div>

      {/*5th Testimonials */}
      <Testimonials/>
      
      {/*6th cards and Who we are */}
      <div className="my-6 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="relative lg:w-[400px] lg:h-[400px] w-[90vw] h-[90vw]  mx-auto lg:mx-0">
            <img src="https://plus.unsplash.com/premium_photo-1695161972717-88604b9c5642" className="rounded-2xl w-[75%] absolute top-0 right-0" />
            <img src="https://images.unsplash.com/photo-1531421331102-e5124fed6bc0" className="rounded-2xl w-[75%] absolute bottom-0 left-0" />
        </div>
        
        
        <div className="p-4">
          <p className="text-sm">WHO WE ARE</p>
          <h1 className="my-2 text-3xl font-bold">We provide best digital services</h1>
          <p className="text-sm text-gray-400">
           Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
          </p>
          
          <button className="mt-6 px-6 py-3 bg-cyan-400 text-white font-semibold rounded-full hover:bg-cyan-300 transition">
            Discover Now
          </button>
        </div>
      </div>
      
      {/*7th PartnersLogo*/}
      <PartnersLogo/>
      
      {/*8th Blog*/}
      <Blog/>
      
      {/*Footer*/}
      <Footer/>
    </div>
  )
}