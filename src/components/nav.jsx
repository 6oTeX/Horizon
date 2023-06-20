import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Login from "./LoginButton";

const navVariants = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    postion: "fixed",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="z-20 flex items-center justify-between flex-shrink w-full h-auto mx-1 my-5 navbar font-abc"
    >
      <div className="flex items-center justify-start mr-3 ">
        <svg
          className="ml-4 "
          width="65"
          height="65"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.4166 24.1458L13.4081 11.3755C12.345 10.2289 12.5152 9.39127 13.7689 8.66611C16.1257 7.30289 17.9617 7.26586 20.4459 8.62916L32.912 15.4704C33.7996 15.9574 34.6698 16.4511 35.5833 16.7204"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.7708 34.7273L37.1345 52.0269C37.5724 53.4398 38.3436 53.6958 39.5381 53.0108C41.784 51.7232 42.6893 50.236 42.7501 47.5564L43.0545 34.1086C43.0952 32.3125 43.0878 30.5546 44.4791 29.2292"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.1682 27.9182L25.9641 24.4141L37.2041 16.2192L37.2141 16.212L37.2331 16.198C37.4985 16.0038 41.453 13.121 43.6961 12.1384C46.4528 10.9308 49.0209 11.4922 51.7836 12.2638C53.2128 12.663 53.9273 12.8625 54.443 13.2348C55.2609 13.8255 55.7929 14.7347 55.9022 15.7291C55.9713 16.3558 55.7891 17.0662 55.4248 18.4869C54.7205 21.2337 53.9293 23.7091 51.4911 25.4611C49.5071 26.8868 44.9989 28.825 44.6967 28.9542L44.6751 28.9636L44.6637 28.9684L31.8514 34.4762L26.3779 36.8224C24.3934 37.6731 23.4011 38.0986 22.726 38.888C21.1449 40.7366 20.9217 44.0819 20.3316 46.3836C20.0055 47.6557 18.2173 49.8599 16.624 49.5289C15.6403 49.3249 15.6214 48.0934 15.499 47.3083L14.3202 39.7489C14.0384 37.941 14.0167 37.9039 12.571 36.7591L6.52589 31.9721C5.898 31.475 4.82669 30.8431 5.13923 29.9004C5.64551 28.3734 8.4741 27.9474 9.75355 28.3048C12.0687 28.9514 15.1165 30.4332 17.5295 30.0064C18.5597 29.8242 19.4292 29.1888 21.1682 27.9182Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Link href="/" className="m-2 text-4xl">
          Horizon
        </Link>
      </div>
      <div className="flex justify-between row-auto overflow-x-visible gap-14">
        <div className="flex items-center justify-start mr-3">
          <ul className="flex w-full row-auto m-2 text-center gap-28 lg:text-2xl bg-clip-text">
            <li>
              <Link
                href="/"
                className="truncate border-solid border-white p-[100px] py-3.5 rounded hover:text-white/60 "
              >
                Home
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-white/60" href="/about">
                About Horizon
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white/60 underline-offset-8 decoration-2"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-end mr-3">
        <ul className="flex justify-center row-auto m-2 text-center text-1xl align-center">
          <li>
            <button>
              <span className="mr-10 text-xs">USD</span>
              <i className="fas fa-angle-down"></i>
            </button>
          </li>
          <li>
            <button>
              <span className="mr-10 text-xs">ENG</span>
              <i className="fas fa-angle-down"></i>
            </button>
          </li>
          <li className="overflow-visible">
            <Login />
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default navbar;
