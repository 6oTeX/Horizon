import Link from "next/link";
import { Fragment, use, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { API_URL } from "@/config";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Users", href: "/dashboard-users", current: true },
  { name: "Flights", href: "/dashboard-flights", current: false },
  { name: "Booked Flight", href: "/dashboard-bookedFlights", current: false },
  { name: "Messages", href: "/dashboard-messages", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardNav() {
  const router = useRouter();
  const { data: session } = useSession();

  const [user, setUser] = useState([]);

  // check if user is admin
  useEffect(() => {
    const fetchUser = async () => {
      if (session && session.user && session.user.email) {
        await axios
          .get(API_URL + `get-or-put-user-info`, {
            params: {
              email: session.user.email,
            },
          })
          .then((res) => {
            setUser(res.data);
            console.log(res.data.role);
            if (res.data.role !== 1) {
              router.push("/");
            }
          });
      }
    };
    fetchUser();
  }, [session]);

  // if role is not admin, redirect to home page

  return (
    <Disclosure as="nav" className="text-white bg-black/75">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
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
                </Link>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center ml-4 md:ml-6">
                  <button
                    type="button"
                    className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex items-center max-w-xs text-sm text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src={session?.user.image}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {navigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-black"
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        {session && session.user ? (
                          <button
                            className="block px-4 py-2 text-sm text-black"
                            onClick={() => signOut()}
                          >
                            Sign out
                          </button>
                        ) : (
                          <button
                            className="block px-4 py-2 text-sm text-black"
                            onClick={() => signIn()}
                          >
                            Sign in
                          </button>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={session?.user.image}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {session?.user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {session?.user.email}
                  </div>
                </div>
              </div>
              <div className="px-2 mt-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
