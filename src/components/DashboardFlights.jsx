import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { API_URL } from "@/config";

export default function DashboardFlights() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [picString, setPicString] = useState("");
  const [bookId, setBookId] = useState("");

  const { data: session } = useSession();
  const [flights, setFlights] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const fetchFlights = async () => {
      if (session) {
        await axios.get(API_URL + `flight-dash`).then((res) => {
          setFlights(res.data);
          console.log(res.data);
          console.log(flights);
        });
      }
    };
    fetchFlights();
    console.log(flights.totalBookingFlight);
  }, [session, deleted, changed]);

  const openflightFormChange = () => {
    document.getElementById("flightFormChange").classList.toggle("hidden");
    console.log("clicked");
  };

  const handleDelete = async (bookId) => {
    try {
      const params = { id: bookId };
      console.log(bookId);
      if (confirm("Are you sure you want to cancel this booking?")) {
        const res = await axios.delete(API_URL + `flight-dash`, {
          params,
        });
        console.log("jobs done: " + res.data);
        setDeleted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // id Int @id @default(autoincrement()) // primary key
  // name String
  // from String
  // to String
  // date DateTime
  // price Decimal
  // desc String?
  // picString String?
  // picBlob Bytes?

  const changeFlight = async (flightId) => {
    try {
      const data = {
        id: flightId,
        name: name,
        from: from,
        to: to,
        date: date,
        price: price,
        desc: desc,
        picString: picString,
      };
      if (confirm("Are you sure you want to change this Flight?")) {
        const res = await axios
          .put(API_URL + `flight-dash`, data)
          .then((res) => {
            setChanged(!changed);
            console.log(res.data);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateRoleHandler = async (email, role) => {
    const data = {
      email: email,
      role: role,
    };
    if (confirm("Are you sure you want to do this?")) {
      await axios.put(API_URL + `get-or-put-user-info`, data).then((res) => {
        setUpdateRole(!updateRole);
      });
    }
  };

  return (
    <div className="p-4 bg-white sm:px-6 lg:px-8 rounded-xl">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Flights
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Flights
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
          <div className="mt-8 w-root">
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
                        Flights ID
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
                        Flights destination from
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Flights destination to
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="relative px-3 py-3.5 text-right text-sm font-semibold"
                      >
                        Amount of bookings
                      </th>

                      <th
                        scope="col"
                        className="relative px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                      >
                        Change Flight
                      </th>

                      <th
                        scope="col"
                        className="relative px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                      >
                        <span>Delete Flight</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {flights.map((flights) => (
                      <tr key={flights.email}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                          <img
                            className="w-20 h-20 rounded-full"
                            src={flights.picString}
                            alt="Flight Image"
                          />
                        </td>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                          {flights.id}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {flights.name}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {flights.from}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {flights.to}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {JSON.stringify(flights.date || new Date())
                            .replace("T", " ")
                            .replace("Z", " ")
                            .replace('"', " ")
                            .replace('"', " ")
                            .slice(0, 17)}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {flights.totalBookingFlight} Booking(s)
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <button
                            className="text-warning "
                            onClick={() => openflightFormChange()}
                          >
                            Change Flight
                          </button>
                        </td>
                        <div
                          id="flightFormChange"
                          className="fixed z-20 flex-col hidden m-2 bg-white top-28 rounded-2xl"
                        >
                          <form
                            className="flex flex-col justify-center p-2 bg-white border rounded-2xl"
                            onSubmit={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <button
                              className="absolute top-0 right-0 px-2 m-2 rounded-lg bg-warning/70"
                              onClick={() => openflightFormChange()}
                            >
                              X
                            </button>

                            <h1 className="text-center">Change Flight</h1>

                            <div className="flex flex-col rounded-sm">
                              <label className="p-2 underline">Name</label>
                              <input
                                className="p-2 ml-3 bg-white border rounded-lg"
                                name="id"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col rounded-sm">
                              <label className="p-2 underline">From</label>
                              <input
                                className="p-2 ml-3 bg-white border rounded-lg"
                                name="from"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col rounded-sm">
                              <label className="p-2 underline">To</label>
                              <input
                                className="p-2 ml-3 bg-white border rounded-lg"
                                name="to"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col rounded-sm">
                              <label className="p-2 underline">Date</label>
                              <input
                                className="p-2 ml-3 bg-white border rounded-lg"
                                name="date"
                                value={date}
                                type="datetime-local"
                                onChange={(e) => setDate(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col rounded-sm">
                              <label className="p-2 underline rounded-lg">
                                Price
                              </label>
                              <input
                                className="p-2 ml-3 bg-white border rounded-lg"
                                name="price"
                                value={price}
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col rounded-sm">
                              <label className="p-2 underline rounded-lg">
                                Desc
                              </label>
                              <input
                                className="p-2 ml-3 bg-white border rounded-lg"
                                name="desc"
                                value={desc}
                                contentEditable="true"
                                onChange={(e) => setDesc(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col rounded-sm">
                              <label className="p-2 underline rounded-lg">
                                Picture URL
                              </label>
                              <input
                                className="p-2 ml-3 bg-white border rounded-lg"
                                name="picString"
                                value={picString}
                                type="url"
                                onChange={(e) => setPicString(e.target.value)}
                              />
                            </div>

                            <button
                              className="p-2 m-2 mx-auto rounded-lg bg-black/20 "
                              onClick={() => changeFlight(flights.id)}
                            >
                              Change Flight
                            </button>
                          </form>
                        </div>

                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-center whitespace-nowrap sm:pr-0">
                          <button
                            href="#"
                            className="text-warning hover:text-indigo-900"
                            onClick={() => handleDelete(flights.id)}
                          >
                            Cancel Flight
                            <span className="sr-only">, {flights.name}</span>
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
