import React from 'react';
const heroImage = '/image/hero.webp'

const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})`}}
    >
      {/* Overlay */}
      <div className="absolute inset-0.5 bg-black/20" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 text-white">
        <h1 className="text-4xl mt-8 md:text-6xl font-bold leading-tight font-[ClashDisplay-Regular] ">
          Turning Creative Ideas<br />
          intol Success
        </h1>
        <p className="mt-4 lg:text-lg text-sm max-w-xl">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.
        </p>
        <button className="mt-6 px-6 py-3 bg-cyan-400 text-white font-semibold rounded-full hover:bg-cyan-300 transition">
          Discover Now
        </button>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,138.7C672,160,768,192,864,186.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
