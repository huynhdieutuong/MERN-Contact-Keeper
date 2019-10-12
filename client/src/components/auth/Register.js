import React, { useState, useContext, useEffect } from "react";

import AlertContext from "../../contexts/alert/alertContext";
import AuthContext from "../../contexts/auth/authContext";

const Register = () => {
  const { setAlert } = useContext(AlertContext);
  const { register, error, clearErrors } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  useEffect(() => {
    if (error !== null) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error]);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return setAlert("Please enter all fileds", "danger");
    }
    if (password !== password2) {
      return setAlert("Password do not match", "danger");
    }
    register({ name, email, password });
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            minLength='6'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary btn-block'
          value='Register'
        />
      </form>
    </div>
  );
};

export default Register;
