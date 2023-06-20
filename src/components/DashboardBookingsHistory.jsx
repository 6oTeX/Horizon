import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";

import { useSession } from "next-auth/react";
import { API_URL } from "@/config";

export default function DashboardBookingsHistory() {
  const [name, setName] = useState("");
  const { data: session } = useSession();
  const [bookedFlights, setBookedFlights] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      if (session && session.user.email) {
        await axios.get(API_URL + `book-flight-dash`).then((res) => {
          setBookedFlights(res.data);
          console.log(res.data);
          console.log(bookedFlights);
        });
      }
    };
    fetchBookings();
  }, [session, deleted, name]);

  const handleDelete = async (bookId) => {
    try {
      const params = { id: bookId };
      console.log(bookId);
      if (confirm("Are you sure you want to cancel this Flight?")) {
        const res = await axios.delete(API_URL + `book-flight-dash`, {
          params,
        });
        console.log("jobs done: " + res.data);

        setDeleted(true);
        fetchBookings();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 bg-white sm:px-6 lg:px-8 rounded-xl">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Booked Flights
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the booked Flights
          </p>
        </div>
        <div className="sm:ml-16 sm:mt-0 sm:flex-none">
          <label htmlFor="search" className="text-bolder">
            Search
          </label>
          <input
            type="search"
            onChange={(e) => setName(e.target.value)}
            className="block px-3 py-2 text-sm font-semibold text-black bg-white rounded-md shadow-sm ring-2 ring-black focus-visible:outline focus-visible:outline-2"
          />
        </div>
      </div>
      <ul>
        {
          <div className="flow-root mt-8">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y ">
                  <thead>
                    <tr>
                      <th></th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Booking ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Flights name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Amount of people
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="relative px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                      >
                        <span>Cancel Booking</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookedFlights.map((bookingFlight) => (
                      <tr key={bookingFlight.email}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                          <img
                            className="w-20 h-20 rounded-full"
                            src={bookingFlight.flightPicString}
                            alt="Flight Image"
                          />
                        </td>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                          {bookingFlight.id}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {bookingFlight.flightName}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {bookingFlight.email}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {bookingFlight.adults} Adults,{" "}
                          {bookingFlight.children} Children
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {JSON.stringify(bookingFlight.date || new Date())
                            .replace("T", " ")
                            .replace("Z", " ")
                            .replace('"', " ")
                            .replace('"', " ")
                            .slice(0, 17)}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          ${" "}
                          {bookingFlight.price * bookingFlight.adults +
                            bookingFlight.price *
                              (bookingFlight.children * 0.8)}
                        </td>
                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-center whitespace-nowrap sm:pr-0">
                          <button
                            href="#"
                            className="text-warning hover:text-indigo-900"
                            onClick={() => handleDelete(bookingFlight.id)}
                          >
                            Cancel
                            <span className="sr-only">
                              , {bookingFlight.name}
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      </ul>
    </div>
  );
}
