import React, { useState } from "react";
// import React, { Component } from "react";
// import { FiLogOut } from "react-icons/fi";
import { AiTwotoneHome } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
import axios from "axios"
import {url} from "../url"
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Form} from 'react-bootstrap';
// import { ReactCodeInput } from 'CodeInputFields'
import ".././App.css"
import logo from "./heydgreen.jpg"

<style>

</style>

function NavbarMenu(props) {
  // class NavbarMenu extends Component{
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginDetail,setLoginDetail]=useState({mobile:"",password:""})


const handleLogin=(e)=>{
console.log(loginDetail)
setLoginDetail({...loginDetail,[e.target.name]:e.target.value})
}

const submitHandler=(e)=>{
  e.preventDefault();
axios.post(url+'users/login',loginDetail)
.then((res)=>{console.log(res)
  if(res.data.success == 1){
    console.log('logged in')
    //  window.location.href="https://muadmin.heydgreen.com";
  }
})
.catch(err => console.log(err))
}
// render(){
  return (
    <div>
      <Navbar
      style={{zIndex:"999"}}
        collapseOnSelect
        expand="lg"
        bg="light"
        className="shadow bg-white p-1 mb-1 "
      >
        <div className="container-fluid">
          <Navbar.Brand href="/"><img src={logo} height="40px" alt="logo"/></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="link mr-2" to={"/"}>
                {/* <AiTwotoneHome color="#FFC91E" siz="15" /> */}
                Home
              </Link>
              <Link className="link mr-2" to={"/subscribe"}>
                {/* <AiTwotoneHome color="#FFC91E" siz="15" /> */}
                Subscribe
              </Link>
              <Link to={"/myaccount/"} className="link mr-2">
                Account
              </Link>
            </Nav>
            <Nav>
              <Link className="link mr-2 pr-3" to={`/cart/`}>
                {/* <FiShoppingCart color="#FFC91E" siz="15" /> */}
                Cart
              </Link>
              <Link className="link" onClick={handleShow}>
                {/* <FiUser color="#FFC91E" siz="15" /> */}
                Login
              </Link>
              <Modal
                // style={{zIndex:"9999",width:"unset !important",maxWidth:"unset !important"}}
                dialogClassName="my-modal phoneModal"
                aria-labelledby="example-custom-modal-styling-title"
                show={show}
                onHide={handleClose}
              >

                <Modal.Body>
<Tabs>
    <TabList className="row">
      <Tab className="col tab">Login</Tab>
      <Tab className="col tab">Sign Up</Tab>
    </TabList> 
<hr/>
    <TabPanel>
<form onSubmit={submitHandler}>
            <div className="form-row">
              <div className="col-md-12 mb">
                <input
                className="input "
                    national
                    countryCallingCodeEditable={false}
                    defaultCountry="IN"
                    name="mobile"
                    value={loginDetail.mobile}
                    onChange={handleLogin}
                    placeholder="Enter your number"
                  />
              </div>
              <div className="col-md-12">
              <input
                  className="input"
                  type="password"
                  name="password"
                  value={loginDetail.password}
                  onChange={handleLogin}
                  placeholder="Password"
                />
              </div>
              <div className="col-md-12 align-btn ">
              <Button
              type="submit"
                className=" btn-sm btn-block "
              >Login
              </Button>
              </div>
            </div>
          </form>

    </TabPanel>
    <TabPanel>
    <form>
            <div className="form-row">
              <div className="col-md-12 mb">
                <input
                className="input phnInput"
                    national
                    countryCallingCodeEditable={false}
                    defaultCountry="IN"
                    // value={v}
                    // onChange={setValue}
                    placeholder="Enter your number"
                  />
              </div>
              <div className="col-md-12">
              <input
                  className="input"
                  type="text"
                  name="otp"
                  placeholder="OTP"
                />
              </div>
              <div className="col-md-12">
              <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="col-md-12">
              <input
                  className="input"
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                />
              </div>
              <Form.Group className="col-md-12 align-btn">
              <Button
              type="submit"
                className=" btn-sm btn-block "
                // onClick={result.onDeleteClick}
              >Sign Up
              </Button>
              </Form.Group>
            </div>
          </form>
    </TabPanel>
  </Tabs>
                      </Modal.Body>
              </Modal>
              
            </Nav>
            
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
// }

export default NavbarMenu;
