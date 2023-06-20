// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Variants = {
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

function Recommended() {
  return (
    <motion.div
      variants={variantsMain}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full h-screen gap-20 px-24 text-black"
    >
      <div className="flex items-end justify-between w-full row y-gap-20 h-28">
        <div className="col-auto">
          <motion.h2
            variants={Variants}
            initial="hidden"
            whileInView="show"
            className="mb-3 text-4xl"
          >
            Recommended
          </motion.h2>
          <motion.p
            variants={Variants}
            initial="hidden"
            whileInView="show"
            className="text-base opacity-60"
          >
            These Recommended destination have a lot to offer
          </motion.p>
        </div>
        <motion.div
          variants={Variants}
          initial="hidden"
          whileInView="show"
          className="col-auto"
        >
          <input
            type="select"
            className="w-32 h-10 text-center bg-white border border-solid rounded"
            list="options"
          />
          <datalist id="options">
            <option value="Hotel">Hotel</option>
            <option value="Tour">Tour</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Flight">Flight</option>
          </datalist>
        </motion.div>
      </div>

      <Swiper
        // install Swiper modules
        className="flex w-full h-full row-auto text-white select-none"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <motion.div
            variants={image}
            initial="hidden"
            whileInView="show"
            className="w-full h-full group"
          >
            <div className="w-fit h-fit">
              <img
                className="rounded h-80 w-80"
                src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F1.png&w=384&q=75"
                alt="image"
                loading="lazy"
                decoding="async"
              />
              <div className="my-3 text-black duration-500 ease-in-out border-b border-solid w-80">
                The Montcalm At Brewery London City
              </div>
              <div className="my-4 text-black opacity-60">
                Westminster Borough, London
              </div>
              <div className="flex items-center row-auto gap-x-3">
                <p className="p-1.5 text-center text-white rounded w-fit h-fit bg-buttonBlue">
                  4.7
                </p>
                <div className="text-black">Exeptional</div>
                <h1 className="text-black opacity-60">3014 reviews</h1>
              </div>
              <p className="py-3 text-black">
                Starting from <span className="text-buttonBlue">$72</span>
              </p>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={image}
            initial="hidden"
            whileInView="show"
            className="w-full h-full group"
          >
            <div className="w-fit h-fit">
              <img
                className="rounded h-80 w-80"
                src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F2.png&w=384&q=75"
                alt="image"
                loading="lazy"
                decoding="async"
              />
              <div className="my-3 text-black duration-500 ease-in-out border-b border-solid w-80">
                The Montcalm At Brewery London City
              </div>
              <div className="my-4 text-black opacity-60">
                Westminster Borough, London
              </div>
              <div className="flex items-center row-auto gap-x-3">
                <p className="p-1.5 text-center text-white rounded w-fit h-fit bg-buttonBlue">
                  4.7
                </p>
                <div className="text-black">Exeptional</div>
                <h1 className="text-black opacity-60">3014 reviews</h1>
              </div>
              <p className="py-3 text-black">
                Starting from <span className="text-buttonBlue">$72</span>
              </p>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={image}
            initial="hidden"
            whileInView="show"
            className="w-full h-full group"
          >
            <div className="w-fit h-fit">
              <img
                className="rounded h-80 w-80"
                src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F3.png&w=384&q=75"
                alt="image"
                loading="lazy"
                decoding="async"
              />
              <div className="my-3 text-black duration-500 ease-in-out border-b border-solid w-80">
                The Montcalm At Brewery London City
              </div>
              <div className="my-4 text-black opacity-60">
                Westminster Borough, London
              </div>
              <div className="flex items-center row-auto gap-x-3">
                <p className="p-1.5 text-center text-white rounded w-fit h-fit bg-buttonBlue">
                  4.7
                </p>
                <div className="text-black">Exeptional</div>
                <h1 className="text-black opacity-60">3014 reviews</h1>
              </div>
              <p className="py-3 text-black">
                Starting from <span className="text-buttonBlue">$72</span>
              </p>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={image}
            initial="hidden"
            whileInView="show"
            className="w-full h-full group"
          >
            <div className="w-fit h-fit">
              <img
                className="rounded h-80 w-80"
                src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F4.png&w=384&q=75"
                alt="image"
                loading="lazy"
                decoding="async"
              />
              <div className="my-3 text-black duration-500 ease-in-out border-b border-solid w-80">
                The Montcalm At Brewery London City
              </div>
              <div className="my-4 text-black opacity-60">
                Westminster Borough, London
              </div>
              <div className="flex items-center row-auto gap-x-3">
                <p className="p-1.5 text-center text-white rounded w-fit h-fit bg-buttonBlue">
                  4.7
                </p>
                <div className="text-black">Exeptional</div>
                <h1 className="text-black opacity-60">3014 reviews</h1>
              </div>
              <p className="py-3 text-black">
                Starting from <span className="text-buttonBlue">$72</span>
              </p>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}

export default Recommended;
