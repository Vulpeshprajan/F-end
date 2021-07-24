import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Headers = () => {
    return (
        <div> 
            <Navbar bg="dark" variant="dark">
 
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text> <i class="far fa-bell text-primary"></i>Notification
      </Navbar.Text>
      <Navbar.Text> <i class="fas fa-sign-out-alt text-success"></i>Log out
      </Navbar.Text>
    </Navbar.Collapse>
  
</Navbar>

        </div>
    )
}

export default Headers

