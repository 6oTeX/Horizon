import React from "react";
import {
  MapPinIcon,
  MapIcon,
  UserIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FlightListItem } from "./FlightListItem";
import { format } from "date-fns";
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const image = {
  hidden: { opacity: 0, y: 100, scale: 0.7 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const button_image = {
  hidden: { opacity: 0, y: 75, scale: 1 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// const [name, setName] = useState("");
// const [date, setDate] = useState("");
// const [flightList, setFlightList] = useState([]);

// useEffect(() => {
//   axios.get("api/flight").then((res) => {
//     setFlightList(res.data);
//     console.log(res.data);
//   });
// }, []);

// const handleFlightSearch = () => {
//   if (name === "") {
//     return;
//   }
//   axios.post("api/flight", { title: name, completed: false }).then((res) => {
//     setFlightList([...flightList, res.data]);
//     setName("");
//   });
// };

function home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [flightList, setFlightList] = useState([]);

  useEffect(() => {
    const searchFlight = async () => {
      const formattedDate = format(new Date(date), "yyyy-MM-dd");
      const res = await axios.post(
        `api/search?searchName=${name}&searchDate=${formattedDate}`
      );
      setFlightList(res.data);
      console.log(formattedDate);
    };

    if (name !== "" && date !== "") {
      searchFlight();
    } else {
      setFlightList([]);
    }
  }, [name + date]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="z-auto flex flex-col items-center justify-center w-full h-96">
      <motion.h1 variants={image} className="space-y-5 text-6xl text-white">
        Next Place To Visit
      </motion.h1>

      <motion.h2 variants={image} className="mt-4" id="box">
        Discover amzaing places at exclusive deals
      </motion.h2>
      <br />
      <br />
      <motion.ul
        variants={image}
        className="flex flex-row gap-10 mb-4 cursor-pointer select-none">
        <li className="active:border-opacity-100 border-b-2 border-opacity-0 border-solid  border-white p-2  -translate-y-1.5 ease-in duration-100">
          <section className="hover:text-secondary hover:ease-in hover:duration-100">
            Hotel
          </section>
        </li>
        <li className="active:border-opacity-100 border-b-2 border-opacity-0 border-solid  border-white p-2  -translate-y-1.5 ease-in duration-100">
          <section className="hover:text-secondary hover:ease-in hover:duration-100">
            Tour
          </section>
        </li>
        <li className="active:border-opacity-100 border-b-2 border-opacity-0 border-solid  border-white p-2  -translate-y-1.5 ease-in duration-100">
          <section className="hover:text-secondary hover:ease-in hover:duration-100">
            Activity
          </section>
        </li>
        <li className="active:border-opacity-100 border-b-2 border-opacity-0 border-solid  border-white p-2  -translate-y-1.5 ease-in duration-100">
          <section className="hover:text-secondary hover:ease-in hover:duration-100">
            Holyday Rentals
          </section>
        </li>
        <li className="active:border-opacity-100 border-b-2 border-opacity-0 border-solid  border-white p-2  -translate-y-1.5 ease-in duration-100">
          <section className="hover:text-secondary hover:ease-in hover:duration-100">
            Car
          </section>
        </li>
        <li className="active:border-opacity-100 border-opacity-0  border-b-2  border-solid  border-white p-2  -translate-y-1.5 ease-in duration-100">
          <section className="hover:text-secondary hover:ease-in hover:duration-100">
            Cruise
          </section>
        </li>
        <li className="active:border-opacity-100 border-opacity-0 border-b-2  border-solid  border-white p-2  -translate-y-1.5 ease-in duration-100">
          <section className="hover:text-secondary hover:ease-in hover:duration-100">
            Flight
          </section>
        </li>
      </motion.ul>
      <motion.div
        variants={image}
        className="flex row-auto py-3 bg-white shadow-2xl rounded-3xl gap-x-10 w-fit h-fit px-14">
        <div className="flex mt-4">
          <label htmlFor="Location" className="text-center text-black">
            <div className="flex justify-center mb-2 mr-2 text-xl">
              <MapPinIcon className="w-7 h-7" />
              <label>
                Location <br />
              </label>
            </div>
            <div className="relative mr-4 rounded outline-1 outline outline-black/40">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MapIcon className="relative w-5 h-5 text-black text-opacity-40" />
              </span>

              <input
                type="text"
                name="Location"
                id="Location"
                onChange={(e) => setName(e.target.value)}
                placeholder="Where are you going?"
                className="h-10 p-2 pl-8 text-base text-black text-opacity-100 bg-transparent border-none rounded-l-lg outline-none first-letter:w-fit"
              />
              <motion.div variants={variants}>
                <ul className="absolute z-50 flex flex-col mt-8 overflow-y-scroll rounded w-fit max-h-96 bg-white/20 ">
                  {flightList.length > 0 || name == "" ? (
                    flightList.map((item) => (
                      <FlightListItem key={item.id} item={item} />
                    ))
                  ) : (
                    <motion.div
                      variants={variants}
                      className="flex justify-center text-xl rounded-sm">
                      <div className="relative flex justify-between p-2 m-4 mb-4 rounded w-96 bg-white/90 hover:bg-white/100">
                        No Flights Found . . .
                      </div>
                    </motion.div>
                  )}
                </ul>
              </motion.div>
            </div>
          </label>
        </div>
        <div
          id="logo"
          className="flex justify-center px-10 border-black border-x-2 border-opacity-20">
          <svg
            className="m-auto text-black "
            width="65"
            height="65"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.4166 24.1458L13.4081 11.3755C12.345 10.2289 12.5152 9.39127 13.7689 8.66611C16.1257 7.30289 17.9617 7.26586 20.4459 8.62916L32.912 15.4704C33.7996 15.9574 34.6698 16.4511 35.5833 16.7204"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31.7708 34.7273L37.1345 52.0269C37.5724 53.4398 38.3436 53.6958 39.5381 53.0108C41.784 51.7232 42.6893 50.236 42.7501 47.5564L43.0545 34.1086C43.0952 32.3125 43.0878 30.5546 44.4791 29.2292"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.1682 27.9182L25.9641 24.4141L37.2041 16.2192L37.2141 16.212L37.2331 16.198C37.4985 16.0038 41.453 13.121 43.6961 12.1384C46.4528 10.9308 49.0209 11.4922 51.7836 12.2638C53.2128 12.663 53.9273 12.8625 54.443 13.2348C55.2609 13.8255 55.7929 14.7347 55.9022 15.7291C55.9713 16.3558 55.7891 17.0662 55.4248 18.4869C54.7205 21.2337 53.9293 23.7091 51.4911 25.4611C49.5071 26.8868 44.9989 28.825 44.6967 28.9542L44.6751 28.9636L44.6637 28.9684L31.8514 34.4762L26.3779 36.8224C24.3934 37.6731 23.4011 38.0986 22.726 38.888C21.1449 40.7366 20.9217 44.0819 20.3316 46.3836C20.0055 47.6557 18.2173 49.8599 16.624 49.5289C15.6403 49.3249 15.6214 48.0934 15.499 47.3083L14.3202 39.7489C14.0384 37.941 14.0167 37.9039 12.571 36.7591L6.52589 31.9721C5.898 31.475 4.82669 30.8431 5.13923 29.9004C5.64551 28.3734 8.4741 27.9474 9.75355 28.3048C12.0687 28.9514 15.1165 30.4332 17.5295 30.0064C18.5597 29.8242 19.4292 29.1888 21.1682 27.9182Z"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <div className="m-2 text-black ">
            <div className="flex flex-row justify-center mb-2 ">
              <CalendarDaysIcon className="text-black w-7 h-7 " />
              <label htmlFor="Check-in" className="px-1 text-xl text-center">
                Date
              </label>
            </div>
            <input
              type="date"
              name="Check-in"
              id="Check-in"
              onChange={(p) => setDate(p.target.value)}
              placeholder="Check-in"
              className="z-20 w-48 h-10 p-2 mx-4 my-2 text-center text-black bg-transparent rounded outline-none outline-1 outline outline-black/40 text-opacity-40 first-letter:w-fit"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default home;
