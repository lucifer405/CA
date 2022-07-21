import React, { Component } from "react";
import HotelServices from "../../services/HotelServices";
import { Card, Button, CardGroup } from 'react-bootstrap'
import TextField from "@material-ui/core/TextField";

class AdminHotelDetails extends Component{

    constructor(){
        super();
        this.state={
            hotels:[]
        }
    }

    componentDidMount(){
        HotelServices.getAllHotelDetails().then((res)=>{
            this.setState({hotels:res.data})
        })
    }

    render(){
        return(
            <>
            <div className="heading"><h2>Hotel Facilities</h2></div>
            
            <div className="search" style={{display:"flex","margin-left":"65%"}}>
            <Button variant="success" href="/admin/addHotels" style={{height:"55px"}}>Add New Facilities</Button>{' '}
                <TextField style={{width:"55%","margin-left":"40px"}}
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search Your Cafe/Restaurant"
                />
            </div>
                        {
                            this.state.hotels.map(
                                hotels =>
                                        <Card style={{"background-color":"rgb(180, 226, 211)"}}>
                                        <Card.Header>Cafe And Restaurant Facilities</Card.Header>
                                        <Card.Body>
                                            <Card.Title>COUPON CODE: {hotels.coupon_code}</Card.Title>
                                            <Card.Title>Hotel Name:   {hotels.h_name}</Card.Title>
                                            <Card.Title>Facilities</Card.Title>
                                            <Card.Text>
                                            {hotels.h_facilities}
                                            </Card.Text>
                                            <Card.Title>Terms And Conditions</Card.Title>
                                            <Card.Text>
                                            {hotels.h_terms}
                                            </Card.Text>
                                            <Card.Title>Reedemed Outlets: {hotels.h_locations}  </Card.Title>
                                            
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

export default AdminHotelDetails;