import React from 'react'
import './Headers.css'
import TemporaryDrawer from './Drawer';
import Button from '../../Common/Button/Button';
import { Link, useParams } from 'react-router-dom';

function Header() {

    console.log("This is param:- ", useParams())

  return (
    <div className='navbar'>
        <h1 className='logo'>
            CryptoTracker <span style={{color: "var(--blue)"}}>.</span>
        </h1>

        <div className='links'>
            <Link to="/">
                <p className='link'>Home</p>
            </Link>

            <Link to="/compare">
                <p className='link'>Compare</p>
            </Link>

            <Link to="/dashboard">
                <Button Text={"Dashbord"} outLine={false} onClick={() => console.log("Clicked")}/>
            </Link>

        </div>

        <div className='mobile-drawer'>
            <TemporaryDrawer />
        </div>
        
    </div>
  )
}

export default Header
