import React from 'react';

import "./Product.css";
import { Button } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { imgUrl, name, price, _id } = props.product;

    return (

        <div className="grid-container ">

            <Card className="card" style={{ width: '12rem', height: '320px'}}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title><Link style={{color:"#000"}} to={"/product/" + _id}>{name}</Link></Card.Title>
                    <Card.Text>
                        {price} টাকা
                    </Card.Text>
                    <Button onClick={() => props.addProductInCart(props.product)} variant="danger"><FontAwesomeIcon icon={faShoppingCart}/> Buy Now</Button>
                </Card.Body>
            </Card>
           





            {/* <img src={imgUrl} alt=""/>
            
            <p><Link to={"/product/" +_id}>{name}</Link></p>
           
            {price}<span className="currency-symbol">&#2547;</span>
            <button className="pdBtn" onClick={() =>props.addProductInCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button> */}

        </div>

    );
};

export default Product;