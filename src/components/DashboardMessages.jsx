import React, { use } from "react";

import { useEffect, useState } from "react";
import axios from "axios";

import { useSession } from "next-auth/react";
import { API_URL } from "@/config";

export default function DashboardMessages() {
  const { data: session } = useSession();
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      if (session && session.user.email) {
        await axios.get(API_URL + `contact-dash`).then((res) => {
          //filter by search

          res.data = res.data.filter((message) => {
            return (
              message.firstName.toLowerCase().includes(search.toLowerCase()) ||
              message.lastName.toLowerCase().includes(search.toLowerCase()) ||
              message.email.toLowerCase().includes(search.toLowerCase()) ||
              message.message.toLowerCase().includes(search.toLowerCase()) ||
              message.phone.toLowerCase().includes(search.toLowerCase()) ||
              message.date.toLowerCase().includes(search.toLowerCase())
            );
          });

          // delete duplicates
          let unique = [];
          res.data.forEach((message) => {
            if (!unique.some((item) => item.id === message.id)) {
              unique.push(message);
            }
          });

          setMessages(unique);
          console.log(res.data);
        });
      }
    };
    fetchMessages();
  }, [session, deleted, search]);

  const handleDelete = async (messageId) => {
    try {
      const params = { id: messageId };
      console.log(messageId);
      if (confirm("Are you sure you want to cancel this Message?")) {
        await axios.delete(API_URL + `contact-dash`, {
          params,
        });
        alert("Message Deleted");
        setDeleted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 overflow-x-hidden bg-white sm:px-6 lg:px-8 rounded-xl">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 ">Messages</h1>
          <p className="mt-2 text-sm ">A list of all the Messages</p>
        </div>
        <div className="sm:ml-16 sm:mt-0 sm:flex-none">
          <label htmlFor="search" className="text-bolder">
            Search
          </label>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="block px-3 py-2 text-sm font-semibold text-black bg-white rounded-md shadow-sm ring-2 ring-black focus-visible:outline focus-visible:outline-2"
          />
        </div>
      </div>
      <ul>
        {
          <div className="flow-root mt-8 ">
            <div className="-mx-4 -my-2 overflow-x-hidden sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y ">
                  <thead>
                    <tr>
                      <th></th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0"
                      >
                        Message ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Message
                      </th>
                      <th
                        scope="col"
                        className="relative px-3 py-3.5 text-right text-sm font-semibold "
                      >
                        Phone Number
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="relative px-3 py-3.5 text-right text-sm font-semibold "
                      >
                        <span>Delete message</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    {messages.map((messages) => (
                      <tr key={messages.email}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium whitespace-nowrap sm:pl-0">
                          {messages.id}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap">
                          {messages.firstName}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap">
                          {messages.lastName}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap">
                          {messages.email}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap">
                          {JSON.stringify(messages.date || new Date())
                            .replace("T", " ")
                            .replace("Z", " ")
                            .replace('"', " ")
                            .replace('"', " ")
                            .slice(0, 17)}
                        </td>
                        <div className="max-w-xs ">
                          <button
                            type="button"
                            onClick={() => alert(messages.message)}
                            className=" items-center max-w-xs  px-3 py-1.5 text-xs font-medium text-white bg-black/20 rounded-md m-5 text-ellipsis hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                          >
                            {messages.message.slice(0, 10)} ...
                          </button>
                        </div>
                        <td className="px-3 py-4 text-sm whitespace-nowrap">
                          {messages.phone}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap">
                          {JSON.stringify(messages.date || new Date())
                            .replace("T", " ")
                            .replace("Z", " ")
                            .replace('"', " ")
                            .replace('"', " ")
                            .slice(0, 17)}
                        </td>
                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-center whitespace-nowrap sm:pr-0">
                          <button
                            href="#"
                            className="text-warning "
                            onClick={() => handleDelete(messages.id)}
                          >
                            Delete
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
