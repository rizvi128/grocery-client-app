
import { Button } from 'bootstrap';
import React, {  useEffect } from 'react';
import { useState } from 'react';

import { useParams } from 'react-router-dom';
// import { CartContext } from '../../App';


import './Details.css'



const Details = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState([])
    // const[userCart, setUserCart] = useContext(CartContext)
   



    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                setProduct(data)

            })

    }, []);





    const productDetails = product.find(pd => pd._id === productId)





    // const addProductInCart = (product) => {
    //     console.log('i am working', product)
    //     const newCart = [...userCart, product]
    //     // setCart(newCart);
    //     setUserCart(newCart)
    //     // console.log(cart)
    // }



return (
    <div className="pdDetails">
        <div className="image col-md-6">
            <img src={productDetails && productDetails.imgUrl} alt="" />
        </div>
        <div className="details col-md-6">
            <h1>{productDetails && productDetails.name}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius blanditiis fugiat, cumque nisi ducimus rem voluptas sequi! Neque tempore temporibus nam asperiores placeat sint sunt est harum cupiditate esse? Mollitia.</p>
            <h2> Price : {productDetails && productDetails.price} টাকা</h2>
            {/* <Button variant="success" onClick={() =>addProductInCart()}>Buy now</Button> */}
        </div>

    </div>
);
};

export default Details;
