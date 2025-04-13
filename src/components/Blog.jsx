import { useEffect, useRef, useState } from "react";

const blogPosts = [
  {
    image: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-9-890x664.jpg",
    category: "MEDIA SEO",
    title: "What’s trending on designers’ charts this spring",
    date: "Apr 21, 2020",
    comments: "0 Comments",
  },
  {
    image: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-10-890x664.jpg",
    category: "MEDIA SEO",
    title: "What’s trending on designers’ charts this spring",
    date: "Apr 21, 2020",
    comments: "0 Comments",
  },
  {
    image: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-11-890x664.jpg",
    category: "MEDIA SEO",
    title: "What’s trending on designers’ charts this spring",
    date: "Apr 21, 2020",
    comments: "0 Comments",
  },
  {
    image: "https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-12-890x664.jpg",
    category: "MEDIA SEO",
    title: "What’s trending on designers’ charts this spring",
    date: "Apr 21, 2020",
    comments: "0 Comments",
  },
];

export default function Blog() {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % blogPosts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      const childWidth = slideRef.current.firstChild.offsetWidth;
      const containerWidth = slideRef.current.offsetWidth;
      const offset = (childWidth + 16) * current - (containerWidth - childWidth) / 2;

      slideRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div className="bg-[#f4f6fa] px-4 py-12">
      <div className="text-center mb-6">
        <p className="uppercase text-sm tracking-wide text-[#1e1e60] font-semibold">Our Blog</p>
        <h2 className="text-3xl font-bold text-[#1e1e60]">Latest articles</h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={slideRef}
          className="flex gap-4 transition-all duration-500 overflow-x-auto scroll-smooth no-scrollbar justify-start"
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="shrink-0 w-[90vw] lg:w-[40vw] bg-white rounded-2xl overflow-hidden"
            >
              <img
                src={post.image}
                alt="blog"
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <p className="text-sm font-semibold text-[#1e1e60] uppercase">
                  {post.category}
                </p>
                <h3 className="text-xl font-bold text-[#1e1e60] mt-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {post.date} • {post.comments}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {blogPosts.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-[#1e1e60]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
