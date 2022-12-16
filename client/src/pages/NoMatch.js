import React from "react";
import Jumbotron from "../components/Jumbotron";
import './login.css';
import Pink from '../assets/images/toothBurstPink.png'
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
    const navigate = useNavigate();

  return (
    <div>
      <Jumbotron>
        <img onClick={(e) => { navigate("/")}} alt="pink tooth logo" src={Pink} style={{ cursor: 'pointer' }}></img>
        <h1 style={{ fontFamily: 'Lacquer' }}>404 Page Not Found</h1>
        
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
