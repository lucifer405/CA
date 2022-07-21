import React, { Component } from "react";
import SignupServices from "../../services/SignupServices";
import { Card, Button, CardGroup } from 'react-bootstrap'
import './data.css';

class SignupDetails extends Component {
    constructor() {
        super();
        this.state = {
            signups: []
        }
    }
    componentDidMount() {
        SignupServices.getAllSignupDetails().then((res) => {
            this.setState({ signups: res.data })
        })
    }
    render() {
        return (
            <>
            <div className="heading"><h2>Members List</h2></div>
                            {
                                this.state.signups.map(
                                    signups =>
                                        <Card border="success" style={{ width: '25rem' }}>
                                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                            <Card.Body>
                                                <Card.Title>UserName:- {signups.u_name}</Card.Title>
                                                <Card.Text>Email-Id:- {signups.email}
                                                </Card.Text>
                                                {/* <Card.Text>Password:- {signups.password}
                                                </Card.Text>
                                                <Card.Text>Confirm Password:- {signups.confirmPassword}
                                                </Card.Text> */}
                                                {/* <Card.Text>Mobile Number:- {signups.mobile} */}
                                                {/* </Card.Text> */}
                                                <Button variant="success">Go To Profile</Button>
                                            </Card.Body>
                                        </Card>
                                )
                            }
                            </>
        );
    }
}
export default SignupDetails;