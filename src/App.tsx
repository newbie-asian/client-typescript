import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./views/Registration/RegistrationPage";
import LoginPage from "./views/Login/LoginPage";
import PageNotFound from "./views/404/PageNotFound";
import Dashboard from "./views/Dashboard/Dashboard";
import Update from "./views/Update/Update";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegistrationPage />} />

      <Route path="todos" element={<Dashboard />} />

      <Route path="update/:id" element={<Update />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
