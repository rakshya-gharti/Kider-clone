
export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white px-4 md:px-6 py-10 lg:py-16 items-center gap-12">

<div className="space-y-6 lg:space-y-10 flex flex-col items-start lg:-mt-15">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Learn More About Our Work And Our Cultural Activities.</h1>
<p> Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
  sed stet lorem sit clita duo justo magna dolore erat ipsum aliqui amet.</p>

<p> Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, 
sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>


<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">

<a href="/" className="px-6 py-3 bg-orange-500 text-white rounded-4xl
 hover:bg-orange-400 tarnsition-colors duration-200">Read More</a>
  


<div className="flex items-center gap-3">
<div >
    <img src="/img/user.jpg" alt="" className="rounded-full object-cover w-10 h-10" />
   </div>

   <div className="text-sm">
     <span className="text-orange-500">Jhon Doe</span> <br />
    <span>CEO & Founder</span>
   </div>
</div>

</div>
</div>


<div className="relative flex justify-center min-h-[350px] md:min-h-[500px] lg:min-h-[650px]" data-aos="fade-up"
  data-aos-delay="600">

  {/* Big center image */}
  <img
  
    src="/img/about-1.jpg"
    alt=""
    className="w-64 h-64 md:w-96 md:h-96 lg:w-[520px] lg:h-[520px] object-cover rounded-full border-[#FFF5F3] border-8 lg:border-[15px] hover:border-orange-500"
  />



{/* Small image left */}
  <img
  //  data-aos="fade-up"
  // data-aos-delay="300"
    src="/img/about-2.jpg"
    alt=""
    className="absolute top-44 md:top-64 lg:top-80 left-16 md:left-4 lg:left-10 w-42 h-42 md:w-48 md:h-48 lg:w-70 lg:h-70 object-cover rounded-full border-[#FFF5F3] border-10 lg:border-[15px] hover:border-orange-500"
  />

  {/* Small image right */}
  <img
  //   data-aos="fade-up"
  // data-aos-delay="600"
    src="/img/about-3.jpg"
    alt=""
    className="absolute top-44 md:top-64 lg:top-80 right-16 md:right-4 lg:right-10 w-42 h-42 md:w-48 md:h-48 lg:w-70 lg:h-70 object-cover rounded-full border-[#FFF5F3] border-10 lg:border-[15px] hover:border-orange-500"
  />

  
</div>

    </div>
  )
}
