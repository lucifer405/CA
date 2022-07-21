import { useState } from 'react';
import './login.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Admin_Login() {

// States for registration
const [email, setEmail] = useState('');
const [pass, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (email === '' || pass === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1> logged in successfully!!</h1>
</div>
);
};
const[valuee,setValue]=useState({
    select:"",
    email:"",
    u_name:"",
    mobile:"",
    pass:"",
    confirmPassword:"",
})
let navigate = useNavigate();
  const handleChange = (event) =>{
    
    event.preventDefault();

    if (email.trim().length !== 0 && pass.trim().length !==0) {
    console.log('input value is NOT empty');
    navigate('/admin/home');
    }
    else {
    console.log('input value is empty');
    alert("Please Fill All The Fields");
    }
  }

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
    <>
    <Header/>
{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>
<div className="main-container">
        <div className='signup-container'>
            <div className="form-header">
                <h1>Admin Sign in</h1>
            </div>
            <div className="form-span"></div>
            <div className="form-input-container">

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required={true}></input><br />
                <input type="password" name="pass" id="pass" placeholder="Password" onChange={e => setPassword(e.target.value)} required={true}></input><br />

                <div className="form-btn">
                <button className='button' onClick={handleChange}><span>{'login'} </span></button>
                </div>
            </form>
            <footer className='footer'>
                <p>Not a admin? <Link to='/admin/signup' className='link'>Sign up</Link></p>
            </footer>
            </div>  
        </div>
    </div> 
</>
);
}