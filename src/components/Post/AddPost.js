import React,{useEffect, useState} from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPost = () => {

  useEffect(() => {
    document.title = 'CA || POST PAGE';
  });

  const[valuee,setValue]=useState({
    post_heading:"",
    post_subject:"",
    post_desc:"",
  })

  const assignValues=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setValue({
      ...valuee,
      [name]:value
    })
  }
  let posts=[];
  const submitting=(e)=>{
    let state={
      post_heading:valuee.post_heading,
      post_subject:valuee.post_subject,
      post_desc:valuee.post_desc,
    }
    posts.push(state);
    console.log(state);
    postingPosts(state);
    localStorage.setItem('postsdata',JSON.stringify(posts));
    e.preventDefault();
  }

  const postingPosts=(data)=>{
    axios.post("http://localhost:8081/user/addPosts",data).then(
      (response)=>{
        console.log(response);
        console.log("SUCCESS");
        alert("Post Added Successfully ")
      }
    )
  }
//   let navigate = useNavigate();
//   const handleChange = (event) =>{
    
//     event.preventDefault();
//     navigate('/jobs');
//   }

  return (
    <>
      <div className="job-heading">
        <h2>ADD NEW POST</h2>
      </div>
      <Form className="job-form" onSubmit={submitting}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={{"font-weight":"bold"}}>Post Heading</Form.Label>
            <Form.Control type="text" placeholder="Enter The Post Heading" name="post_heading" value={valuee.post_heading} onChange={assignValues}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label style={{"font-weight":"bold"}}>Post Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter The Post Subject" name="post_subject"  value={valuee.post_subject} onChange={assignValues}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={{"font-weight":"bold"}}>Post Description</Form.Label>
          <Form.Control name="post_desc" value={valuee.post_desc} onChange={assignValues} placeholder="Enter Your Post " style={{height:"100px"}}/>
        </Form.Group>

        <Button className="job-btn" variant="success" type="submit" onClick={submitting}>
          Post
        </Button>
      </Form>
    </>
  )
}

export default AddPost;