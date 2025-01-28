/**
 * File name: contact.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import {Link} from 'react-router-dom';
import React from 'react';

export default function Contact(){
    return (
        <>
            <h1>Contact</h1>
            <p>Contact me via email: gcayaby2@my.centennialcollege.ca</p>
            <form>
                <label>
                    First name: <input placeholder="First name"/>
                </label>
                <br/>
                <label>
                    Last name: <input placeholder="Last name"/>
                </label>
                <br/>
                <label>
                    Contact number: <input placeholder="Contact number"/>
                </label>
                <br/>
                <label>
                    Email: <input placeholder="Email"/>
                </label>
                <br/>
                <label>
                    Address: <input placeholder="Address "/>
                </label>
                <br/>
                <Link to="/">
                <button>Submit form</button>
                </Link>
            </form>
        </>
    );
}