import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { API_URL } from "@/config";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function userList() {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [updateRole, setUpdateRole] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      if (session) {
        await axios.get(API_URL + `get-users`).then((res) => {
          setUsers(res.data);
        });
      }
    };
    fetchUsers();
  }, [session, deleted, updateRole]);

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
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the users</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
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
                    Role
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="py-4 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-10 h-10 rounded-full"
                            src={user.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-gray-500">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <div className="text-gray-900">{user.email}</div>
                    </td>
                    <td className="flex flex-col gap-2 px-3 py-4 text-sm whitespace-nowrap">
                      <div className="text-center">
                        {user.role == 0
                          ? "User"
                          : user.role == 1
                          ? "Admin"
                          : "null"}
                      </div>
                      <span className="m-auto rounded-md shadow-sm isolate">
                        <button
                          onClick={() => updateRoleHandler(user.email, 0)}
                          type="button"
                          className="relative inline-flex items-center px-2 py-2 text-gray-400 bg-white rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                        >
                          <ChevronLeftIcon
                            className="w-3 h-3"
                            aria-hidden="true"
                          />
                        </button>
                        <button
                          onClick={() => updateRoleHandler(user.email, 1)}
                          type="button"
                          className="relative inline-flex items-center px-2 py-2 -ml-px text-gray-400 bg-white rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                        >
                          <ChevronRightIcon
                            className="w-3 h-3"
                            aria-hidden="true"
                          />
                        </button>
                      </span>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
