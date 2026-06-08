import { BiError, BiErrorAlt } from "react-icons/bi";
import PageHeader from "../components/Common/PageHeader";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Testimonials from "../components/Home/Testimonials";

export default function Error404() {
  return (

   
    <div className="bg-white">
 <PageHeader title="404 Error"/>
<div className="flex flex-col items-center text-center max-w-7xl mx-auto my-30 space-y-3">
           <BiError className="text-8xl text-orange-500"/> 
          <h1 className="text-7xl font-bold">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className=" max-w-2xl mx-auto text-gray-500 ">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
         <Link to ="/" className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full"
  > Go Back To Home</Link>
        </div>
        <Testimonials/>


    </div>
  )
}
