import React from "react";
import {  NavLink } from "react-router-dom";




function HomePage () {
    return (
        <div id="page">
            <div id='header'>
                <div id="name and logo" style={{display: "flex", width: 'auto' , border: "1px solid black" , justifyContent: "space-evenly"}}>
                        <h1>mccabe test home page header</h1>
                </div>
                <div id="link menu" style={{display: 'flex' , border: '1px solid black', justifyContent: 'space-evenly'}}>
                    {/* <NavLink to="/home">Home</NavLink> */}
                    <div style={{display: 'flex' , width:'20%' , border: '1px solid black'}}>
                        <p>Call *number* for a free consultation</p>
                    </div>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/areasofpractice">Areas Of Practice</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/locationspot">Location</NavLink>
                </div>
            </div>
            <div id='spacer' style={{width: 'auto' , height: '50px' , border: '1px solid black'}}></div> 
            {/* please use the div ability to leave gaps between other dives instead of harcoding empty spaces */}
            <div id="mission statement" style={{width: 'auto' , height: '150px' , border: '1px solid black'}}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam, fuga quo sunt blanditiis illo, velit labore mollitia veniam nobis consequatur maiores in porro assumenda fugiat iusto suscipit saepe. At.</p>
            </div>
            <div id='spacer' style={{width: 'auto' , height: '50px' , border: '1px solid black'}}></div> 
            {/* please use the div ability to leave gaps between other dives instead of harcoding empty spaces */}
            <div id="areas of practice" style={{width: 'auto' , height: '300px' , border: '1px solid black'}}>
                <h1>Areas of Practice</h1>
                <p>Family</p>
                <p>Divorce</p>
                <p>Bankruptcy</p>
            </div>
            <div id='spacer' style={{width: 'auto' , height: '50px' , border: '1px solid black'}}></div> 
            {/* please use the div ability to leave gaps between other dives instead of harcoding empty spaces */}
            <div id='about' style={{ display:'flex' ,width: 'auto' , height: '300px' , border: '1px solid black' , justifyContent: 'space-evenly'}}>
                <div style={{display: "flex" , width: '40%' , border: '1px solid black' }}>
                    <p>About Maggie</p>
                </div>
                <div style={{display: "flex" , width: '40%' , border: '1px solid black' }}>
                    <img src="https://http.cat/400" alt="" />
                </div>
            </div>
            <div id='spacer' style={{width: 'auto' , height: '50px' , border: '1px solid black'}}></div> 
            {/* please use the div ability to leave gaps between other dives instead of harcoding empty spaces */}
            <div id='location' style={{ display:'flex' , width: 'auto' , border: '1px solid black' , justifyContent:'space-evenly'}} >
                <div style={{width: '40%' , border: '1px solid black'}}>
                    <h1 style={{width: 'auto' , height: 'auto' , border: '1px solid black'}}>Location</h1>
                    <p>address</p>
                    <p>address</p>
                    <p>hours</p>
                    <p>phone number</p>
                    <p>email</p>
                </div>
                <div style={{display: "flex" , width: '40%' , border: '1px solid black' }}>
                    <img src="https://http.cat/307" alt="" />
                </div>
            </div>
            <div id='spacer' style={{width: 'auto' , height: '50px' , border: '1px solid black'}}></div> 
            {/* please use the div ability to leave gaps between other dives instead of harcoding empty spaces */}
            <div id='spacer' style={{width: 'auto' , height: '50px' , border: '1px solid black'}}>I'm not going to buiild a footer now, I'll save that for PROD once the contact page is done</div> 
            
        </div>
    )
}

export default HomePage