import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Client Name",
    profession: "Profession",
    image: "/img/testimonial-1.jpg",
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet.",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "/img/testimonial-2.jpg",
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet.",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "/img/testimonial-3.jpg",
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet.",
  },
];

export default function Clients() {
  const sliderData = [...testimonials, ...testimonials];

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === testimonials.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 500);
    }
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(testimonials.length - 1);

      setTimeout(() => {
        setTransition(true);
      }, 50);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-white py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold">
            Clients Say!
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 mt-4">
            Eirmod sed ipsum dolor sit rebum labore magna erat.
            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.
          </p>
        </div>

        <div className="relative"
         data-aos="fade-up"
  data-aos-delay="200"
        >

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          {/* Slider */}
          <div className="overflow-hidden mx-4 sm:mx-8 lg:mx-16">
            <div
              className={`flex ${
                transition
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {sliderData.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 flex-shrink-0 px-3 sm:px-4"
                >
                  <div className="bg-[#FFF5F3] p-6 rounded-2xl">
                    <p className="text-gray-600 mb-6">
                      {item.text}
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt=""
                        className="w-16 h-16 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.name}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          {item.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-0  top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}