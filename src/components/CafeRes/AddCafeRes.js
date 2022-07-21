import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import './cafe.css';

const AddCafeAndRes = () => {

  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const[valuee,setValue]=useState({
    res_name:"",
    res_cp_facilities:"",
    res_terms:"",
    res_outlets:"",
    coupon_code:"",
    upload_img:"",
  })

  const assignValues=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setValue({
      ...valuee,
      [name]:value
    })
  }
  let cafes=[];
  const submitting=(e)=>{
    let state={
    res_name:valuee.res_name,
    res_cp_facilities:valuee.res_cp_facilities,
    res_terms:valuee.res_terms,
    res_outlets:valuee.res_outlets,
    coupon_code:valuee.coupon_code,
    upload_img:valuee.upload_img,
    }
    cafes.push(state);
    console.log(state);
    postCafesData(state);
    localStorage.setItem('cafesdata',JSON.stringify(cafes));
    e.preventDefault();
  }

  const postCafesData=(data)=>{
    axios.post("http://localhost:8081/user/addCafe",data).then(
      (response)=>{
        console.log(response);
        console.log("SUCCESS");
      }
    )
  }

  return (
    <>

      <div className="res-heading">
        <h2>Cafe And Restaurant Facilities</h2>
      </div>
      <Form className="res-form" onSubmit={submitting}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{ "font-weight": "bold" }}>Restaurant/Cafe Name</Form.Label>
            <Form.Control type="text" placeholder="Enter The Restaurant/Cafe Name" name="res_name" onChange={assignValues} value={valuee.res_name}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label style={{ "font-weight": "bold" }}>Coupon Facilities</Form.Label>
            <Form.Control type="text" placeholder="Enter The Coupon Facilities" name="res_cp_facilities" onChange={assignValues} value={valuee.res_cp_facilities}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{ "font-weight": "bold" }}>Terms and Conditions</Form.Label>
          <Form.Control name="res_terms" placeholder="Terms and Conditions" style={{ height: "100px" }} onChange={assignValues} value={valuee.res_terms}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label style={{ "font-weight": "bold" }}>Outlets</Form.Label>
          <Form.Control name="res_outlets" placeholder="Enter Outlets" onChange={assignValues} value={valuee.res_outlets}/>
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

export default AddCafeAndRes;