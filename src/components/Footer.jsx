export default function Footer() {
  return (
    <footer className="bg-[#040c12] text-gray-400 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid container */}
        <div className="flex flex-col gap-10 lg:flex-row justify-between">
          {/* Office Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Office</h3>
            <p>Germany —</p>
            <p>785 15th Street, Office 478</p>
            <p>Berlin, De 81566</p>
            <p className="mt-3 underline">info@email.com</p>
            <p className="text-white font-semibold mt-1">+1 840 841 25 69</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Links</h3>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Socials</h3>
            <ul className="space-y-1">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Dribbble</li>
              <li>Instagram</li>
            </ul>
          </div>
          

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Newsletter</h3>
            <div className="bg-[#11181f] rounded-full flex items-center p-3">
              <svg
                className="text-gray-400 w-5 h-5 ml-1 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" stroke="none" />
                <path d="M4 4l8 8 8-8" />
              </svg>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-400"
              />
              <button className="bg-[#4f00d3] hover:bg-[#3c00a3] w-10 h-10 rounded-full flex items-center justify-center ml-2">
                <svg
                  className="text-white w-5 h-5 -rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L11 12.586V4a1 1 0 00-2 0v8.586L4.707 9.293a1 1 0 00-1.414 1.414l5 5z" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 rounded" />
              <label>
                I agree to the{" "}
                <span className="underline text-gray-400">Privacy Policy</span>.
              </label>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          AxiomThemes © 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
