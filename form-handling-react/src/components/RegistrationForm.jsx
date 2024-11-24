import React, { useState } from "react";

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

 
  const { username, email, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    console.log("Form Submitted:", formValues);
    setError("");
    setFormValues({ username: "", email: "", password: "" }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration (Controlled Components)</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} 
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
