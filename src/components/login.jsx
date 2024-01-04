import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          name="email"
          placeholder="youremail@gmail.com"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          id="password"
          name="password"
          placeholder="*******"
        ></input>
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => {
          props.onFormSwitch("register");
        }}
      >
        Don't have an account ? Register Here
      </button>
    </div>
  );
};

// TO DO : handleSubmit
