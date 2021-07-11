import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../App';
import Product from '../Product/Product';
import "./Home.css";
const Home = () => {
    const [products, setProducts] = useState([])

    // const [cart, setCart] = useState([])



    const[userCart, setUserCart] = useContext(CartContext)


    

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))

    }, [])

    const addProductInCart = (product) => {
        console.log('i am working', product)
        const newCart = [...userCart, product]
        // setCart(newCart);
        setUserCart(newCart)
        // console.log(cart)
    }


    // const total = cart.reduce(( total,pd ) =>total + parseInt(pd.price),0)
    return (

        <div className="grid">
            {
                products.map(product => <Product product={product} addProductInCart={addProductInCart}></Product>)
            }

        </div>
    );
};

export default Home;