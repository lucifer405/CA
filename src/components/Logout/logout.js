import React,{useEffect} from 'react';
// import Button from '../../web components/buttons/Button';
// import './main_page_signup.css';
import { Alert } from 'react-bootstrap';
import './logout.css'

const Logout = () => {
  useEffect(() => {
    document.title = 'CA || LOGOUT PAGE';
  });
   return(
    <div className='logout'>
  {[
    'success'
  ].map((variant) => (
    <Alert key={variant} variant={variant}>
      You have sucessfully {variant} Logged Out{' '}
      <Alert.Link href="/home">HOME PAGE</Alert.Link>. Kindly click to redirect
    </Alert>
  ))}
</div>
   ); 
};


export default Logout;