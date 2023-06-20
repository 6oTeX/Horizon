import React from "react";
import Link from "next/link";
export const ToDoList = (props) => {
  const { handleDeleteTodo } = props;

  return (
    <div className="flex justify-between rounded ">
      <li
        className="flex justify-between p-2 mb-3 rounded w-96 bg-neutral-900/80"
        id={props.item.id}
        key={props.item.id}>
        <Link
          href={`todos/${String(props.item.id)}`}
          className="text-xl text-blue-200">
          {props.item.id + ". "}
          {props.item.title}{" "}
        </Link>

        <div className="ml-5">
          {props.item.completed ? (
            <p className="text-green-500">Completed!!</p>
          ) : (
            <p className="text-red-500">Not Completed</p>
          )}
        </div>
      </li>
      <button
        className="h-10 px-3 ml-3 bg-red-600 rounded "
        onClick={() => handleDeleteTodo(props.item.id)}>
        X
      </button>
    </div>
  );
};
