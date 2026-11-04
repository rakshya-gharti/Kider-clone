
const classes = [
  {
    title: "Art & Drawing",
    image: "/img/classes-1.jpg",
  },
  {
    title: "Color Management",
    image: "/img/classes-2.jpg",
  },
  {
    title: "Athletic & Dance",
    image: "/img/classes-3.jpg",
  },
 {
    title: "Language & Speaking",
    image: "/img/classes-4.jpg",
  },
  {
    title: "Religion and History",
    image: "/img/classes-5.jpg",
  },
  {
    title: "General Knowledge",
    image: "/img/classes-6.jpg",
  },


];
export default function Classes() {
  return (
    <div className="bg-white">

    <section className="bg-white py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold">
            School Classes
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 mt-4">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
         data-aos-delay={index * 150}
              className=" group overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.00]"
            >
              <img
                src={item.image}
                alt=""
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-74 lg:h-74 object-cover 
                rounded-full mx-auto border-8 lg:border-14 border-[#FFF5F3]  "
              />

                      <div className="bg-[#FFF5F3] -mt-10 pt-14 rounded-2xl" >


              <div className="p-4 lg:p-6 text-center">
                <h2 className="text-2xl font-semibold">
                  {item.title}
                </h2>
                  

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center justify-center gap-3 mt-4">
                  
                  <img
                    src="/img/user.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <p className="font-medium text-orange-500">Jhon Doe</p>
                    <p className="text-sm text-gray-500">
                      Teacher
                    </p>
                  </div>
                </div>

                <button className="bg-orange-500 text-white px-5 py-2 rounded-full">
                  $99
                </button>
                </div>

               <div className="flex gap-4 m-2 mt-5">
  <div className="flex-1 h-0.5 bg-orange-500"></div>
  <div className="flex-1 h-0.5 bg-green-800"></div>
  <div className="flex-1 h-0.5 bg-yellow-500"></div>
</div>

<div className="grid grid-cols-3 text-sm">
  <div>
    <p className="font-bold text-orange-500">Age:</p>
    <p className="text-gray-500">3-5 Years</p>
  </div>

  <div>
    <p className="font-bold text-green-800">Time:</p>
    <p className="text-gray-500">9-10 AM</p>
  </div>

  <div>
    <p className="font-bold text-yellow-500">Capacity:</p>
    <p className="text-gray-500">30 Kids</p>
  </div>
</div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>










    </div>
  )
}
