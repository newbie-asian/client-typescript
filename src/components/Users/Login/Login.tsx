import React, { FC } from "react";
import { Link } from "react-router-dom";
import TextField from "../../forms/TextField/TextField";
import Button from "../../buttons/Button";
import { styles } from "../../../utils/Styles/styles";
import { LoginProps } from "./UserLoginProps";

const Login: FC<LoginProps> = ({
  isInvalid,
  userCredentials,
  handleChange,
  handleSubmit,
}: LoginProps) => (
  <div className="min-h-screen flex flex-col justify-center items-center mx-5">
    {isInvalid && <p className={styles.error}>Invalid Credentials</p>}
    <form className={styles.forms.register_and_login} onSubmit={handleSubmit}>
      <h1 className="font-bold text-3xl text-slate-800 mb-6">LOGIN</h1>

      <TextField
        type="email"
        name="email"
        value={userCredentials.email}
        handleChange={handleChange}
        placeholder="Email Address"
        genStyles={styles?.formFields.general}
        uniqueStyles={styles?.formFields.textField}
      />
      <TextField
        type="password"
        name="password"
        value={userCredentials.password}
        handleChange={handleChange}
        placeholder="Password"
        genStyles={styles?.formFields.general}
        uniqueStyles={styles?.formFields.textField}
      />
      <Button
        btnTitle="login"
        genStyles={styles?.button.general}
        uniqueStyles={styles?.button.register_and_login}
      />
    </form>
    <Link
      to="/register"
      className="mt-4 underline underline-offset-2 font-semibold hover:text-slate-500"
    >
      Don't have an account yet?
    </Link>
  </div>
);

export default Login;
