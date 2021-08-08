import React, {useState} from 'react'
import "./contact.scss"
import "@material-ui/icons/"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {createTheme, ThemeProvider} from "@material-ui/core"

export default function Contact() {

    const theme = createTheme({
        palette: {
            primary:{
                main: "#F0D370"
            }
        }
    })

    const handleSubmit= (e) => {
        e.preventDefault()
        setMessage(true)
    }
    const [message, setMessage] = useState(false)


    return (
        <div className="contact-container" id="contact">
            <div className="top">
                <h2>Contact Me</h2>
                <form action="mailto:brad@bradhorlander.com" method="post" name="email" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="E-mail" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you! I'll reach out soon!</span>}
                </form>
            </div>
            {/* <div className="bottom">
                <img src="images/image2.svg" />
            </div> */}
            <div className="icon-container">
                <div className="github">
                    <a href="https://github.com/BradleySH"><GitHubIcon fontSize="large" style={{ color: "#F0D370"}} /></a>
                </div>
                <div className="linedin">
                    <a href="https://www.linkedin.com/in/bhorlander/" ><LinkedInIcon fontSize="large" style={{ color: "#F0D370"}} /></a>
                </div>
            </div>
        </div>
    )
}
