import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import axios from "axios";
import AddTodo from "./AddTodo";
import { IUseAddTodoProps } from "./types";
import { Todos } from "./types";

const UseAddTodo: FC<IUseAddTodoProps> = ({
  user,
  setUser,
}: IUseAddTodoProps) => {
  // * state that handles todo
  const [todo, setTodo] = useState<Todos>({} as Todos);

  // * state that checks if todo is delayed
  const [isDelayedTodo, setIsDelayedTodo] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTodo((prevTodo) => ({
      ...prevTodo,
      id: Date.now().toString(),
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // * getting only the YYYY-MM-DD format from creation date generated using toISOString method
    const creationDate = todo.createdDate.value.split("T");

    if (todo.deadline >= creationDate[0]) {
      user?.todos?.push(todo);
      setUser((prevUser: any) => ({ ...prevUser }));

      try {
        await axios.put("http://localhost:2014/users", user);
      } catch (err: any) {
        console.log(err.message);
      }

      setTodo((prevTodo) => ({
        ...prevTodo,
        title: "",
        description: "",
        deadline: "",
      }));

      setIsDelayedTodo(false);
    } else {
      setIsDelayedTodo(true);
    }
  };

  return (
    <AddTodo
      todo={todo}
      isDelayedTodo={isDelayedTodo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UseAddTodo;
