import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import FlightList from "@/components/DashboardFlights";
import { useRouter } from "next/router";
import Link from "next/link";
import DashboardNav from "@/components/DashboardNav";

const navigation = [
  { name: "Users", href: "/dashboard-users", current: false },
  { name: "Flights", href: "/dashboard-flights", current: true },
  { name: "Booked Flight", href: "/dashboard-bookedFlights", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen text-black bg-black/50">
        <DashboardNav />

        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Flights
            </h1>
          </div>
        </header>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <FlightList />
          </div>
        </main>
      </div>
    </>
  );
}
