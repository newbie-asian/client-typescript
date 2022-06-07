import React, { FC } from "react";
import { Link } from "react-router-dom";
import TextField from "../../forms/TextField/TextField";
import Button from "../../buttons/Button";
import { styles } from "../../../utils/Styles/styles";
import { RegisterProps } from "./RegistrationProps";

const Register: FC<RegisterProps> = ({
  emailExist,
  user,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-5">
      {emailExist && <p className={styles.error}>Email already exist</p>}
      <form className={styles.forms.register_and_login} onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl text-slate-800 mb-6">
          CREATE NEW ACCOUNT
        </h1>
        <TextField
          type="text"
          name="firstName"
          value={user.firstName}
          handleChange={handleChange}
          placeholder="First Name"
          genStyles={styles?.formFields.general}
          uniqueStyles={styles?.formFields.textField}
        />
        <TextField
          type="text"
          name="lastName"
          value={user.lastName}
          handleChange={handleChange}
          placeholder="Last Name"
          genStyles={styles?.formFields.general}
          uniqueStyles={styles?.formFields.textField}
        />
        <TextField
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
          placeholder="Email Address"
          genStyles={styles?.formFields.general}
          uniqueStyles={styles?.formFields.textField}
        />
        <TextField
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
          placeholder="Password"
          genStyles={styles?.formFields.general}
          uniqueStyles={styles?.formFields.textField}
        />
        <Button
          btnTitle="sign up"
          genStyles={styles?.button.general}
          uniqueStyles={styles?.button.register_and_login}
        />
      </form>
      <Link
        to="/"
        className="mt-4 underline underline-offset-2 font-semibold hover:text-slate-500"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default Register;
