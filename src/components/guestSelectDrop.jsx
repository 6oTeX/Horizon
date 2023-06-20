import { Fragment } from "react";
import { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
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

function DropDownGuest() {
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);

  const incrementChild = () => {
    setChild((prevChild) => prevChild + 1);
  };

  const decrementChild = () => {
    if (child > 0) {
      setChild((prevChild) => prevChild - 1);
    }
  };

  const resetChild = () => {
    setChild(0);
  };

  const incrementAdult = () => {
    setAdult((prevAdult) => prevAdult + 1);
  };

  const decrementAdult = () => {
    if (adult > 0) {
      setAdult((prevAdult) => prevAdult - 1);
    }
  };

  const resetAdult = () => {
    setAdult(0);
  };

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center h-10 p-2 px-10 ml-4 text-base leading-6 text-black rounded outline-1 outline first-letter:w-fit text-opacity-40 gap-x-1">
        <span>Press here</span>
        <UserPlusIcon className="w-5 h-5 m-auto text-black text-opacity-40" />
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
        <Popover.Panel className="absolute z-20 flex w-screen p-2 px-4 mt-10 -translate-x-1/2 shadow-2xl drop-shadow-2xl rounded-xl bg-white/20 left-1/2 max-w-max outline outline-2 outline-white/50">
          <div className="flex flex-col">
            <label className="p-3 m-auto" htmlFor="people">
              <UserPlusIcon className="w-8 h-8 m-auto text-opacity-40" />
              Adults
            </label>
            <div className="flex justify-center px-4">
              <div className="flex items-center h-10 mt-1 border border-gray-200 rounded w-28 bg-gray-50">
                <button
                  onClick={decrementAdult}
                  tabIndex=""
                  htmlFor="show_more"
                  className="text-gray-500 transition-all border-r border-gray-200 outline-none cursor-pointer focus:outline-none hover:text-blue-600"
                >
                  <MinusSmallIcon className="w-4 h-4 mx-2" />
                </button>
                <input
                  name="soda"
                  id="soda"
                  placeholder="0"
                  type="text"
                  className="w-full px-2 text-center text-gray-800 bg-transparent outline-none appearance-none"
                  value={adult}
                />
                <button
                  onClick={incrementAdult}
                  tabIndex=""
                  htmlFor="show_more"
                  className="text-gray-500 transition-all border-l border-gray-200 outline-none cursor-pointer focus:outline-none hover:text-blue-600"
                >
                  <PlusSmallIcon className="w-4 h-4 mx-2" />
                </button>
              </div>
            </div>
            <div className="flex">
              <button
                onClick={resetAdult}
                className="px-4 m-auto mt-2 text-white rounded shadow-md outline outline-1 bg-fifth/20 w-fit"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="p-3 m-auto mt-3" htmlFor="people">
              <UserPlusIcon className="w-5 h-5 m-auto text-opacity-40" />
              Children
            </label>
            <div className="px-4">
              <div className="flex items-center h-10 mt-1 border border-gray-200 rounded w-28 bg-gray-50">
                <button
                  onClick={decrementChild}
                  tabIndex=""
                  htmlFor="show_more"
                  className="text-gray-500 transition-all border-r border-gray-200 outline-none cursor-pointer focus:outline-none hover:text-blue-600"
                >
                  <MinusSmallIcon className="w-4 h-4 mx-2" />
                </button>
                <input
                  name="soda"
                  id="soda"
                  placeholder="0"
                  type="text"
                  className="w-full px-2 text-center text-gray-800 bg-transparent outline-none appearance-none"
                  value={child}
                />
                <button
                  onClick={incrementChild}
                  tabIndex=""
                  htmlFor="show_more"
                  className="text-gray-500 transition-all border-l border-gray-200 outline-none cursor-pointer"
                >
                  <PlusSmallIcon className="w-4 h-4 mx-2" />
                </button>
              </div>
            </div>
            <div className="flex">
              <button
                onClick={resetChild}
                className="px-4 m-auto mt-2 text-white rounded shadow-md bg-fifth/20 w-fit outline outline-1"
              >
                Reset
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default DropDownGuest;
