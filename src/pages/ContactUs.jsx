import { FaLocationDot } from "react-icons/fa6";
import PageHeader from "../components/Common/PageHeader";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Testimonials from "../components/Home/Testimonials";

export default function ContactUs() {
  return (
    <div  className="bg-white space-y-10 min-h-screen">
 <PageHeader title="Contact Us" />

<div className="flex flex-col items-center text-center max-w-7xl mx-auto my-20 space-y-3 ">
<h1 className="text-4xl font-bold">Get In Touch</h1>
          <p className=" max-w-2xl mx-auto text-gray-500 ">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
</div>

<div className=" flex justify-evenly items-center gap-25">

  <div className="flex flex-col items-center">
    <div className=" mb-3 h-15 w-15 rounded-full bg-orange-50 flex items-center justify-center"> <FaLocationDot className="text-orange-500 text-3xl"/> </div>

  <h4 className="font-semibold">123 Street, New York, USA</h4>
  </div>
  
 <div className="flex flex-col items-center">
   <div className="  mb-3 h-15 w-15 rounded-full bg-orange-50 flex items-center justify-center"><IoMdMail className="text-orange-500 text-3xl"/></div>
  <h4 className="font-semibold">info@example.com</h4>
  </div>

 <div className="flex flex-col items-center">
    <div className="  mb-3 h-15 w-15 rounded-full bg-orange-50 flex items-center justify-center"> <IoCall className="text-orange-500 text-3xl"/></div>
  <h4 className="font-semibold">+012 345 6789</h4> 
  </div>
</div>



<div className="max-w-7xl mx-auto mt-16 rounded-md overflow-hidden bg-[#FFF5F3]">

 
  {/* Form + Map */}
  <div className="grid grid-cols-2  ">
    
    {/* Form */}
    <div className="space-y-4 p-8 "> 
      <div> <p> The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.
         Just copy and paste the files, add a little code and you're done. <a className="text-orange-500"
  href="https://htmlcodex.com/contact-form/">
  Download Now
</a> .</p></div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-white p-4 rounded-md"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="bg-white p-4 rounded-md"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="bg-white p-4 rounded-md w-full"
      />

      <textarea
        rows="4"
        placeholder="Message"
        className="bg-white p-4 rounded-md w-full"
      />

      <button
        className="bg-orange-500 text-white px-8 py-4 rounded-md w-full"
      >
        Send Message
      </button>
    </div>

    {/* Map */}
    <div>
      <iframe
        title="map"
        src="https://www.google.com/maps?q=New+York&output=embed"
        className="w-full h-full min-h-[400px] rounded-lg"
      />
    </div>

  </div>

</div>
<Testimonials/>


    </div>
 

  )
}
