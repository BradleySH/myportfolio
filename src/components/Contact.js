import React, {useState} from 'react'
import "./contact.scss"
import "@material-ui/icons/"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Contact() {

    const handleSubmit= (e) => {
        e.preventDefault()
        setMessage(true)
    }
    const [message, setMessage] = useState(false)


    return (
        <div className="contact-container" id="contact">
            <div className="top">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" required/>
                    <input type="text" placeholder="E-mail" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you! I'll reach out soon!</span>}
                </form>
            </div>
            {/* <div className="bottom">
                <img src="images/image2.svg" />
            </div> */}
            <div className="icon-container">
            </div>
        </div>
    )
}
