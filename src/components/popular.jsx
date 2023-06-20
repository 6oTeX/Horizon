// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const image = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const variantsMain = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const locations = [
  {
    name: "United States of America",
    city: "New York",
    image:
      "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F1.png&w=640&q=75",
  },
  {
    name: "United Kingdom",
    city: "London",
    image:
      "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F2.png&w=640&q=75",
  },
  {
    name: "Spain",
    city: "Barcelona",
    image:
      "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F3.png&w=640&q=75",
  },
  {
    name: "Australia",
    city: "Sydney",
    image:
      "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F4.png&w=640&q=75",
  },
  {
    name: "Italy",
    city: "Rome",
    image:
      "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F5.png&w=640&q=75",
  },
  {
    name: "Netherlands",
    city: "Amsterdam",
    image:
      "https://i.pinimg.com/originals/65/c0/5e/65c05eeae69ac2e8ef1ddaa12ca35239.jpg",
  },
  {
    name: "France",
    city: "Paris",
    image:
      "https://i.pinimg.com/736x/cd/90/24/cd90248acf0569c1364fa35389dd2f59.jpg",
  },
];

function popular() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variantsMain}
      className="flex flex-col w-full h-full gap-20 p-24 text-black"
    >
      <div className="flex items-end justify-between w-full row y-gap-20 h-28">
        <div className="col-auto">
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="mb-3 text-4xl"
          >
            Popular Destination
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="text-base "
          >
            These popular destinations have a lot to offer
          </motion.p>
        </div>
      </div>
      <Swiper
        className="w-full h-full row-auto text-white select-none"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4.3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {locations.map((place, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center w-full h-full gap-10 shadow"
          >
            <motion.div
              variants={image}
              initial="hidden"
              whileInView="show"
              className=""
            >
              <div className="">
                <img
                  className="rounded "
                  src={place.image}
                  alt="image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-0 duration-500 ease-in-out bg-black opacity-0 w-60 h-80 group-hover:opacity-25 "></div>
                <div className="absolute z-10 text-xl text-center text-white duration-500 ease-in-out opacity-0 top-6 w-60 group-hover:opacity-100">
                  {place.name}
                </div>
                <div className="flex items-center justify-center col-auto w-60">
                  <h1 className="absolute text-2xl duration-500 ease-in-out bottom-14 group-hover:-translate-y-14 group-hover:text-3xl">
                    {place.city}
                  </h1>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default popular;
