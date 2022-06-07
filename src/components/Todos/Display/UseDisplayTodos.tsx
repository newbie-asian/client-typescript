import React, { FC, useMemo } from "react";
import axios from "axios";
import DisplayTodos from "./DisplayTodos";

function addZerosToMonthOrDate(today: any) {
  return today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth();
}

function addZerosToDay(today: any) {
  return today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
}

const UseDisplayTodos: FC = ({ user, setUser }) => {
  // * generate today's date
  const today = useMemo(() => new Date(), []);
  // * added 0 to every month from Jan to Sept and 0 to days from 1 to 9
  const month = useMemo(() => addZerosToMonthOrDate(today), [today]);
  const day = useMemo(() => addZerosToDay(today), [today]);
  // * today's date formatted to match the format of the deadline

  const todayFormatted = useMemo(() => {
    return `${today.getFullYear()}-${month}-${day}`;
  }, [today, day, month]);

  const handleDelete = async (index) => {
    user.todos.splice(index, 1);
    setUser((prevUser) => ({ ...prevUser }));

    try {
      await axios.put("http://localhost:2014/users", user);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleComplete = async (index) => {
    user.todos[index].status = !user.todos[index].status;
    setUser((prevUser) => ({ ...prevUser }));

    try {
      await axios.put("http://localhost:2014/users", user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <DisplayTodos
      user={user}
      todayFormatted={todayFormatted}
      handleComplete={handleComplete}
      handleDelete={handleDelete}
    />
  );
};

export default UseDisplayTodos;
