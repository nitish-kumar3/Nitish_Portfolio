import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nitish Kumar",
      rating: 5,
      text: "Your dedication and hard work are greatly appreciated.",
    },
    {
      id: 2,
      name: "Guddu Kumar",
      rating: 4,
      text: "The way you handled the client's concerns was commendable.",
    },
    {
      id: 3,
      name: "Raj Kumar",
      rating: 5,
      text: "Your commitment saves us time and nerves. Thank you for the great teamwork.",
    },
    {
      id: 4,
      name: "Hansh Raj Singh",
      rating: 5,
      text: "Your attention to detail takes the quality of our software to a new level.",
    },
    {
      id: 5,
      name: "Swati Kumari",
      rating: 4,
      text: "Your leadership during the project was inspiring. Code reviews are always helpful and quick.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-widest font-semibold font-display text-sm">
            — Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={700}
          autoplay={{ delay: 4000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-800/80 border border-gray-600/30 rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg hover:shadow-yellow-400/20 transition-all duration-500 transform hover:rotate-6 hover:-translate-y-2 cursor-pointer">
                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < item.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-500"
                      } transition-all duration-300`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 italic leading-relaxed mb-5">
                  “{item.text}”
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <h3 className="font-semibold text-yellow-400 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Team, Web Builders
                    </p>
                  </div>
                  <Quote className="text-yellow-400 opacity-70 w-6 h-6" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
