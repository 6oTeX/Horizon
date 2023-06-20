import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

function ads() {
  return (
    <motion.div
      variants={variantsMain}
      initial="hidden"
      animate="show"
      className="flex w-full h-full row-auto px-24 py-12 gap-7"
    >
      <motion.div
        variants={image}
        initial="hidden"
        whileInView="show"
        className="relative rounded shadow-2xl w-fit h-fit"
      >
        <img
          className="rounded"
          src="https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fbackgrounds%2F1.png&w=640&q=75"
          alt="image"
        />
        <div className="absolute w-full h-full -top-0 bg-gradient-to-t from-orange to-transparent"></div>
        <div className="absolute w-full h-full p-24 -top-4">
          <h1 className="text-3xl text-white">
            Things To Do On <br /> Your Trip
          </h1>
          <div className="mt-16">
            <Link
              href="#"
              className="py-4 text-black duration-500 ease-in-out bg-white rounded px-9 hover:bg-buttonBlue hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>
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
          <h2 className="text-base text-white">Enjoy Summer Deals</h2> <br />
          <h1 className="text-3xl text-white">Up to 70% Discount!</h1>
          <br />
          <br />
          <Link
            href="#"
            className="py-4 text-black duration-500 ease-in-out bg-white rounded px-9 hover:bg-buttonBlue hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ads;
