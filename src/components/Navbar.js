
import React from 'react'
import "./navbar.scss"

export default function Navbar({open, setOpen}) {
    return (
        <div className={"nav-container " + (open && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#main" className="home">Home</a> 
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setOpen(!open)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
