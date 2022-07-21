import React, { Component } from "react";
import CafeServices from "../../services/CafeServices";
import { Card, Button, CardGroup } from 'react-bootstrap'
import TextField from "@material-ui/core/TextField";

class AdminCafeDetails extends Component{

    constructor(){
        super();
        this.state={
            cafes:[]
        }
    }

    componentDidMount(){
        CafeServices.getAllCafeDetails().then((res)=>{
            this.setState({cafes:res.data})
        })
    }

    render(){
        return(
            <>
            <div className="heading"><h2>Cafe And Restaurants Facilities</h2></div>
            
            <div className="search" style={{display:"flex","margin-left":"65%"}}>
            <Button variant="success" href="/admin/addCafesAndRestaurants" style={{height:"55px"}}>Add New Facilities</Button>{' '}
                <TextField style={{width:"55%","margin-left":"40px"}}
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search Your Cafe/Restaurant"
                />
            </div>
                        {
                            this.state.cafes.map(
                                cafes =>
                                        <Card style={{"background-color":"rgb(180, 226, 211)"}}>
                                        <Card.Header>Cafe And Restaurant Facilities : {cafes.res_no}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>COUPON CODE: {cafes.coupon_code}</Card.Title>
                                            <Card.Title>Restaurant/Cafe Name:   {cafes.res_name}</Card.Title>
                                            <Card.Title>Facilities</Card.Title>
                                            <Card.Text>
                                            {cafes.res_cp_facilities}
                                            </Card.Text>
                                            <Card.Title>Terms And Conditions</Card.Title>
                                            <Card.Text>
                                            {cafes.res_terms}
                                            </Card.Text>
                                            <Card.Title>Reedemed Outlets: {cafes.res_outlets}  </Card.Title>
                                            
                                            <Button variant="success">Grab It Now</Button>{' '}
                                            <Button variant="danger">Delete Facility</Button>{' '}
                                            <Button variant="primary">Edit Facility</Button>{' '}
                                        </Card.Body>
                                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                        </Card>
                            )
                        }
            </>
        )
    }
}

export default AdminCafeDetails;