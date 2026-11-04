import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Testimonials() {
  const gallery = [
    "/img/classes-1.jpg",
    "/img/classes-2.jpg",
    "/img/classes-3.jpg",
    "/img/classes-4.jpg",
    "/img/classes-5.jpg",
    "/img/classes-6.jpg",
  ];

  return (
    <footer className="bg-[#103741] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        
         
       

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Get In Touch
          </h3>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <FaLocationDot />
              123 Street, New York, USA
            </p>

            <p className="flex items-center gap-3">
              <FaPhone />
              +012 345 67890
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope />
              info@example.com
            </p>
          </div>
             
          <div className="flex gap-3 mt-4">
            <span className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
              <FaTwitter />
            </span>

            <span className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
              <FaFacebookF />
            </span>

            <span className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
              <FaYoutube />
            </span>

            <span className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300 ">
            <a  className="transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"href="/">About Us</a>
            <a  className="transition-all duration-300 hover:-translate-y-1 hover:text-orange-500" href="/">Contact Us</a>
            <a  className="transition-all duration-300 hover:-translate-y-1 hover:text-orange-500" href="/">Our Services</a>
            <a  className="transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"href="/">Terms & Condition</a>
            <a  className="transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"href="/">Support</a>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Photo Gallery
          </h3>

          <div className="grid grid-cols-3 gap-2">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-full h-20 object-cover rounded-lg"
              />
            ))}
          </div>
           </div>


{/* Newsletter */}
      
        <div>

          <h3 className="text-2xl font-semibold mb-3">
            Newsletter
          </h3>
           <p className="text-gray-300 mb-6">
            Diam elitr est dolore at sanctus nonumy.
            Accusam et sed stet no lorem est.
          </p>

          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 min-w-0 p-4 text-black bg-white outline-none rounded-l-full"
            />

            <button className="bg-orange-500 px-6 rounded-r-full whitespace-nowrap">
              Sign Up
            </button>
          </div>

        </div>
      </div>
      

      {/* Copyright */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm text-center md:text-left">

          <p>
            <a className="underline decoration-2 underline-offset-6"  href="/">© Your Site Name</a>
            , All Rights Reserved.Designed by <a className="underline decoration-2 underline-offset-6" href="https://htmlcodex.com">HTML Codex</a> <br />
          
          Distributed by: <a  className="underline decoration-2 underline-offset-6" href="https://themewagon.com">ThemeWagon</a></p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a className=" hover:text-orange-500" href="/">Home</a>
            <a className=" hover:text-orange-500" href="/">Cookies</a>
            <a className=" hover:text-orange-500" href="/">Help</a>
            <a  className=" hover:text-orange-500"href="/">FAQs</a>
          </div>

        </div>
      </div>

    </footer>
  );
}