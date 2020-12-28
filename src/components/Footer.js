import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-scroll';

export class Footer extends Component {
    render() {
        return (
            <div className="FooterBox">
                <div className="social-container">
                <Link to="home" className="round-button">Home</Link>
                <p className="f1 lh-title fw1 i underline">Made By Prateek Kumar :)</p>
                <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                    <li>
                    <a href="https://www.facebook.com/Prateekkt1/" className="facebook social">
                         <FontAwesomeIcon icon={faFacebook} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://github.com/Enforc3rr" className="github social">
                         <FontAwesomeIcon icon={faGithub} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/prateek-kumar-2252ab1a3/" className="linkedin social">
                         <FontAwesomeIcon icon={faLinkedin} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/Enforc3rr" className="twitter social">
                         <FontAwesomeIcon icon={faTwitter} size="2x" />
                         </a>
                    </li>
                    <li>
                    <a href="https://t.me/Enforc3rr" className="telegram social">
                         <FontAwesomeIcon icon={faTelegram} size="2x" />
                         </a>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}
export default Footer
