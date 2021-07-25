import React, {useState} from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'



const initialState ={
  name:"",
  parentCat:0
}

export const AddCategoryForm = () => {



const [category, setCategory] = useState(initialState)

const handleOnChange = e => {
    
  const {name,value} = e.target 

  setCategory({
    ...category,
  [name] : value,
  })

}



const handleOnSubmit = e => {
e.preventDefault()

// we are finding the way to call our server


}
    return (
      
      <div className="add-category-form mt-4 " >
 <Form onSubmit = {handleOnSubmit}>
  <Row >
    
<Col xs={3}>
    <Form.Group as={Col } controlId="formGridEmail">
      <Form.Label>New Category</Form.Label>
      <Form.Control 
      name="name"
      type="text" 
      value={category.name}
       onChange = {handleOnChange}
       placeholder="Enter new category" />
    </Form.Group>
    </Col>
  <Col xs={2}>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label> Select parent Category</Form.Label>
      <Form.Select 
      name="parentCat"
      defaultValue={category.parentCat}
      onChange = {handleOnChange}

      
      >
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
    </Col>


  
       </Row>
       
  <Button   variant="primary mt-4 " type="submit">
    Submit
  </Button>

  
  
</Form>    

        </div>
        
       
    )
}
