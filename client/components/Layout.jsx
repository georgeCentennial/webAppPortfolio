/**
 * File name: Layout.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import React from 'react';
import {Link} from 'react-router-dom';
import CustomLogo from '../src/customLogo';

export default function Layout(){
    return (
        <>
            
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>My Portfolio</h1>
                </div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/"><CustomLogo /></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/service">Services</a></li>
                            <li><a href="/project">Project</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <hr/>
            </div>
        </>
    );

}