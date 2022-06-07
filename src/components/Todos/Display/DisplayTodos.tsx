import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../buttons/ButtonIcon";
import { styles } from "../../../utils/Styles/styles";

const DisplayTodos: FC = ({
  user,
  todayFormatted,
  handleComplete,
  handleDelete,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {user?.todos?.map((todo, index) => {
        // flag that will check first if todo is delayed

        let isDelayedTodo;
        if (todo.deadline < todayFormatted) {
          isDelayedTodo = `${styles?.todoState.general} ${styles?.todoState.delayed}`;

          // checks if delayed todo is done
          if (todo.status) {
            isDelayedTodo = `${styles?.todoState.general} ${styles?.todoState.done}`;
          }
        } else {
          if (todo.status) {
            isDelayedTodo = `${styles?.todoState.general} ${styles?.todoState.done}`;
          } else {
            isDelayedTodo = `${styles?.todoState.general} ${styles?.todoState.pending}`;
          }
        }

        return (
          <div
            key={index}
            className={`${isDelayedTodo} w-full sm:w-[30rem] mx-5`}
          >
            <div className="grow">
              <p className="font-bold text-gray-900">
                Title: {todo.title.toUpperCase()}
              </p>
              <p>Creation Date: {todo.createdDate.value}</p>
              <p>Deadline: {todo.deadline}</p>
              <p>Timezone: {todo.createdDate.timeZone}</p>
              <p className="text-xl mt-5">Details: {todo.description}</p>
            </div>

            <div className="self-start flex flex-col md:flex-row">
              <ButtonIcon
                handler={() => handleComplete(index, todo.todoId)}
                styles={
                  todo.status
                    ? "text-green-600 m-2"
                    : "hover:text-green-600 m-2"
                }
                btnTitle={styles?.icons.done}
                todo={todo}
              />

              <ButtonIcon
                handler={() => handleDelete(index)}
                styles="hover:text-red-500 m-2"
                btnTitle={styles?.icons.delete}
              />

              <ButtonIcon
                handler={() => navigate(`/update/${todo.id}`)}
                styles={
                  todo.status ? "text-black m-2" : "hover:text-yellow-500 m-2"
                }
                disable={todo.status ? true : false}
                btnTitle={styles?.icons.update}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayTodos;
