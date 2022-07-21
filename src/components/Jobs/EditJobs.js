import React,{useEffect} from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import './jobs.css';
import { useNavigate } from "react-router-dom";

const EditJobs = () => {
  useEffect(() => {
    document.title = 'CA || JOB PAGE';
  });
  let navigate = useNavigate();
  const handleChange = (event) =>{
    
    event.preventDefault();
    navigate('/jobs');
  }

  return (
    <>
      <div className="job-heading">
        <h2>JOBS EDIT PAGE</h2>
      </div>
      <Form className="job-form">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{"font-weight":"bold"}}>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter The Company Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label style={{"font-weight":"bold"}}>Job Role</Form.Label>
            <Form.Control type="text" placeholder="Enter The Job Role" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{"font-weight":"bold"}}>Job Description</Form.Label>
          <Form.Control placeholder="Enter Your Job Description" style={{height:"100px"}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label style={{"font-weight":"bold"}}>Job Details</Form.Label>
          <Form.Control placeholder="Enter Job Details" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label style={{"font-weight":"bold"}}>Job Requirements</Form.Label>
            <Form.Control type="text-area" placeholder="Enter Job Requirements"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label style={{"font-weight":"bold"}}>Job ID</Form.Label>
            <Form.Control placeholder="Enter Job ID"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label style={{"font-weight":"bold"}}>Job Location</Form.Label>
            <Form.Control placeholder="Enter Job Location"/>
          </Form.Group>
        </Row>

        <Button className="job-btn" variant="success" type="submit" onClick={handleChange}>
          Submit and Edit
        </Button>
      </Form>
    </>
  )
}

export default EditJobs;