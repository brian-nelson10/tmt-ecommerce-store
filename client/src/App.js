import React from 'react';
// import { useEffect, useState } from "react";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Landing from './pages/Landing';
// import Loader from './components/Loader/Loader';
// import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Logo from '../src/assets/images/tmt-logo2-removebg.png'
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            {/* <Nav /> */}
            <Routes >
           
               <Route 
                path="/" 
                element={<Landing />} 
              /> 
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;


// style={{backgroundImage: `url(${Logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', transition: 'ease', ease: [0.6, 0.01, -0.05, 0.9], transitionDuration: 1.6}}