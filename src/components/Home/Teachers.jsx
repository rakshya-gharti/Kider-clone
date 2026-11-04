import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebook, FaFacebookF } from "react-icons/fa"

const teachers = [
    {
        image: "/img/team-1.jpg",
        name:"Full Name",
        designation:"Designation"
    },
    {
        image: "/img/team-2.jpg",
          name:"Full Name",
        designation:"Designation"
    },
    {
        image: "/img/team-3.jpg",
          name:"Full Name",
        designation:"Designation"
    }
]



export default function Teachers() {
  return (
    
 <section className="bg-white py-12 lg:py-16 px-4 sm:px-6">
      <div>

        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Popular Teachers
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 mt-4">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        </div>

<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 justify-items-center"> 
   {
        teachers.map((teacher,index) => (
        
            <div key={index} className="relative flex flex-col items-center"
              data-aos="fade-up"
  data-aos-delay={index * 200}
            >
       
        {/* Oval Image */}
        <div
        className="w-60 h-[420px] md:w-72 md:h-[500px] lg:w-80 lg:h-[560px] overflow-hidden bg-[#FFF5F3]"
  style={{ borderRadius: "50% 50% 50% 50%" }} >
<img
 src={teacher.image} alt="" 
  className="w-full h-full object-cover object-top" />

        </div>

        {/* Bottom Circle Card */}
              <div className="absolute right-1/2 translate-x-1/2 lg:right-2 lg:translate-x-0 bottom-[-30px] bg-white rounded-full 
              w-36 h-36 md:w-40 md:h-40 lg:w-56 lg:h-56 flex flex-col items-center
               justify-center shadow-md border-8 lg:border-[15px] border-[#FFF5F3] hover:border-orange-500 transition-all">

                <h3 className="font-semibold text-base md:text-lg">{teacher.name}</h3>
                <p className="text-sm text-gray-500">{teacher.designation}</p>


               <div className="flex gap-2 text-white mt-2">
                 <span className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center "> <FaFacebookF/> </span>
                 <span className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center"> <BsTwitter/></span>
                 <span className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center"> <BsInstagram/></span>
               </div>

                                </div>
            </div>
        )
        )
  
}

</div>
 
</section>
   
  )
}
