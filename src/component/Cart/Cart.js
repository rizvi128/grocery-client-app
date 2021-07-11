import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../App';
import ReviewCart from '../ReviewCart/ReviewCart';

import './Cart.css'

const Cart = () => {
    // const [cart, setCart] = useState([])
    const[userCart, setUserCart] = useContext(CartContext)

    console.log(userCart)


    const total = userCart.reduce((total, pd) => total + parseInt(pd.price), 0)

   


    const removeProduct=(pdKey)=>{
        console.log('remove product', pdKey)
        const newCart = userCart.filter(pd =>pd._id !== pdKey)
        setUserCart(newCart)
    }
    return (


        <div className="cart-container d-flex">
            <div className="order-review col-md-8">
               {
                   userCart.map((pd) => <ReviewCart pd={pd} removeProduct={removeProduct}></ReviewCart>)
               }


            </div>
            <div className="cart-total col-md-4">
            <h3>Order Summary</h3>
            <p className="d-flex justify-content-between">Items In Cart : <span>{userCart.length} <span className="currency-symbol">&#2547;</span></span></p>

            <p className="d-flex justify-content-between"> tax + Vat : <span>{total / 10} <span className="currency-symbol">&#2547;</span></span></p>
            
            <p className="d-flex justify-content-between">Total:<span>{total + total / 10} <span className="currency-symbol">&#2547;</span></span> </p>
            </div>
           
        </div>




    );
};

export default Cart;