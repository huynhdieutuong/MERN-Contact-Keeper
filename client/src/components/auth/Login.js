import React, { useState, useContext } from "react";

import AlertContext from "../../contexts/alert/alertContext";

const Login = () => {
  const { setAlert } = useContext(AlertContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      return setAlert("Please enter all fileds", "danger");
    }
    console.log(formData);
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary btn-block'
          value='Login'
        />
      </form>
    </div>
  );
};

export default Login;
