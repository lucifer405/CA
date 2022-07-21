import { useState,useEffect } from 'react';
import './login.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {
  useEffect(() => {
    document.title = 'CA || LOGIN PAGE';
  });

  const [valuee, setValue] = useState({
    email: "",
    pass: ""
  })

  const assignValues = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValue({
      ...valuee,
      [name]: value
    })
  }
  let login_datas = [];
  let navigate = useNavigate();

  const submitting = (e) => {
    let state = {
      email: valuee.email,
      pass: valuee.pass
    }
    login_datas.push(state);
    console.log(state);
    postLoginData(state);
    e.preventDefault();
  }

  const postLoginData = (data) => {
    
      axios.post("http://localhost:8081/user/login", data).then(
        (response) => {
          console.log(response);
          console.log("successful");
          navigate("/user/home");
        },(error) =>{
          console.log(error);
          console.log("Login not successful");
          alert("Wrong Credentials");
        }
      );
  }
  return (
    <>
      <Header />
      <div className="main-container">
        <div className='signup-container'>
          <div className="form-header">
            <h1>User Sign in</h1>
          </div>
          <div className="form-span"></div>
          <div className="form-input-container">

            <form onSubmit={submitting}>
              <input type="email" name="email" id="email" placeholder="Enter email" onChange={assignValues} value={valuee.email} required={true}></input><br />
              <input type="password" name="pass" id="pass" placeholder="Password" onChange={assignValues} value={valuee.pass} required={true}></input><br />

              <div className="form-btn">
                <button className='button'><span>{'login'} </span></button>
              </div>
            </form>
            <footer className='footer'>
              <p>Not a user? <Link to='/user/signup' className='link'>Sign up</Link></p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;