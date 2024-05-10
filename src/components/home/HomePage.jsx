import React from "react";
import {  NavLink } from "react-router-dom";




function HomePage () {
    return (
        <>
            <h1>mccabe-test</h1>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/areasofpractice">Areas Of Practice</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/location">Location</NavLink>
        </>
    )
}

export default HomePage