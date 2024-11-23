import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './RegistrationForm'
import React from 'react';
import FormikForm from './Components/formikForm'


function App() {
  const [count, setCount] = useState(0)

    return (
        <div>
            <h1>User Registration</h1>
            <h2>Controlled Component</h2>
            <RegistrationForm />
            <h2>Formik Form</h2>
            <FormikForm/>
        </div>
    );
}

export default App;


