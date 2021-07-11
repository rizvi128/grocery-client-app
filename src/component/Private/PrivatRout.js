import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivatRout = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    return (
      
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />



    );
};

export default PrivatRout;