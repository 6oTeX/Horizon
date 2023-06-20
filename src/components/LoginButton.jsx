import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "@/config";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const userNavigation = [{ name: "Booking History", href: "/bookingsHistory" }];

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();
  const [role, setRole] = useState(0);

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
            setRole(res.data.role);
          });
      }
    };
    fetchUser();
  }, [session]);

  if (session) {
    return (
      <>
        <div className="hidden md:block">
          <div className="flex items-center ml-4 md:ml-6">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex items-center max-w-xs text-sm text-white rounded-full black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-black"
                          )}>
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  {!role ? null : role === 1 ? (
                    <Link
                      className="block w-full px-4 py-2 text-sm text-black"
                      href="/dashboard-users">
                      Dashboard
                    </Link>
                  ) : null}
                  {session && session.user ? (
                    <button
                      className="block w-full px-4 py-2 text-sm text-black"
                      onClick={() => signOut()}>
                      Sign out
                    </button>
                  ) : (
                    <button
                      className="block px-4 py-2 text-sm text-black"
                      onClick={() => signIn()}>
                      Sign in
                    </button>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <button className="hover:text-white/60" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
