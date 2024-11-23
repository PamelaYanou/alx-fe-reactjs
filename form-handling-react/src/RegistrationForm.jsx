import React, { useState } from "react";
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

   const handleSubmit = (e) => {
    e.preventDefault();
 if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }
    
     setError('');

        console.log('Form submitted:', formData);
  };

 return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};


    export default RegistrationForm