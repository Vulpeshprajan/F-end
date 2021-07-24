import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { Col} from 'react-bootstrap'
import {Form } from 'react-bootstrap'



export const AddCategoryForm = () => {
    return (
        <div className="add-category-form d-flex justify-content-center mt-4" >

 <Form>
  <Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>

  
       </Row>
       
  <Button  variant="primary" type="submit">
    Submit
  </Button>

  
  
</Form>    

        </div>
       
    )
}
