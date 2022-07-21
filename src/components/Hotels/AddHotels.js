import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
// import './cafe.css';

const AddHotels = () => {

  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const[valuee,setValue]=useState({
    h_name:"",
    h_facilities:"",
    h_terms:"",
    h_locations:"",
    coupon_code:"",
  })

  const assignValues=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setValue({
      ...valuee,
      [name]:value
    })
  }
  let hotels=[];
  const submitting=(e)=>{
    let state={
    h_name:valuee.h_name,
    h_facilities:valuee.h_facilities,
    h_terms:valuee.h_terms,
    h_locations:valuee.h_locations,
    coupon_code:valuee.coupon_code,
    }
    hotels.push(state);
    console.log(state);
    postHotelsData(state);
    localStorage.setItem('hotelsdata',JSON.stringify(hotels));
    e.preventDefault();
  }

  const postHotelsData=(data)=>{
    axios.post("http://localhost:8081/user/addHotels",data).then(
      (response)=>{
        console.log(response);
        console.log("SUCCESS");
      }
    )
  }

  return (
    <>

      <div className="res-heading">
        <h2>Hotel Facilities</h2>
      </div>
      <Form className="res-form" onSubmit={submitting}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{ "font-weight": "bold" }}>Hotel Name</Form.Label>
            <Form.Control type="text" placeholder="Enter The Hotel Name" name="h_name" onChange={assignValues} value={valuee.h_name}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label style={{ "font-weight": "bold" }}>Coupon Facilities</Form.Label>
            <Form.Control type="text" placeholder="Enter The Coupon Facilities" name="h_facilities" onChange={assignValues} value={valuee.h_facilities}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{ "font-weight": "bold" }}>Terms and Conditions</Form.Label>
          <Form.Control name="h_terms" placeholder="Terms and Conditions" style={{ height: "100px" }} onChange={assignValues} value={valuee.h_terms}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label style={{ "font-weight": "bold" }}>Hotel Locations</Form.Label>
          <Form.Control name="h_locations" placeholder="Enter Outlets" onChange={assignValues} value={valuee.h_locations}/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label style={{ "font-weight": "bold" }}>Coupon Code</Form.Label>
            <Form.Control name="coupon_code" placeholder="Enter Coupon Code" onChange={assignValues} value={valuee.coupon_code}/>
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label style={{ "font-weight": "bold" }}>Upload Image</Form.Label>
          <Form.Control name="upload_img" type="file" placeholder="Upload Images" onChange={handleChange} />
        </Form.Group> */}

        <Button className="post-btn" variant="success" type="submit">
          Post It
        </Button>
      </Form>
    </>
  )
}

export default AddHotels;