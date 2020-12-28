import { Component } from "react";
import {Link} from 'react-scroll';

export default class LeftHandPart extends Component{
    render(){
        return(
            <div className="pl4">
            <img src="https://robohash.org/test" alt=" "></img>
            <h1 className="underline f1 f-headline-4 fw5">Prateek Kumar</h1>
            <h2 className="fw2">2nd Year Undergrad</h2>
            <h2 className="fw5 underline">Backend Engineer</h2>
            <h4 className="fw1">Prateekkumartiwari01@gmail.com</h4>
            <h4 className="fw1">+91-8400726712</h4>
            <h3 className="underline">Sections</h3>
               <ul>
                    <li><Link activeClass="active" className="link b black hover-red" to="contact" spy={true} smooth={true}>Contact</Link></li>
                    <li><Link  to="about" className="link b black hover-red" spy={true} smooth={true}>About</Link></li>
                    <li><Link  to="projects" className="link b black hover-red" spy={true} smooth={true}>Projects</Link></li>
               </ul>
               <a className="AnchorButton" href=" ">Resume</a>
            </div>
        );
    }
}