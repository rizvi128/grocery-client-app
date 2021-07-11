import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AddProduct = () => {


  const [shopProduct, setShopProduct] = useState([])

  const { register, handleSubmit, watch, formState, errors } = useForm();
  const [imgUrl, setImgUrl] = useState(null);
  const onSubmit = data => {

    const productData = {
      name: data.name,
      price: data.price,
      imgUrl: imgUrl
    };
    const url = `http://localhost:5000/addProduct`;
    console.log(productData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(res => console.log('server side response', res))
  };


  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '666aeb5b21a24cde55b95df3fc04f111');
    imageData.append('image', event.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload', imageData)

      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }



  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setShopProduct(data))

  }, [shopProduct])
 



  const deleteItem = (id) => {
    console.log(id)

    fetch(`http://localhost:5000/delete/${id}`,{
      method: 'DELETE',
    })
      .then(res =>res.json())
      .then(result => console.log('deleted successfully'))

  }

  return (
    <div className="login">
      <div id="add-container" className="col-md-6">
        <h2 >Add Product</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Product Name</Form.Label>
            <Form.Control name="name" defaultValue="product" {...register('name')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control name="price" defaultValue="price" {...register('price')} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label >Default file input example</Form.Label>
            <Form.Control style={{ border: '.5px solid gray' }} className="rounded" type="file" />
          </Form.Group>
          <input className="btn btn-danger block" type="submit" />
        </Form>
      </div>
      <div className="col-md-6">
        <h2>Product In Stock</h2>
        {
          shopProduct && shopProduct.map(pd =>
            <li>
              <div>{pd.name}</div>
              <div className="upt-dlt-btn">

                
              {/* <Button to={"/editProduct"} variant="info">Edit</Button>  */}
              <Link to={"/editProduct/" + pd._id}> Edit </Link>
      
              <Button variant="danger" onClick={() => deleteItem(pd._id)}><FontAwesomeIcon icon={faTrashAlt}/></Button>
              </div>
              </li>
          )
        }
      </div>
    </div>
  );
};

export default AddProduct;