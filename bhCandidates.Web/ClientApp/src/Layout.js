import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStatusCount } from './CandidateContext';

function Layout(props) {

const {pendingStatusCount, confirmedStatusCount, cancelledStatusCount} = useStatusCount()

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <a className="navbar-brand">React Router Blog Posts</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link text-light">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addcandidate' className="nav-link text-light">
                                        Add candidate
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/pending' className="nav-link text-light">
                                        Pending
                                        <span> {'(' + pendingStatusCount + ')'}</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/confirmed' className="nav-link text-light">
                                        Confirmed
                                        <span> {'(' + confirmedStatusCount + ')'}</span>

                                    </Link>
                                </li>  
                                <li className="nav-item">
                                    <Link to='/cancelled' className="nav-link text-light">
                                    Cancelled
                                    <span> {'(' + cancelledStatusCount + ')'}</span>

                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{ marginTop: 80 }}>
                {props.children}
            </div>
        </>
    )
}

export default Layout;