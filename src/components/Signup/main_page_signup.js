import axios from 'axios';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import './main_page_signup.css';

const Main = () => {
    const[validation,setValidation]=useState("")
    const[valuee,setValue]=useState({
        select:"",
        email:"",
        u_name:"",
        mobile:"",
        password:"",
        confirmPassword:"",
    })
    const assignValues=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setValue({
            ...valuee,
            [name]:value
        })
    }
    const confPassword=event=>{
        const name=event.target.name
        const value=event.target.value
        setValue({
            ...valuee,
            [name]:value
        })
        
        if(valuee.password!==valuee.confirmPassword){
            setValidation("Password and Confirm Password not matched");
        }
    }  

    let users=[];
    const submitting = (event)=>{
    let state={
            select:valuee.select,
            email:valuee.email,
            u_name:valuee.u_name,
            mobile:valuee.mobile,
            password:valuee.password,
            confirmPassword:valuee.confirmPassword
        } 
    users.push(state);
    console.log(state);
    postData(state);
    localStorage.setItem('usersdata',JSON.stringify(users));
    event.preventDefault();
  }

  const postData=(data)=>{
    axios.post("http://localhost:8081/user/signup",data).then(
        (response)=>{
            console.log(response);
            console.log("success");
        }
    );
  };
  let navigate = useNavigate();
  const handleChange = (event) =>{
    if(valuee.select==='Admin'){
        navigate('/admin/signup',{ replace:true });
    }
    else if(valuee.select==='User'){
        navigate('/user/signup',{ replace:true });
    }
  }

  return (
    <>
    <Header/>
    <div className="main-container">
        <div className='signup-container'>
            <div className="form-header">
                <h1>User Registration Form</h1>
            </div>
            <div className="form-span"></div>
            <div className="form-input-container">
            <form onSubmit={submitting}>
                <select className='select' name="select" id="admin/user" defaultValue="" onChange={assignValues} onClick={handleChange}>
                    <option className='placeHolder' hidden value="">Enter admin/user</option>
                    <option name="select" value="Admin" >Admin</option>
                    <option name="select" value="User">User</option>
                </select><br />
                <input type="email" name="email" id="email" placeholder="Enter email" value={valuee.email} onChange={assignValues}></input><br />
                <input type="text" id="u_name" name="u_name" placeholder="Enter username" value={valuee.u_name} onChange={assignValues}></input><br />
                <input type="password" name="password" id="password" placeholder="Password" value={valuee.password} onChange={assignValues}></input><br />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={valuee.confirmPassword} onChange={confPassword}></input><br />
                {valuee.password!==valuee.confirmPassword && <span className='pwd-validation'>{validation}</span>}
                <div className="form-btn">
                <button className='button' onClick={handleChange}><span>{'SignUp'} </span></button>
                </div>
            </form>
            <footer className='footer'>
                <p>Already a User? <Link to='/login' className='link'>Login</Link></p>
            </footer>
            </div>  
        </div>
    </div> 
    </>
  );
};

export default Main;