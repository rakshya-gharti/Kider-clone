import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Hero() {

  const slides =[
{
image:
"https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
title: "The Best Kindergarten School For Your Child",
description:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium ut aut quidem eligendi laborum id veniam, fugiat in doloribus."
},
{
  image:
    "https://images.unsplash.com/photo-1767356326735-2da0a10cf1f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Make A Brighter Future For Your Child",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium ut aut quidem eligendi laborum id veniam, fugiat in doloribus."
},
  ];

const [currentSlide,setCurrentSlide]=useState(0);
 
const nextSlide =() => {
  setCurrentSlide((prev) => 
  prev === slides.length - 1 ? 0 : prev + 1
);
};

const prevSlide = () => {
  setCurrentSlide((prev) =>
  prev === 0 ? slides.length - 1 : prev - 1
);
};

useEffect(() => {
  const timer = setInterval(() => {
    nextSlide();
  }, 5000);

return () => clearInterval(timer);
},[]);

 return (
    <section

    
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen bg-cover bg-center transition-all duration-700" style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >



      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

{/* Left Arrow */}
     <div className="hidden md:grid absolute right-6 top-1/2 -translate-y-1/2 z-20 gap-3">
  <button
    onClick={prevSlide}
    className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-orange-500 transition"
  >
    <ChevronLeft size={28} />
  </button>

      {/* Right Arrow */}
        <button
    onClick={nextSlide}
    className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-orange-500 transition"
  >
    <ChevronRight size={28} />
  </button>
</div>
      

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div 
        key={currentSlide}
        className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-[280px] sm:max-w-[420px] md:max-w-[550px] lg:max-w-4xl text-white animate-fade-up">
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base lg:text-lg leading-7 max-w-xl">
            {slides[currentSlide].description}
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
            <Link to ="/"
  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold transition"
>
  Learn More
</Link>
      <Link to ="/"
      className="bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold transition"
>
  Our Classes
</Link>      
          </div>
        </div>
      </div>

     
    </section>
  );

}

//     <div className="text-white">
//       <div className="relative h-screen bg-[url('https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex items-center">
//           <div className="px-12 max-w-[700px]">

//             <h1 className="text-6xl font-bold leading-tight">
//               The Best Kindergarten School For Your Child
//             </h1>

//             <p className="mt-6 text-lg max-w-2xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Quia laudantium ut aut quidem eligendi laborum id veniam,
//               fugiat in doloribus.
//             </p>

//           </div>
//         </div>

//       </div>
//     </div>
