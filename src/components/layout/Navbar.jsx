import { FaArrowRight, FaBookReader,FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  
  return (

    <nav className="relative z-[9999] flex items-center justify-between py-6 px-6 md:py-4 sm:py-2 bg-white" >

    
<div className="text-orange-500 flex justify-between items-center gap-3">
 <FaBookReader className="text-4xl sm:2xl"/>
 <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Kider</h1>
</div>

 <div className=" hidden lg:flex  justify-between items-center gap-6 font-semibold text-gray-700">
<NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-700"
  }>Home</NavLink> 

<NavLink to ="/about" className={({ isActive }) =>isActive ? "text-orange-500" : "text-gray-700"
  } >AboutUs</NavLink>
<NavLink to="/Classes" className={({ isActive }) =>isActive ? "text-orange-500" : "text-gray-700"
  }>Classes</NavLink>
 {/* Pages Dropdown */}
 <div className="relative">
  <button 
   onClick={() => setPagesOpen(!pagesOpen)}
  className=" flex items-center text-gray-700">Pages<MdArrowDropDown/> </button>

  {pagesOpen && (
  <div className="absolute top-full left-0 z-[9999]">
    <div className="bg-white shadow-lg rounded-md py-2 w-56">
      <NavLink  
       to="/facilities"
  onClick={() => setPagesOpen(false)}
  className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
      >
        School Facilities
      </NavLink>

      <Link 
       to="/Teachers"
  onClick={() => setPagesOpen(false)}
  className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
      >
        Popular Teachers
      </Link>

      <Link 
       to="/become-teacher"
  onClick={() => setPagesOpen(false)}
  className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
      >
        Become A Teacher
      </Link>

      <Link 
       to="/appointment"
  onClick={() => setPagesOpen(false)}
  className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
        Make Appointment
      </Link>

      <Link 
       to="/testimonial"
  onClick={() => setPagesOpen(false)}
  className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
      >
        Testimonial
      </Link>

      <Link
       to="/404"
  onClick={() => setPagesOpen(false)}
  className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
        404 Error
      </Link>
    </div>
  </div>
  )}
</div>

<NavLink to="/contact" className={({ isActive }) =>isActive ? "text-orange-500" : "text-gray-700"}>ContactUs</NavLink>

 </div>

<a href="/" className=" hidden lg:flex bg-orange-500 text-white px-4 py-1 rounded-full items-center text-center gap-2">
    Join Us <FaArrowRight/>
</a>

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="lg:hidden text-2xl text-gray-700"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

 {menuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
    <div className="flex flex-col p-6 gap-4">

      <NavLink to="/"
    onClick={() => { setMenuOpen(false); setPagesOpen(false); }}
  className={({ isActive }) =>
    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 transition-colors duration-300"
  }
  >Home</NavLink>

      <NavLink to="/about" 
     onClick={() => { setMenuOpen(false); setPagesOpen(false); }}
  className={({ isActive }) =>
    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 transition-colors duration-300"
  }
     >About Us</NavLink>


      <NavLink to="/Classes" 
 onClick={() => { setMenuOpen(false); setPagesOpen(false); }}
  className={({ isActive }) =>
    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 transition-colors duration-300"
  }
>Classes</NavLink>

      <button
      onClick={() => setPagesOpen(!pagesOpen)}
  className="flex items-center justify-start text-left hover:text-orange-500 transition-colors duration-300"
      >
        Pages
        <MdArrowDropDown />
      </button>

      {pagesOpen && (
        <div className="ml-4 flex flex-col gap-3">

          <NavLink to="/facilities" 
          onClick={() => { setMenuOpen(false); setPagesOpen(false); }}
  className={({ isActive }) =>
    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 transition-colors duration-300"
  }
          >
            School Facilities
          </NavLink>

          <NavLink to="/teachers" 
         onClick={() => { setMenuOpen(false); setPagesOpen(false); }}
  className={({ isActive }) =>
    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 transition-colors duration-300"
  }
         >
            Popular Teachers
          </NavLink>

          <NavLink to="/become-teacher"  
         onClick={() => { setMenuOpen(false); setPagesOpen(false); }}
  className={({ isActive }) =>
    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 transition-colors duration-300"
  }
         >
            Become A Teacher
          </NavLink>

          <NavLink to="/appointment"  
           onClick={() => {
    setMenuOpen(false);
    setPagesOpen(false);
  }}
          className="hover:text-orange-500 transition-colors duration-300">
            Make Appointment
          </NavLink>

          <NavLink to="/testimonial"  
        onClick={() => {
    setMenuOpen(false);
    setPagesOpen(false);
  }}
          className="hover:text-orange-500 transition-colors duration-300">
            Testimonial
          </NavLink>

        </div>
      )}

      <NavLink to="/contact"  
     onClick={() => {
    setMenuOpen(false);
    setPagesOpen(false);
  }}
          className="hover:text-orange-500 transition-colors duration-300">
        Contact Us
      </NavLink>

    </div>
  </div>
)}

    </nav>
  )
}