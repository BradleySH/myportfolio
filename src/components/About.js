import React from 'react'
import "./about.scss"

export default function About() {
    return (
        <div className="about-container" id="about">
            <div className="left">
                <h3>My Tool Bag</h3>
                <ul>
                    <li>React/JavaScript/React Native</li>
                    <li>CSS/Sass/HTML/HTTP/AJAX</li>
                    <li>Node.js/Express.js/Mongoose/MongoDB</li>
                    <li>NoSQL/API's/Git</li>
                    <li>AdobeXD/Figma/Blender</li>
                    <li>Three.js(taking courses)</li>
                </ul>
            </div>
            <div className="right">
                <h3>About Me</h3>
                <p>Over the past year I have had many life experience that have come together to bring me here today.  My drive, passion, and thirst for knowledge and bettering myself have led me through many leadership roles and very trying times.  After years in the Army and in Healthcare I have a new passion to help others and to help myself.  I do not define myself for work I have done but the work I want to be doing.  Skills they can be taught, but the passion to learn and grow is something inherent and that is something I have had my whole life. Let me bring my passions and experience to your workplace.</p>
            </div>
            
        </div>
    )
}
