import { FC, useState, useEffect, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import { UserInfo } from "./RegistrationProps";

const UseRegister: FC = () => {
  const navigate = useNavigate();

  // * state that handles use details
  const [user, setUser] = useState<UserInfo>({} as UserInfo);

  // * state that checks if email already exist
  const [emailExist, setEmailExist] = useState(false);

  // * checks if access token exist in local storage in every initial render and navigate to todos page
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken") || "");
    if (accessToken) {
      navigate("/todos");
    }
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:2014/users", user);

      setEmailExist(false);
      navigate("/");
    } catch (err: any) {
      console.log(err.message);

      // * check if email already exist
      const { meta } = err.response.data;
      setEmailExist(true);
      meta?.status == 409 && setEmailExist(true);
    }
  };
  return (
    <Register
      emailExist={emailExist}
      user={user}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UseRegister;
