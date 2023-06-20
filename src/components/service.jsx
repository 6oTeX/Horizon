import React from "react";
import { motion } from "framer-motion";

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

function service() {
  return (
    <motion.div
      variants={variantsMain}
      initial="hidden"
      animate="show"
      className="w-full h-full p-24">
      <div className="flex items-center justify-center w-full h-full col-row gap-x-36">
        <motion.div
          variants={image}
          initial="hidden"
          whileInView="show"
          className="col-auto w-fit">
          <img
            className="m-auto"
            src="https://gotrip-next.vercel.app/img/featureIcons/1/1.svg"
            alt=""
          />
          <h1 className="p-5 m-auto text-xl text-center text-black w-fit h-fit">
            Best Price Guarentee
          </h1>
          <p className="m-auto text-base text-center text-black opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
          variants={image}
          initial="hidden"
          whileInView="show"
          className="col-auto w-fit">
          <img
            className="m-auto"
            src="https://gotrip-next.vercel.app/img/featureIcons/1/2.svg"
            alt=""
          />
          <h1 className="p-5 m-auto text-xl text-center text-black w-fit h-fit">
            Easy & Quick Booking
          </h1>
          <p className="m-auto text-base text-center text-black opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
        <motion.div
          variants={image}
          initial="hidden"
          whileInView="show"
          className="col-auto w-fit">
          <img
            className="m-auto"
            src="https://gotrip-next.vercel.app/img/featureIcons/1/3.svg"
            alt=""
          />
          <h1 className="p-5 m-auto text-xl text-center text-black w-fit h-fit">
            Customer Care 24/7
          </h1>
          <p className="m-auto text-base text-center text-black opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default service;
