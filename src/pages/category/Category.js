import DefaultLayout from "../../componets/layout/DefaultLayout";
import React from 'react'
import {AddCategoryForm}  from "../../componets/add-category-form/AddCategoryForm";
import { ListGroup } from "react-bootstrap";


const Category = () => {
    return (
        <DefaultLayout >
           <div className="dashboard">
     <AddCategoryForm />

<hr/>

<div className="display-categories">
<ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>

</div>
           </div>

   
       
 
   </DefaultLayout>

    )
}

export default Category
