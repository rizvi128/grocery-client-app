import React, { createContext, useState } from 'react';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";
import Home from './component/Home/Home';
import AddProduct from './component/AddProduct/AddProduct';
import Login from './component/Login/Login';
import Cart from './component/Cart/Cart';

import Details from './component/Details/Details';
import { Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUserAlt, faStore, faSearch } from '@fortawesome/free-solid-svg-icons'
import PrivatRout from './component/Private/PrivatRout';
import Edit from './component/Edit/Edit';

export const UserContext = createContext()
export const CartContext = createContext()



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [userCart, setUserCart] = useState([])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={[userCart, setUserCart]}>


        <div className="container">
          <Navbar className="mb-3 navbar fixed-top mr-3 ml-3" variant="bold">
            <Navbar.Brand className="mb-2" href="/"><span className="G-style">G</span><span className="ulistan">ulistan</span></Navbar.Brand>
            <Form inline className="search">

              <FormControl type="text" placeholder="Product You Want" className="bg-light input-group-prepend" style={{ width: "500px" }} />


              <Button variant="bg-light" className="searchBtn " ><FontAwesomeIcon icon={faSearch} className="text-dark" /></Button>



            </Form>

            <Nav className="ml-auto align-items-center">
              <Link className="pr-4" style={{ color: "white" }} to="/"><FontAwesomeIcon icon={faStore} /></Link>
              <Link className="pr-4" style={{ color: "white" }} to="/addProduct">Add Product</Link>
              <Link className="pr-4" style={{ color: "white" }} to="/cart">


                <div className="cartDiv">
                  <p className="length mb-2">{userCart.length}</p>
                  <p className="mt-3"><FontAwesomeIcon icon={faCartPlus} /></p>
                </div>



              </Link>
              <Link style={{ color: "white" }} to="/login"><FontAwesomeIcon icon={faUserAlt} /></Link>
            </Nav>


          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <PrivatRout path="/cart">
              <Cart />
            </PrivatRout>

            <Route path="/product/:productId">
              <Details />
            </Route>

            <Route path="/editProduct/:id">
              <Edit/>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            
          
          </Switch>
         


        </div>

      </CartContext.Provider>
    </UserContext.Provider>

  );
}

export default App;