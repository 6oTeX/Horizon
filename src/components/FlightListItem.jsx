import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const FlightListItem = (props) => {
  return (
    <motion.div variants={variants} initial="hidden" animate="show">
      <Link
        href={`flight/${String(props.item.id)}`}
        className="relative flex justify-between p-2 m-4 mb-4 rounded w-96 bg-white/90 hover:bg-white/100 hover:shadow-2xl hover:scale-[101%] hover:ease-in-out hover:duration-100 "
        id={props.item.id}
        key={props.item.id}
      >
        {
          <>
            <div className="flex justify-between w-full">
              <div className="m-auto text-xl text-blue-200">
                {props.item.name}{" "}
              </div>
              <div className="flex flex-col justify-between mx-4 text-base underline underline-offset-2">
                <div className="relative ml-5">
                  {props.item.date.slice(0, 4)}
                </div>
                <div className="relative ml-5">
                  {props.item.date.slice(5, 7)}
                </div>
                <div className="relative ml-5 ">
                  {props.item.date.slice(8, 10)}
                </div>
                <div className="relative ml-5">
                  {props.item.date.slice(11, 16)}
                </div>
              </div>
              <img
                src={props.item.picString}
                className="mx-2 my-auto rounded max-h-20"
              />
            </div>
          </>
        }
      </Link>
    </motion.div>
  );
};
