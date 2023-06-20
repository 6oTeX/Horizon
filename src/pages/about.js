import Navbar from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";
import Service from "@/components/Service";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function About() {
  return (
    <div className="font-abc">
      <Navbar />
      <section className="flex items-center justify-center w-full col-auto text-center h-1/2">
        <div className="row">
          <div className="my-16 ">
            <h1 className="py-8 text-4xl">About Us</h1>
            <p className="text-1xl w-fit">Your trusted travel partner.</p>
          </div>
        </div>
      </section>
      <section className="w-full h-screen bg-white">
        <div className="flex row-auto gap-20 p-24 text-black">
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="text-4xl">About Horizon.com</h1>
            <h2 className="text-base opacity-60">
              Traveling Agency to help you find you destination
            </h2>
            <br />
            <p className="overflow-y-scroll text-2xl">
              London is a shining example of a metropolis at the highest peak of
              modernity and boasts an economy and cultural diversity thats the
              envy of other global superpowers
              <br />
              <br />
              Take the opportunity to acquaint yourself with its fascinating
              history chronicled by institutions like the British Museum as well
              as see how far it has come by simply riding the Tube and passing
              by celebrated landmarks like Buckingham Palace, Westminster Abbey
              and marvels like Big Ben, the London Eye and the Tower Bridge
            </p>
          </div>
          <div>
            <motion.div
              variants={image}
              initial="hidden"
              whileInView="show"
              className="relative rounded w-fit h-fit"
            >
              <img
                className="rounded"
                src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fbackgrounds%2F2.png&w=640&q=75"
                alt="image"
              />
              <div className="absolute w-full h-full -top-0 bg-gradient-to-t from-buttonBlue to-transparent"></div>
              <div className="absolute w-full h-full p-24 -top-4">
                <h2 className="text-base text-white">Join Us Now.</h2> <br />
                <h1 className="text-3xl text-white">Plan Your Trip</h1>
                <br />
                <br />
                <Link
                  href="/dashboard-users"
                  className="py-4 text-black duration-500 ease-in-out bg-white rounded px-9 hover:bg-buttonBlue hover:text-white"
                >
                  Start Planning
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white">
        <Service></Service>
      </section>
      <motion.div
        initial="hidden"
        animate="show"
        variants={variantsMain}
        className="flex flex-col w-full h-screen gap-20 px-24 py-24 text-black bg-white"
      >
        <div className="flex items-end justify-between w-full row y-gap-20 h-28">
          <div className="col-auto">
            <motion.h2
              variants={Variants}
              initial="hidden"
              whileInView="show"
              className="mb-3 text-4xl"
            >
              Our Team.
            </motion.h2>
            <motion.p
              variants={Variants}
              initial="hidden"
              whileInView="show"
              className="text-base "
            >
              Our team passionate lovely team.
            </motion.p>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          className="w-full h-full row-auto gap-0 text-white select-none"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={4.3}
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
              className="w-60 h-80 group"
            >
              <div className="h-80 w-60">
                <img
                  className="rounded w-60 h-80"
                  src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fteam%2F3.png&w=256&q=75"
                  alt="image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-0 duration-500 ease-in-out bg-black opacity-0 w-60 h-80 group-hover:opacity-25 "></div>
                <div className="absolute z-10 text-xl text-center text-white duration-500 ease-in-out opacity-0 top-6 w-60 group-hover:opacity-100">
                  Marketing Coordinator
                </div>
                <div className="flex items-center justify-center col-auto w-60">
                  <h1 className="absolute text-2xl duration-500 ease-in-out bottom-14 group-hover:-translate-y-14 group-hover:text-3xl">
                    Jerome Bell
                  </h1>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={image}
              initial="hidden"
              whileInView="show"
              className="w-60 h-80 group"
            >
              <div className="h-80 w-60">
                <img
                  className="rounded w-60 h-80"
                  src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fteam%2F4.png&w=256&q=75"
                  alt="image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-0 duration-500 ease-in-out bg-black opacity-0 w-60 h-80 group-hover:opacity-25 "></div>
                <div className="absolute z-10 text-xl text-center text-white duration-500 ease-in-out opacity-0 top-6 w-60 group-hover:opacity-100">
                  Nursing Assistant
                </div>
                <div className="flex items-center justify-center col-auto w-60">
                  <h1 className="absolute text-2xl duration-500 ease-in-out bottom-14 group-hover:-translate-y-14 group-hover:text-3xl">
                    Theresa Webb
                  </h1>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={image}
              initial="hidden"
              whileInView="show"
              className="w-60 h-80 group"
            >
              <div className="h-80 w-60">
                <img
                  className="rounded w-60 h-80"
                  src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fteam%2F5.png&w=256&q=75"
                  alt="image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-0 duration-500 ease-in-out bg-black opacity-0 w-60 h-80 group-hover:opacity-25 "></div>
                <div className="absolute z-10 text-xl text-center text-white duration-500 ease-in-out opacity-0 top-6 w-60 group-hover:opacity-100">
                  Flights Manager
                </div>
                <div className="flex items-center justify-center col-auto w-60">
                  <h1 className="absolute text-2xl duration-500 ease-in-out bottom-14 group-hover:-translate-y-14 group-hover:text-3xl">
                    Cameron Williamson
                  </h1>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={image}
              initial="hidden"
              whileInView="show"
              className="w-60 h-80 group"
            >
              <div className="h-80 w-60">
                <img
                  className="rounded w-60 h-80"
                  src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fteam%2F6.png&w=256&q=75"
                  alt="image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-0 duration-500 ease-in-out bg-black opacity-0 w-60 h-80 group-hover:opacity-25 "></div>
                <div className="absolute z-10 text-xl text-center text-white duration-500 ease-in-out opacity-0 top-6 w-60 group-hover:opacity-100">
                  Medical Assistant
                </div>
                <div className="flex items-center justify-center col-auto w-60">
                  <h1 className="absolute text-2xl duration-500 ease-in-out bottom-14 group-hover:-translate-y-14 group-hover:text-3xl">
                    Courtney Henry
                  </h1>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={image}
              initial="hidden"
              whileInView="show"
              className="w-60 h-80 group"
            >
              <div className="h-80 w-60">
                <img
                  className="rounded w-60 h-80"
                  src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fteam%2F7.png&w=256&q=75"
                  alt="image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-0 duration-500 ease-in-out bg-black opacity-0 w-60 h-80 group-hover:opacity-25 "></div>
                <div className="absolute z-10 text-xl text-center text-white duration-500 ease-in-out opacity-0 top-6 w-60 group-hover:opacity-100">
                  Head Manager
                </div>
                <div className="flex items-center justify-center col-auto w-60">
                  <h1 className="absolute text-2xl duration-500 ease-in-out bottom-14 group-hover:-translate-y-14 group-hover:text-3xl">
                    Janice Dave
                  </h1>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <section className="w-screen bg-white">
        <Footer></Footer>
      </section>
    </div>
  );
}
