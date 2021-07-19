import React from 'react'
import "./main.scss"

export default function Main() {
    const date = new Date()
    const hour = date.getHours()

    let greet;

    if(hour < 12)
        greet = "Good Morning!";
    else if(hour >= 12 && hour <= 17)
        greet = "Good Afternoon!";
    else if(hour >= 17 && hour <= 24)
        greet = "Good Evening!" 


    return (
        <div className="main-container" id="main">
            <div className="image">
                <img src="images/image1.svg"/>
            </div>
            <div className="left">
                <div className="wrapper">
                    <h1>{greet}</h1>
                    <h1>I'm <span className="name">Brad</span></h1>
                    <div>
                        <button className="contact">
                            <a href="#contact">Contact Me</a>
                        </button>
                        <button className="projects">
                            <a href="#projects">Projects</a>
                        </button>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}
