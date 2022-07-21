import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import First_Page from '../components/Landing Page/Landing_page';
import Main from '../components/Signup/main_page_signup';
import UserHome from './Home/UserHome';
import Logout from '../components/Logout/logout';
import SignupDetails from './Data/SignupDetails';
import Profile from './Profile/profile';
import Admin_Signup from '../components/Signup/admin_signup';
import Admin_Login from './Login/admin_login';
import AdminHome from './Home/AdminHome';
// import Jobs from './Jobs/jobs';
import AddJobs from './Jobs/AddJobs';
import EditJobs from './Jobs/EditJobs';
import JobDetails from './Data/JobDetails';
import AdminJobDetails from './Data/AdminJobDetails';
import AdminSignupDetails from './Data/AdminSignupDetails';
import AddPost from './Post/AddPost';
import PostDetails from './Data/PostDetails';
import AdminPostDetails from './Data/AdminPostDetails';
import AddCafeAndRes from './CafeRes/AddCafeRes';
import AdminCafeDetails from './Data/AdminCafeDetails';
import CafeDetails from './Data/CafeDetails';
import AddHotels from './Hotels/AddHotels';
import AdminHotelDetails from './Data/AdminHotelDetails';
import HotelDetails from './Data/HotelDetails';
import Contact from './ContactUS/Contact';
import MTabs from './Profile/mtabs';
import UMTabs from './Profile/umtabs';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First_Page/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/signup" element={<Main />}/>
        <Route path="/addJobs" element={<AddJobs />}/>
        <Route path="/editJobs" element={<EditJobs />}/>
          <Route path="/user/signup" element={<Main />}/>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/home" element={<UserHome/>}/>
          <Route path="/user/jobs" element={<JobDetails/>}/>
          <Route path="/user/profile" element={<Profile/>}/>
          <Route path="/user/post" element={<PostDetails/>}/>
          <Route path="/user/cafes" element={<CafeDetails/>}/>
          <Route path="/user/hotels" element={<HotelDetails/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/user/mProfile" element={<MTabs/>}/>
          <Route path="/user/umProfile" element={<UMTabs/>}/>

          <Route path="/admin/signup" element={<Admin_Signup />}/>
          <Route path="/admin/login" element={<Admin_Login/>}/>
          <Route path="/admin/home" element={<AdminHome/>}/>
          <Route path="/admin/jobs" element={<AdminJobDetails/>}/>
          <Route path="/admin/post" element={<AdminPostDetails/>}/>
          <Route path="/admin/addPost" element={<AddPost/>}/>
          <Route path="/admin/members" element={<AdminSignupDetails/>}/>
          <Route path="/admin/cafesAndRestaurants" element={<AdminCafeDetails/>}/>
          <Route path="/admin/addCafesAndRestaurants" element={<AddCafeAndRes/>}/>
          <Route path="/admin/addHotels" element={<AddHotels/>}/>
          <Route path="/admin/hotels" element={<AdminHotelDetails/>}/>

          <Route path="/logout" element={<Logout/>}/>
          <Route path="/members" element={<SignupDetails/>}>


        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
