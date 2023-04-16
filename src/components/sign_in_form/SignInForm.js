import React, { useState } from "react";
import classes from "./SignInForm.module.css"
import Button from "../UI/Button";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }    else if (password.length > 6) {
        setErrors(false)
      }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // submit form
      console.log(email, password)
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
    <div className={classes.container}>
    <form onSubmit={handleSubmit} className={classes.form}>
        <div className="w-100 text-center border-bottom mb-3">
    <h2>Sign In</h2>
        </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className={classes.error_des}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className={classes.error_des}>{errors.password}</p>}
      </div>
      <Button>Sign In</Button>
    </form>
    </div>
    </div>
  );
};

export default SignInForm;
