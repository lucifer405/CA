import React from "react";
import { useState, useMemo } from 'react';
import { Tab, Tabs, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { Link, useNavigate } from "react-router-dom";
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import './tabs.css'

const UMTabs =()=>{
    const [key, setKey] = useState('home');
    const [value, onChange] = useState(new Date());

    const [valuee, setValue] = useState({
        fname: "",
        lname: "",
        org: "",
        dob: "",
        mStatus: "",
        gender: "",
        country: "",
        spouse: "",
        income: "",
        aadhar: "",
        pincode: "",
        city: "",
        state: "",
        address: "",
        nationality: "",
        language: "",
    })

    const assignValues = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue({
            ...valuee,
            [name]: value
        })
    }
    // const postData = (data) => {
    //     axios.post("http://localhost:8081/user/profile", data).then(
    //         (response) => {
    //             console.log(response);
    //             console.log("success");
    //         }
    //     );
    // };

    const handleChange = (e) => {
        if (valuee.mStatus === 'married') {
            console.log("MARRIED")
              navigate('/user/mProfile',{replace:true});
        } else if (valuee.mStatus === 'Unmarried') {
            console.log("UNMARRIED")
            navigate('/user/umProfile', { replace: true });
        }
    }
    let details = [];

    let navigate = useNavigate();
    const submitting = (e) => {
        let state = {
            fname: valuee.fname,
            lname: valuee.lname,
            org: valuee.org,
            dob: valuee.dob,
            mStatus: valuee.mStatus,
            gender: valuee.gender,
            country: valuee.country,
            nationality: valuee.nationality,
            mobileNumber: valuee.mobileNumber,
            spouse: valuee.spouse,
            income: valuee.income,
            aadhar: valuee.aadhar,
            pincode: valuee.pincode,
            state: valuee.state,
            city: valuee.city,
            address: valuee.address,
            language: valuee.language,
        }
        details.push(state);
        console.log(state);
        localStorage.setItem('userdetails', JSON.stringify(details));
        // postData(state);
        e.preventDefault();
        // navigate("/pdetails")
    }

    return(
        <>
        <div className="header_navbar">
        <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="/" style={{color:"white"}}>Connecting Alumnus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/user/home" style={{color:"white"}}>Home</Nav.Link>
            <NavDropdown title="Facilities" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/cafes">Cafe and Restaurants</NavDropdown.Item>
              <NavDropdown.Item href="/user/hotels">Hotels</NavDropdown.Item>
              <NavDropdown.Item href="/travels">Travels and Tours</NavDropdown.Item>
              <NavDropdown.Item href="/user/jobs">Jobs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/moreInfo">More...</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/members" style={{color:"white"}}>Members</Nav.Link>
            <Nav.Link href="/gallery" style={{color:"white"}}>Gallery</Nav.Link>
            <Nav.Link href="/user/post" style={{color:"white"}}>Posts</Nav.Link>
            <Nav.Link href="/about" style={{color:"white"}}>About Us</Nav.Link>
            <Nav.Link href="/contact" style={{color:"white"}}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
          <Navbar.Brand style={{color:"white"}}> Welcome </Navbar.Brand>
            <NavDropdown title="More Info" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home" title="Basic Details" className="p-4" onSubmit={submitting}>
                <div className="row mt-0">
                    
                
                    <div className="col-md-6"><label className="labels">FirstName</label><input type="text" id="fname" name="fname" className="form-control" placeholder="Enter Your First name" value={valuee.fname} onChange={assignValues} /></div>
                    <div className="col-md-6"><label className="labels">Lastname</label><input type="text" id="lname" name="lname" className="form-control" value={valuee.lname} onChange={assignValues} placeholder="Enter Your Lastname" /></div>
                    {/* <div className="col-md-12 py-2"><label className="labels">Email ID</label><input type="text" id="emailId" name="emailId" className="form-control" placeholder="Enter email id" value={valuee.emailId} onChange={assignValues} /></div> */}
                    <div className="py-3">
                        <Form.Select aria-label="Default select example" className="py-2" name="language" size="sm" onChange={assignValues} value={valuee.language}>
                            <option>Preferred Languages</option>
                            <option name="select" value="English">English</option>
                            <option name="select" value="Hindi">Hindi</option>
                            <option name="select" value="Bengali">Bengali</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="row mt-0">
                    {/* Techno india group or Others select option */}
                    {/* grad yop 
                    grad clg
                    post grad yop
                    post grad clg */}
                    <div className="col-md-8 "><label className="labels">Current Organization</label><input type="text" name="org" id="org" className="form-control" placeholder="enter organization" value={valuee.org} onChange={assignValues} /></div>
                    {/* working Area
                    current designation
                    speialized domain */}
                    <div className="col-md-8 py-2"><label className="labels">Date of Birth</label></div>
                    <DatePicker id="date" name="dob" onChange={onChange} value={valuee.dob} />
                    <div className="col-md-8 py-3">
                        {/* marriage anniversary */}
                        {/* <Form.Select aria-label="Default select example" name="mStatus" onChange={assignValues} onClick={handleChange}>
                            <option>Relationship Status</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                        </Form.Select> */}
                    </div>
                    <div className="p-2">
                        <Form.Select aria-label="Default select example" name="gender" onChange={assignValues}>
                            <option>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </Form.Select>
                    </div>
                    <div className="p-2">
                        <Form.Select aria-label="Default select example" name="country" onChange={assignValues}>
                            <option>Select Country</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, Democratic Republic of the Congo</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote D'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curacao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and Mcdonald Islands</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="XK">Kosovo</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jamahiriya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthelemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="CS">Serbia and Montenegro</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.s.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </Form.Select>
                    </div>
                    <div className="col-md-12"><label className="labels">Nationality</label><input type="text" name="nationality" id="nationality" className="form-control" placeholder="enter nationality" value={valuee.nationality} onChange={assignValues} /></div>
                    <div className="col-md-12 p-2"><label className="labels">Contact Number</label><input type="text" name="mobileNumber" id="mobileNumber" className="form-control" placeholder="enter number" value={valuee.mobileNumber} onChange={assignValues} /></div>
                    <div className="col-md-12 p-2"><label className="labels">Monthly Income</label><input type="text" name="income" id="income" className="form-control" placeholder="(in numbers)" value={valuee.income} onChange={assignValues} /></div>
                    <div className="col-md-12 p-2"><label className="labels">AADHAR Number</label><input type="text" name="aadhar" id="aadhar" className="form-control" placeholder="enter number" value={valuee.aadhar} onChange={assignValues} /></div>
                </div>
                <br></br>
                <div className="row mt-0 py-2" required>
                <div className="col-md-6"><label className="labels"><b>Current Address</b></label><input type="text" name="address" id="address" className="form-control" value={valuee.address} onChange={assignValues} placeholder="" /></div>
                <div className="col-md-6"><label className="labels">State</label><input type="text" className="form-control" placeholder="" value={valuee.state} name="state" id="state" onChange={assignValues} /></div>
                <div className="col-md-6"><label className="labels">Street</label><input type="text" className="form-control" placeholder="" value={valuee.state} name="state" id="state" onChange={assignValues} /></div>
                <div className="col-md-6"><label className="labels">City</label><input type="text" className="form-control" value={valuee.city} onChange={assignValues} name="city" id="city" placeholder="" /></div>
                <div className="col-md-6"><label className="labels">Landmark</label><input type="text" className="form-control" value={valuee.city} onChange={assignValues} name="city" id="city" placeholder="" /></div>
                <div className="col-md-6"><label className="labels">Pincode</label><input type="text" name="pincode" id="pincode" className="form-control" value={valuee.pincode} onChange={assignValues} placeholder="" /></div>
                </div>
                <br></br>
                <div className="row mt-0 py-2" required>
                <div className="col-md-6"><label className="labels"><b>Permanent Address</b></label><input type="text" name="address" id="address" className="form-control" value={valuee.address} onChange={assignValues} placeholder="" /></div>
                <div className="col-md-6"><label className="labels">State</label><input type="text" className="form-control" placeholder="" value={valuee.state} name="state" id="state" onChange={assignValues} /></div>
                <div className="col-md-6"><label className="labels">Street</label><input type="text" className="form-control" placeholder="" value={valuee.state} name="state" id="state" onChange={assignValues} /></div>
                <div className="col-md-6"><label className="labels">City</label><input type="text" className="form-control" value={valuee.city} onChange={assignValues} name="city" id="city" placeholder="" /></div>
                <div className="col-md-6"><label className="labels">Landmark</label><input type="text" className="form-control" value={valuee.city} onChange={assignValues} name="city" id="city" placeholder="" /></div>
                <div className="col-md-6"><label className="labels">Pincode</label><input type="text" name="pincode" id="pincode" className="form-control" value={valuee.pincode} onChange={assignValues} placeholder="" /></div>
                </div>
                <div><h5>Bank Details</h5></div>
                <div className="row mt-0 py-2" required>
                <div className="col-md-6"><label className="labels">Bank Name</label><input type="text" name="address" id="address" className="form-control" value={valuee.address} onChange={assignValues} placeholder="" required/></div>
                <div className="col-md-6"><label className="labels">Branch Name</label><input type="text" className="form-control" placeholder="" value={valuee.state} name="state" id="state" onChange={assignValues} required/></div>
                <div className="col-md-6"><label className="labels">Branch Code</label><input type="text" className="form-control" placeholder="" value={valuee.state} name="state" id="state" onChange={assignValues} required/></div>
                <div className="col-md-6"><label className="labels">Account Number</label><input type="text" className="form-control" value={valuee.city} onChange={assignValues} name="city" id="city" placeholder="" required/></div>
                <div className="col-md-6"><label className="labels">IFSC</label><input type="text" className="form-control" value={valuee.city} onChange={assignValues} name="city" id="city" placeholder="" required/></div>
                </div>
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" required />
                        <label class="form-check-label " for="defaultCheck1" >
                            I have read and agreed to Terms and Conditons.
                        </label>
                    </div>
                    <Button className="col-md-2" variant="primary" type="submit" onClick={submitting}>Submit</Button>
                </div>
            </Tab>
        </Tabs>
        </>
    )
}

export default UMTabs;