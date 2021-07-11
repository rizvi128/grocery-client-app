import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import "./Login.css";
import { Button } from 'react-bootstrap';
import Google from './google-brands.svg';
import fb from './facebook-f-brands.svg';
import { UserContext } from '../../App';



firebase.initializeApp(firebaseConfig);



const Login = () => {
    const[newRegisterdUser, setNewRegisterdUser]=useState(false);

    const[user, setUser]=useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:'',
        photo:'',
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
   

                                      //form submit handler


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newUser = {
            isSignedIn:true,
            name:data.name,
            email:data.email,
            password:data.password,   
        }

                                    //creating new user


        const userStateUpdate= () => {
            const newRegisteredUser= {...newUser};
            newRegisteredUser.error ='';
            newRegisteredUser.success = true;
            setUser(newRegisteredUser);  
            setLoggedInUser(newRegisteredUser);
        }

        const handleError = (er) => {
            const errorMessage = er.message;
            console.log(errorMessage)
            const newUser ={...user}
            newUser.error=errorMessage;
            setUser(newUser);

        }



   if(newRegisterdUser === true){
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then((res) => {
        userStateUpdate();
        updateUserName(user.name)
    })
    .catch((error) => {
        handleError(error);   
    });
   }

   //sign In User


   else{
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((res) => {
        userStateUpdate();
        updateUserName(user.name)

    })
    .catch((error) => {
        handleError(error);

    });
       }
    }


    

                                  //handle sign in with pop Up
    const handleSignInGoogle =()=>{
      firebase.auth().signInWithPopup(GoogleProvider)
      .then(res=>{
         const {displayName, photoURL, email} = res.user;
         const signedInUser ={
             isSignedIn: true,
             name:displayName,
             email:email,
             photo:photoURL,
         }
         setUser(signedInUser);
        })
    .catch((error) => {
          
            const errorMessage = error.message;
            const newUser ={...user}
            newUser.error=errorMessage;
            setUser(newUser);
          });
    }



                                   //handle sign Out user


    const handleSignOutGoogle = ()=>{
        firebase.auth().signOut()
        .then(res => {
            const signedOutUser ={
                isSignedIn: false,
                name:'',
                email:'',
                password:'',
                photo:''
            }
            setUser(signedOutUser); 
          })
          .catch(error => {
            console.log(error)
          });   
    }


    const updateUserName= name =>{
                    const user = firebase.auth().currentUser;
                    user.updateProfile({
                    displayName: name
                        })
                        .then(() => {
                            console.log('user name update successfully')
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                    }


    const handleSignOutFacebook=() => {
     
      }



    const handleSignInFacebook=() => {
        firebase.auth().signInWithPopup(fbProvider)
        .then((result) => {
          var user = result.user; 
          console.log('facebook user' , result.user)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    
    }


    return (
        <div id="form">

        <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          
        {
        newRegisterdUser && <input placeholder="Name" {...register("name", { required: true})}/>
        }
        <br />
        <input placeholder="Name" {...register("email", { required: true})} />
        <br />
        <input placeholder="Password" type="password" {...register("password",{minLength: 6})}/>
        <br />
       {/* <input type="submit" value={newRegisterdUser ? 'Create' : 'log in'} />    */}

<Button type="submit"  className="signButton" > {newRegisterdUser ? 'Create' : 'log in'}</Button>

        </form>
        <p onClick={()=>setNewRegisterdUser(!newRegisterdUser)} name="name" id=""> {newRegisterdUser ? "Already have an account?Log in" : "Don't have an account? Sign up"}</p>
        {/* <label htmlFor="name">Create Account</label> */}
        </div>
            {
             user.isSignedIn ? <Button variant="danger" className="signButton" onClick={handleSignOutGoogle}> <img src={Google} alt=""/> Sign Out</Button> : <Button variant="danger" className="signButton" onClick={handleSignInGoogle}><img src={Google} alt=""/> Sign In With Google</Button>
            }
            <br />
             {
             user.isSignedIn ? <Button variant="danger" className="signButton" onClick={handleSignOutFacebook}> <img src={fb} alt=""/> Sign Out</Button> : <Button variant="danger" className="signButton" onClick={handleSignInFacebook}> <img src={fb} alt=""/> Sign In With Facebook</Button>
            }

            {
                user.success && <p style={{color: 'green'}}>User {newRegisterdUser?'Created':'logged in '}successfully </p>
            }

           <p><span className="error">{user.error}</span></p>
            
        </div>
    );
};
 
export default Login;