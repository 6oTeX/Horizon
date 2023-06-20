import { Fragment, use, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  UserPlusIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "@heroicons/react/24/outline";
import { API_URL } from "@/config";

export default function OrderOverlay({ post }) {
  const router = useRouter();
  const { data: session } = useSession();

  console.log(post);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);

  const childPrice = post.price * 0.8;
  const adultPrice = post.price;

  const totalPrice = child * childPrice + adult * adultPrice;

  console.log(session);
  const data = {
    flightId: post.id,
    email: session?.user?.email || "",
    children: child,
    adults: adult,
  };
  console.log(data);

  const bookFlight = async () => {
    if (child === 0 && adult === 0) {
      alert("Please select the number of adults and childeren");
      return;
    }
    await axios.post(API_URL + "book-flight", data);
    alert("Flight booked");

    router.push("/");
  };

  return (
    <div className="-z-10 ">
      <div className="relative grid grid-cols-1 mx-auto max-w-7xl gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="px-4 pt-16 pb-10 sm:px-6 lg:col-start-2 lg:row-start-1 lg:px-0 lg:pb-16"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Booking
            </h2>

            <ul
              role="list"
              className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
            >
              <li key={post.id} className="flex items-start py-6 space-x-4">
                <div className="flex-auto space-y-1">
                  <h3>{post.name}</h3>
                </div>
              </li>
            </ul>

            <dl className="hidden pt-6 space-y-6 text-sm font-medium text-gray-900 border-t border-gray-200 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Adults: {adult}</dt>

                <dd>${(adult * post.price).toFixed(2)}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Childeren: {child}</dt>
                <dd>${(child * (post.price * 0.8)).toFixed(2)}</dd>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <dt className="text-base">Total</dt>
                <dd className="text-base">${totalPrice.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* TODO: Should be a form, check alter */}
        <div className="px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-lg font-medium text-gray-900"
              >
                Book now Contact information
              </h2>

              <div className="my-6">
                <Popover className="relative my-6 text-black hover:text-black/60 ">
                  <Popover.Button className="inline-flex items-center w-full h-10 p-2 px-10 py-2 text-sm font-medium text-black border border-transparent rounded-md shadow-md bg-white/80 hover:bg-white/60 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white sm:order-last sm:ml-6 sm:w-auto">
                    <span>Press here</span>
                    <UserPlusIcon className="w-5 h-5 m-auto " />
                    <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute flex w-screen p-4 mt-4 ml-32 -translate-x-1/2 shadow-2xl -z-100 drop-shadow-2xl rounded-xl bg-white/95 max-w-max outline outline-2 outline-black/50">
                      <div className="flex flex-col text-black text-opacity-60">
                        <label className="p-3 m-auto " htmlFor="people">
                          <UserPlusIcon className="w-8 h-8 m-auto " />
                          Adults
                        </label>
                        <div className="flex justify-center px-4 ">
                          <div className="z-20 flex items-center h-10 mt-1 border border-gray-200 rounded shadow w-28 bg-gray-50">
                            <button
                              onClick={() =>
                                setAdult(adult <= 0 ? 0 : adult - 1)
                              }
                              tabIndex=""
                              htmlFor="show_more"
                              className="transition-all border-r border-gray-200 outline-none cursor-pointer focus:outline-none active:scale-105"
                            >
                              <MinusSmallIcon className="w-4 h-4 mx-2 " />
                            </button>
                            <input
                              name="child"
                              id="child"
                              placeholder="0"
                              type="text"
                              min="0"
                              className="w-full px-2 text-center bg-transparent outline-none appearance-none"
                              value={adult}
                            />
                            <button
                              onClick={() => setAdult(adult + 1)}
                              tabIndex=""
                              htmlFor="show_more"
                              className="transition-all border-l border-gray-200 outline-none cursor-pointer focus:outline-none active:scale-105"
                            >
                              <PlusSmallIcon className="w-4 h-4 mx-2 " />
                            </button>
                          </div>
                        </div>
                        <div className="flex text-opacity-40">
                          <button
                            onClick={() => setAdult(0)}
                            className="px-4 m-auto mt-2 rounded shadow-md outline outline-1 bg-fifth/20 w-fit active:scale-105"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col text-black text-opacity-60">
                        <label className="p-3 m-auto mt-3" htmlFor="people">
                          <UserPlusIcon className="w-5 h-5 m-auto" />
                          Children
                        </label>
                        <div className="px-4 ">
                          <div className="flex items-center h-10 mt-1 border border-gray-200 rounded shadow w-28 bg-gray-50">
                            <button
                              onClick={() =>
                                setChild(child <= 0 ? 0 : child - 1)
                              }
                              tabIndex=""
                              htmlFor="show_more"
                              className="transition-all border-r border-gray-200 outline-none cursor-pointer focus:outline-none active:scale-105"
                            >
                              <MinusSmallIcon className="w-4 h-4 mx-2" />
                            </button>
                            <input
                              name="child"
                              placeholder="0"
                              type="text"
                              className="w-full px-2 text-center bg-transparent outline-none appearance-none"
                              value={child}
                            />
                            <button
                              onClick={() => setChild(child + 1)}
                              tabIndex=""
                              htmlFor="show_more"
                              className="transition-all border-l border-gray-200 outline-none cursor-pointer active:scale-105"
                            >
                              <PlusSmallIcon className="w-4 h-4 mx-2" />
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => setChild(0)}
                            className="px-4 m-auto mt-2 rounded shadow-md bg-fifth/20 w-fit outline outline-1 active:scale-105"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>

                <div className="mt-1">
                  <input
                    type="email"
                    autoComplete="email"
                    value={session?.user?.email || ""}
                    className="block w-full p-1 bg-white rounded-md shadow-sm ring-2 ring-fourth sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2
                id="payment-heading"
                className="text-lg font-medium text-gray-900"
              >
                Payment details
              </h2>

              <div className="grid grid-cols-3 mt-6 gap-x-4 gap-y-6 sm:grid-cols-4">
                <div className="col-span-3 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={session?.user?.name || ""}
                      autoComplete="cc-name"
                      className="block w-full p-1 bg-white rounded-md shadow-sm ring-2 ring-fourth sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      autoComplete="cc-number"
                      className="block w-full bg-white border-gray-300 rounded-md shadow-sm ring-2 ring-fourth focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      autoComplete="cc-exp"
                      className="block w-full bg-white border-gray-300 rounded-md shadow-sm ring-2 ring-fourth focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      autoComplete="csc"
                      className="block w-full bg-white border-gray-300 rounded-md shadow-sm ring-2 ring-fourth focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="billing-heading" className="mt-10">
              <h2
                id="billing-heading"
                className="text-lg font-medium text-gray-900"
              >
                Billing information
              </h2>

              <div className="flex items-center mt-6">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  defaultUnChecked
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded checked:ring-1 ring-fourth"
                />
                <div className="ml-2">
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-gray-900"
                  >
                    Same as shipping information
                  </label>
                </div>
              </div>
            </section>

            <div className="pt-6 mt-10 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
              <button
                onClick={bookFlight}
                className="w-full px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md shadow-md bg-white/80 hover:bg-white/60 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-white sm:order-last sm:ml-6 sm:w-auto"
              >
                Book now
              </button>
              <p className="mt-4 text-sm text-center text-gray-500 sm:mt-0 sm:text-left">
                You won't be charged until the next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
