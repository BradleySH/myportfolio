import React from 'react'
import "./about.scss"

export default function About() {
    return (
        <div className="about-container" id="about">
            <div className="left">
                <h3>My Tool Bag</h3>
                <ul>
                    <li>React / JavaScript / TypeScript</li>
                    <li>CSS / Sass /HTML /HTTP / AJAX</li>
                    <li>Node.js /Express.js/ Mongoose/ MongoDB</li>
                    <li>NoSQL / API's/ Git</li>
                    <li>AdobeXD / Figma / Blender</li>
                    <li>Three.js(taking courses)</li>
                </ul>
            </div>
            <div className="right">
                <h3>About Me</h3>
                <p>Hi! Welcome to my website.   My name is Brad Horlander, and I am a Software Developer based in New York City.  I was in VSchool where I learned to build frontend and backend web development.</p>
                <p>I have worked for Optum/UnitedHealth Group as a medical coding supervisor for the past 4 years and currently working on a Pro Bono web development job through them with Hope Solutions.  I really have a passion for being creative and learning new things and love to collaborate on ideas. </p>
                <p>I am currently looking for a new role as a software developer. <span>Hire me?</span></p>
            </div>
            
        </div>
    )
}
