import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IHeaderProps } from "./types";

const Header: FC<IHeaderProps> = ({ user: { firstName } }: IHeaderProps) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <header>
      <nav className="bg-slate-300 sticky top-0 shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="grow text-lg font-semibold">Welcome, {firstName}.</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-3 px-6"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default Header;
