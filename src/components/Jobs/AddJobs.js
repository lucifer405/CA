import React,{useEffect, useState} from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import './jobs.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddJobs = () => {

  useEffect(() => {
    document.title = 'CA || JOB PAGE';
  });

  const[valuee,setValue]=useState({
    c_name:"",
    job_role:"",
    job_desc:"",
    job_details:"",
    job_req:"",
    job_code:"",
    job_location:"",
  })

  const assignValues=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setValue({
      ...valuee,
      [name]:value
    })
  }
  let jobs=[];
  const submitting=(e)=>{
    let state={
      c_name:valuee.c_name,
      job_role:valuee.job_role,
      job_desc:valuee.job_desc,
      job_details:valuee.job_details,
      job_req:valuee.job_req,
      job_code:valuee.job_code,
      job_location:valuee.job_location
    }
    jobs.push(state);
    console.log(state);
    postJobsData(state);
    localStorage.setItem('jobsdata',JSON.stringify(jobs));
    e.preventDefault();
  }

  const postJobsData=(data)=>{
    axios.post("http://localhost:8081/user/addJobs",data).then(
      (response)=>{
        console.log(response);
        console.log("SUCCESS");
      }
    )
  }
  let navigate = useNavigate();
  const handleChange = (event) =>{
    
    event.preventDefault();
    navigate('/jobs');
  }

  return (
    <>
      <div className="job-heading">
        <h2>JOBS ENTRY</h2>
      </div>
      <Form className="job-form" onSubmit={submitting}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{"font-weight":"bold"}}>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter The Company Name" name="c_name" value={valuee.c_name} onChange={assignValues}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label style={{"font-weight":"bold"}}>Job Role</Form.Label>
            <Form.Control type="text" placeholder="Enter The Job Role" name="job_role"  value={valuee.job_role} onChange={assignValues}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{"font-weight":"bold"}}>Job Description</Form.Label>
          <Form.Control name="job_desc" value={valuee.job_desc} onChange={assignValues} placeholder="Enter Your Job Description" style={{height:"100px"}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label style={{"font-weight":"bold"}}>Job Details</Form.Label>
          <Form.Control name="job_details" value={valuee.job_details} onChange={assignValues} placeholder="Enter Job Details" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label style={{"font-weight":"bold"}}>Job Requirements</Form.Label>
            <Form.Control type="text-area" name="job_req" value={valuee.job_req} onChange={assignValues} placeholder="Enter Job Requirements"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label style={{"font-weight":"bold"}}>Job ID</Form.Label>
            <Form.Control name="job_code" value={valuee.job_code} onChange={assignValues} placeholder="Enter Job ID"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label style={{"font-weight":"bold"}}>Job Location</Form.Label>
            <Form.Control name="job_location" value={valuee.job_location} onChange={assignValues} placeholder="Enter Job Location"/>
          </Form.Group>
        </Row>

        <Button className="job-btn" variant="success" type="submit" onClick={submitting}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AddJobs;