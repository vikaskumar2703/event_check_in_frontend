import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*Add condition on successful register*/
    props.onFormSwitch("login");
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="name"
          name="name"
          placeholder="Full Name"
        ></input>
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
        <button type="submit">Register</button>
      </form>
      <button
        className="link-btn"
        onClick={() => {
          props.onFormSwitch("login");
        }}
      >
        Already have an account? Login Here
      </button>
    </div>
  );
};

// TO DO : handleSubmit
