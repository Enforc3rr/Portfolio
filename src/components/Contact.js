import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

export class Contact extends Component {
    render() {
        return (
            <footer>
                <div className="Box" id="contact">
                <div className="social-container">
                <p style={contactStyle} className="underline">Contact</p>
                <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                    <li>
                    <a href="https://www.facebook.com/Prateekkt1/" className="facebook social">
                         <FontAwesomeIcon icon={faFacebook} size="3x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://github.com/Enforc3rr" className="github social">
                         <FontAwesomeIcon icon={faGithub} size="3x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/prateek-kumar-2252ab1a3/" className="linkedin social">
                         <FontAwesomeIcon icon={faLinkedin} size="3x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/Enforc3rr" className="twitter social">
                         <FontAwesomeIcon icon={faTwitter} size="3x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://t.me/Enforc3rr" className="telegram social">
                         <FontAwesomeIcon icon={faTelegram} size="3x" />
                         </a>
                    </li>
                </ul>
                </div>
            </div>
            </footer>
        )
    }
}
const contactStyle = {
    fontFamily : "Times New Roman, Times, serif" ,
    fontSize : "50px",
}

export default Contact
