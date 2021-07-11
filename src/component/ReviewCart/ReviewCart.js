import React from 'react';
import { Button } from 'react-bootstrap';
import './ReviewCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewCart = (props) => {
    const{name,imgUrl, price, _id} =props.pd
    return (
        <div className="reviewCart">
            <div className="image col-md-4">
                <img src={imgUrl} alt="" />
            </div>
           <div className="cartItem col-md-8">
               <p className="name-Price"><span>Product Name : </span>{name}</p>
               <p className="details-P"><span>Product Details: </span>lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, eaque.</p>
               <p className="name-Price"><span>Product Price:</span> {price} টাকা</p>
               <Button className="removeBtn" variant="danger" onClick={() =>props.removeProduct(_id)}><FontAwesomeIcon icon={faTrashAlt}/></Button>
           </div>
        </div>
    );
};

export default ReviewCart;