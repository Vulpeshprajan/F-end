import React, {useState} from 'react'
import {Form, Button, Card   } from "react-bootstrap";
import "./loginForm.style.css";

const initialState = {
  email:"",
  password: ""
}


export const LoginForm = () => {
    
  const [login, setLogin] = useState(initialState)

  const handleOnChange = e => {

    const {name, value} = e.target;

    setLogin({
      ...login,
      [name] : value,
      
    })
  }
 
  const handleOnSubmit =e =>{
    e.preventDefault()

    console.log(login);
  }
  
  
  
  
  
  return (
        <div className = "login-form ">
            <Card className="p-4 bg-light">
            <Form onSubmit = {handleOnSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <div className="sign-in mb-4 "> <i class="fas fa-lock mr-2"></i> <b>Sign In </b></div>
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    name="email"
    type="email"
    onChange={handleOnChange} 
    value={login.email}
    placeholder="Enter email" 
    required
    />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    name="password"
    type="password"
    onChange={handleOnChange} 
    value={login.password}
    placeholder="Password" 
    required
    />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<a href="/reset-password" className="text-right"> Forgot Password ? </a>

</Card>
            
        </div>
    )
}
