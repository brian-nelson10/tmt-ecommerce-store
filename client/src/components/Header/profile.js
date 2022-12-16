import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import Pink from '../../assets/icons/cuteSkull.png'
import './profile.css';


export default function Profile() {
    const navigate = useNavigate();

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

return (

    <><nav class="social-menu">
        <input type="checkbox" href="#" class="social-menu-open" name="social-menu-open" id="social-menu-open" />
        <label class="social-menu-open-button" for="social-menu-open" >
        <img alt="skull with bow" src={Pink} class="logo"/>
            
        </label>
        {Auth.loggedIn() ? (
            <><div onClick={(e) => navigate("/orderHistory")} class="menuItem">Orders</div>
            <div onClick={logout} class="menuItem">Logout</div></>
        ) : (
        <><div onClick={(e) => navigate("/login")} class="menuItem"> Login </div>
        <div onClick={(e) => navigate("/signup")} class="menuItem"> SignUp </div></>
        )}
    </nav><svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <filter id="shadowed-goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" />
                <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.2" result="shadow" />
                <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                <feBlend in2="shadow" in="goo" result="goo" />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="goo" />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
        </svg></>

);
};