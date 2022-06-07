import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { Credentials } from "./UserLoginProps";

const UseLogin: FC = () => {
  const navigate = useNavigate();

  // * state that handles use details
  const [userCredentials, setUserCredentials] = useState<Credentials>(
    {} as Credentials
  );

  // * state that checks if email already exist
  const [isInvalid, setIsInvalid] = useState(false);

  // * checks if access token exist in local storage in every initial render and navigate to todos page
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "");
    if (accessToken) {
      navigate("/todos");
    }
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserCredentials((prevUserCredentials) => {
      return { ...prevUserCredentials, [name]: value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:2014/users/login",
        userCredentials
      );
      const { accessToken, user } = response.data;

      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      localStorage.setItem("userId", JSON.stringify(user[0]._id));

      setIsInvalid(false);
      navigate("/todos");
    } catch (err: any) {
      console.log(err.message);

      // * check if email already exist
      const { meta } = err.response.data;
      setIsInvalid(true);
      meta?.status == 404 && setIsInvalid(true);
    }
  };
  return (
    <Login
      isInvalid={isInvalid}
      userCredentials={userCredentials}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UseLogin;
