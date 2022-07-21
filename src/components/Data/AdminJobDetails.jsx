import React, { Component } from "react";
import JobServices from "../../services/JobServices";
import { Card, Button, CardGroup } from 'react-bootstrap'

// import TextField from "@mui/material/TextField";
import TextField from "@material-ui/core/TextField";

class AdminJobDetails extends Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        }
    }
    componentDidMount() {
        JobServices.getAllJobs().then((res) => {
            this.setState({ jobs: res.data })
        })
    }
    render() {
        return (
            <>
            <div className="heading"><h2>Jobs List</h2></div>
            
                <div className="search" style={{display:"flex","margin-left":"65%"}}>
                <Button variant="success" href="/addJobs" style={{height:"55px"}}>Add New Jobs</Button>{' '}
                    <TextField style={{width:"55%","margin-left":"40px"}}
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search Your Jobs"
                    />
                </div>
                            {
                                this.state.jobs.map(
                                    jobs =>
                                            <Card style={{"background-color":"rgb(180, 226, 211)"}}>
                                            <Card.Header>{jobs.jobs_id}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Job ID: {jobs.job_code}</Card.Title>
                                                <Card.Title>Company Name:   {jobs.c_name}</Card.Title>
                                                <Card.Title>Job Description</Card.Title>
                                                <Card.Text>
                                                {jobs.job_desc}
                                                </Card.Text>
                                                <Card.Title>Job Details</Card.Title>
                                                <Card.Text>
                                                {jobs.job_details}
                                                </Card.Text>
                                                <Card.Title>Job Role: {jobs.job_role}  </Card.Title>
                                                <Card.Title>Job Requirements:   {jobs.job_req}</Card.Title>
                                                
                                                <Button variant="success">Apply Now</Button>{' '}
                                                <Button variant="danger">Delete Jobs</Button>{' '}
                                                <Button variant="primary" href="/editJobs">Edit Jobs</Button>{' '}
                                            </Card.Body>
                                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                            </Card>
                                )
                            }
                            </>
        );
    }
}
export default AdminJobDetails;