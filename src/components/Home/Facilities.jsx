import { Bus, BusFront, BusFrontIcon } from "lucide-react";
import { BiFootball, BiSolidBusSchool } from "react-icons/bi";
import { BsPerson, BsPersonCircle } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
export default function Facilities() {
  const facilities = [
    {
      title: "School Bus",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
       icon: <BiSolidBusSchool/>,
      color:"text-orange-500",
      circleBg: "bg-orange-50",
      hoverBg: "group-hover:bg-orange-500",
      
    },
    {
      title: "Playground",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
     icon:<BiFootball />,
     color:"text-green-600",
     circleBg: "bg-green-50",
       hoverBg: "group-hover:bg-green-500",
       
    },
    {
      title: "Healthy Canteen",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      icon:<FaHouse />,
      color:"text-yellow-500",
      circleBg: "bg-yellow-50",
       hoverBg: "group-hover:bg-yellow-500",
              

    },
    {
      title: "Positive Learning",
      description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      icon: <BsPersonCircle/>,
      color:"text-blue-500",
      circleBg: "bg-blue-50",
       hoverBg: "group-hover:bg-blue-500",
              

    },
  ];
  return (
    <div className="bg-white py-10 md:py-14 lg:py-16 px-4 md:px-6">
      <div className="max-w-15xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12"   data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            School Facilities
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
               data-aos="fade-up"
    data-aos-delay={index * 200}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="mb-6">
                <div className={`w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-4xl lg:text-5xl
   ${facility.hoverBg} ${facility.circleBg} ${facility.color}
   group-hover:text-white
  transition-all duration-300`}
>
               {facility.icon}
              </div>
              </div>
              
              {/* Circle Shape Container */}
              <div 
              
                className={`w-56 h-56 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full flex flex-col items-center justify-center p-5 lg:p-6  ${facility.hoverBg} ${facility.circleBg}
                shadow-sm  group-hover:text-white transition-all duration-300`}
                
              >
                <h3 className={`text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 ${facility.color} group-hover:text-white`}>
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4 group-hover:text-white">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 

