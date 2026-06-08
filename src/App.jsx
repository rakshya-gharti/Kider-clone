import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import { Route, Routes, UNSAFE_createClientRoutes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Classes from "./components/Home/Classes";
import ContactUs from "./pages/ContactUs";
import Facilities from "./components/Home/Facilities";
import Teachers from "./components/Home/Teachers";
import BecomeTeacher from "./components/Home/BecomeTeacher";
import Appointment from "./components/Home/Appointment";
import Error404 from "./pages/Error404";
import Clients from "./components/Home/Clients";
import ClassesPage from "./pages/ClassesPage";
import Dropdownfacilities from "./components/Home/Dropdownfacilities";
import DropdownTeachers from "./components/Home/DropdownTeachers";
import DdBecome from "./components/Home/DdBecome";
import Ddappoint from "./components/Home/Ddappoint";
import Ddtesti from "./components/Home/Ddtesti";
import BackToTop from "./components/BackToTop";


export default function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="lg:px-25 sm:px-0 md:px-12">
     <Navbar/>
      <Routes>
<Route 
path="/"
 element={<Home/>}/>

 <Route
 path="/about"
  element={<AboutUs/>}
/>

<Route path="/Classes" element={<ClassesPage/>}/>
<Route path="/contact" element={<ContactUs/>}/>
 <Route path="/facilities" element={<Dropdownfacilities/>} />
  <Route path="/teachers" element={<DropdownTeachers/>} />
  <Route path="/become-teacher" element={<DdBecome/>} />
  <Route path="/appointment" element={<Ddappoint />} />
  <Route path="/testimonial" element={<Ddtesti/>} />

  <Route path="*" element={<Error404 />} />


      </Routes>
      <BackToTop/>

    </div>
  )
}
