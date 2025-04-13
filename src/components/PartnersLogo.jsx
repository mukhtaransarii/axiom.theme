const partnerLogos = [
  "https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-1-copyright.png",
  "https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-2-copyright.png",
  "https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-3-copyright.png",
  "https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-4-copyright.png",
  "https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-5-copyright.png",
  "https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-6-copyright.png",
];

export default function Partners() {
  return (
    <div className="w-full px-4 py-10 bg-[#f4f6fa]">
      <div className="grid grid-cols-2 gap-6 items-center justify-items-center lg:flex lg:justify-between">
        {partnerLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            className="w-64 lg:w-32 opacity-20 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
