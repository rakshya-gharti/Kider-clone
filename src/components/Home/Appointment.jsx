export default function Appointment() {
  return (
    <section className="bg-white py-8 lg:py-10 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FFF5F3] gap-6 lg:gap-10 items-center overflow-hidden rounded-3xl">

        {/* Left Side */}
        <div className="p-4 md:p-6 lg:p-8"
         data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Make Appointment
          </h1>

          
          <form className="space-y-4">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Guardian Name"
              className="w-full p-4 rounded-lg bg-white outline-none"
            />

            <input
              type="email"
              placeholder="Guardian Email"
              className="w-full p-4 rounded-lg bg-white outline-none"
            />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Child Name"
                className="p-4 rounded-lg bg-white outline-none"
              />

              <input
                type="number"
                placeholder="Child Age"
                className="p-4 rounded-lg bg-white outline-none"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-4 rounded-lg bg-white outline-none"
            />

            <button
              type="submit"
              className="bg-orange-500 w-full text-white px-8 py-4 rounded-full hover:bg-orange-400 transition-all duration-300"
            >
              Submit
            </button>

          </form>
        </div>

        {/* Right Side */}
        <div className="overflow-hidden rounded-3xl h-[400px] md:h-[400px] lg:h-[500px]"
          data-aos="fade-left"
  data-aos-delay="200"
  >
          
          
          <img
            src="/img/appointment.jpg"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>

      </div>
    </section>
  );
}