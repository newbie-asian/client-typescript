import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UseAddTodo from "../../components/Todos/Add/UseAddTodo";
import Header from "../../components/layouts/Header/Header";
import UseDisplayTodos from "../../components/Todos/Display/UseDisplayTodos";
import { UserInfo } from "./DashboardProps";

const Dashboard: FC = () => {
  const [user, setUser] = useState<UserInfo | null>({} as UserInfo);

  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("accessToken") || "");

    !token && navigate("/");
  }, [navigate]);

  const fetchUser = async () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "");
    const userId = JSON.parse(localStorage.getItem("userId") || "");

    try {
      const response = await axios.get(
        `http://localhost:2014/users/${userId}`,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { user } = response.data;
      user ? setUser(user) : setUser(null);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header {...user} />
      <section className="w-full sm:w-[40rem] mx-auto">
        <UseAddTodo user={user} setUser={setUser} />
        <div className="flex flex-col justify-center items-center mx-5">
          <UseDisplayTodos user={user} setUser={setUser} />
        </div>
      </section>
    </>
  );
};
export default Dashboard;
