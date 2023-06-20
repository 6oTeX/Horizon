import Navbar from "../components/Nav";
import React from "react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { API_URL } from "@/config";

export default function BookingHistory() {
  const { data: session } = useSession();
  const [bookedFlights, setBookedFlights] = useState([]);
  let timeFixed = "";

  const fetchBookings = async () => {
    if (session && session.user.email) {
      await axios
        .get(API_URL + `book-flight?email=${session.user.email}`)
        .then((res) => {
          setBookedFlights(res.data);
          console.log(res.data);
          console.log(bookedFlights);
        });
    }
  };

  // get flight info for each booking and add it to the booking object

  useEffect(() => {
    fetchBookings();
  }, []);

  console.log(timeFixed);

  return (
    <div className="">
      <Navbar />
      <div className="px-4 py-16 mx-auto rounded-md max-w-7xl sm:px-6 lg:px-8 lg:pb-24 bg-white/30">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Bookings history
          </h1>
          {session && session.user ? (
            bookedFlights.length > 0 ? (
              <p className="mt-4 text-gray-500">
                Welcome back, {session.user.name}!<br /> Check the status of
                recent orders.
              </p>
            ) : (
              <p className="mt-4 text-gray-500">
                Welcome back, {session.user.name}! You have no bookings yet.
              </p>
            )
          ) : (
            <p className="mt-4 text-gray-500">
              Welcome back, please sign in to view your bookings.
            </p>
          )}
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-20">
            {bookedFlights.map((item) => (
              <div className="p-10 rounded bg-black/50" key={item.booked}>
                <div className="px-4 py-6 rounded-lg bg-gray-50 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                  <dl className="flex-auto space-y-6 text-sm text-gray-600 divide-y divide-gray-200 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between sm:block">
                      <dt className="text-xl font-medium underline">
                        Date placed
                      </dt>
                      <dd className="font-semibold sm:mt-1">
                        <time>
                          {JSON.stringify(item.booked || new Date())
                            .replace("T", " ")
                            .replace("Z", " ")
                            .replace('"', " ")
                            .replace('"', " ")
                            .slice(0, 17)}
                        </time>
                      </dd>
                    </div>
                    <div className="flex justify-between px-4 pt-6 border-x sm:block sm:pt-0">
                      <dt className="text-xl font-medium underline">
                        Flight ID
                      </dt>
                      <dd className="font-bold sm:mt-1">{item.id}</dd>
                    </div>
                    <div className="flex justify-between font-medium w-60 sm:block sm:pt-0">
                      <dt className="text-xl underline">Amount of people</dt>
                      <dd className="font-bold sm:mt-1">
                        Adults: {item.adults}
                        <br />
                        Childeren: {item.children}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    href={`qr/${String(item.id)}`}
                    className="flex items-center justify-center w-full px-4 py-2 mt-6 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm bg-/40 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                  >
                    View Qr code
                    <span className="sr-only">for order {item.number}</span>
                  </Link>
                </div>

                <table className="w-full mt-4 text-gray-500 sm:mt-6">
                  <caption className="sr-only">flights</caption>
                  <thead className="text-sm text-left text-gray-500 sr-only sm:not-sr-only">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3"
                      >
                        Flight
                      </th>
                      <th
                        scope="col"
                        className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell"
                      >
                        Price (USD) $
                      </th>
                      <th
                        scope="col"
                        className="hidden py-3 pr-8 font-normal sm:table-cell"
                      >
                        Total Price (USD) $
                      </th>
                      <th
                        scope="col"
                        className="w-0 py-3 font-normal text-right"
                      >
                        Info
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm border-b border-gray-200 divide-y divide-gray-200 sm:border-t">
                    <tr>
                      <td className="py-6 pr-8 whitespace-nowrap">
                        <div className="flex items-center space-x-6 sm:space-x-4">
                          <div className="flex-shrink-0 w-20 h-20">
                            <img
                              src={item.flightPicString}
                              alt={item.flightName}
                              className="object-cover w-full h-full rounded-md"
                            />
                          </div>
                          <div className="flex flex-col">
                            <div className="hidden text-sm text-gray-500 sm:block">
                              <span>
                                From: {item.flightFrom} To: {item.flightTo}
                              </span>
                              <br />
                              <span>
                                Date:{" "}
                                {JSON.stringify(item.flightDate || new Date())
                                  .replace("T", " ")
                                  .replace("Z", " ")
                                  .replace('"', " ")
                                  .replace('"', " ")
                                  .slice(0, 17)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden py-6 pr-8 whitespace-nowrap sm:table-cell">
                        ${item.price}
                      </td>
                      <td className="hidden py-6 pr-8 whitespace-nowrap sm:table-cell">
                        $
                        {item.price * item.adults +
                          item.price * item.children * 0.8}
                      </td>

                      <td className="py-6 font-medium text-right whitespace-nowrap">
                        <Link
                          href={`/flight/${String(item.flightId)}`}
                          className="font-bold underline underline-offset-4"
                        >
                          View flight
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
