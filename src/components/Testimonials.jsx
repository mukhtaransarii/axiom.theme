import { useRef, useState } from "react";

const testimonials = [
  { name: "John Dou", role: "Expert", image: "https://seo.axiomthemes.com/wp-content/uploads/2021/09/image-1-300x300.jpg", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna" },
  { name: "Jane Smith", role: "CEO, Business Co.", image: "https://seo.axiomthemes.com/wp-content/uploads/2021/08/image-2-300x300.jpg", quote: "Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas." },
  { name: "Mark Lee", role: "Expert", image: "https://seo.axiomthemes.com/wp-content/uploads/2021/08/image-13-300x300.jpg", quote: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
];

export default function TestimonialScroll() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (index) => {
    const container = scrollRef.current;
    if (container && container.children[index]) {
      container.children[index].scrollIntoView({ behavior: "smooth", inline: "start" });
      setCurrentIndex(index);
    }
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    scrollTo(nextIndex);
  };

  const prev = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollTo(prevIndex);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto py-8 px-4">
      {/* Testimonials */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 no-scrollbar"
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="w-full snap-start bg-white rounded-xl shadow p-6 text-center shrink-0"
          >
            <img src={item.image} className="w-20 h-20 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 mb-4 break-words whitespace-normal">{item.quote}</p>
            <h1 className="text-cyan-500 text-8xl mb-2 h-10">“</h1>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.role}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border shadow w-8 h-8 flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border shadow w-8 h-8 flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? "bg-purple-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
