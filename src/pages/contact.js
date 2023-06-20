import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import React, { use } from "react";
import Navbar from "@/components/Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "@/config";
import { da } from "date-fns/locale";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    message: message,
  };
  const allFieldsHaveValue = Object.values(data).every((item) => item !== "");

  const sendMessage = async (e) => {
    if (!allFieldsHaveValue) {
      alert("Please fill in all fields");
      return;
    }
    e.preventDefault();
    try {
      const res = await axios.post(API_URL + "contact-dash", data);
      console.log(res);
      alert("Message sent");
    } catch (error) {
      alert("Message not sent");
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="relative max-h-screen text-black border-b-2 border-black border-solid font-abc">
        <div className="grid grid-cols-1 mx-auto mt-20 rounded-lg max-w-7xl lg:grid-cols-2 bg-black/30">
          <div className="relative px-6 pb-20 rounded-md pt-18 sm:pt-32 lg:static lg:px-8 lg:py-48 h-fit ">
            <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 -z-40 [mask-image:radial-gradient(100%_70%_at_bottom_left,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                    get
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />

                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
              <div className="absolute inset-y-0 left-0 w-full overflow-hidden bg-gray-100 -z-10 lg:w-1/2"></div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-white">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <BuildingOffice2Icon
                      className="w-6 text-gray-400 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="w-6 text-gray-400 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <Link className="hover:text-white" href="">
                      +1 (555) 234-5678
                    </Link>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <EnvelopeIcon
                      className="w-6 text-gray-400 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <Link
                      className="hover:text-white"
                      href="mailto:hello@example.com"
                    >
                      hello@example.com
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="h-screen px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48 "
          >
            <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full font-second font-medium  rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white/80"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                      className="block w-full font-second font-medium rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white/80"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full font-second font-medium rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white/80"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="tel"
                      className="block w-full font-second font-medium rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white/80"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full font-second font-medium rounded-md border-0 px-3.5 py-2 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white/80"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  onClick={sendMessage}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 bg-fifth/40 text-center text-sm font-semibold text-white shadow-sm hover:bg-black/50 hover:text-white ease-in-out duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
