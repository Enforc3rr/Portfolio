import { Component } from "react";
import "../App.css";
import RightHandImg from "./FrontPageImg.jpg";
import Typical from "react-typical";

export default class RightHandPart extends Component{
    render(){
        return(
        <div> 
            <div><img src={RightHandImg} alt=" " width="1100" height="755"></img></div>
           <p className="Text">
               <h1>I Know  <Typical 
               steps={['Spring Boot', 1000, 
               'Node+Express Javascript', 500 ,
               "Golang" , 500 
            ]}
            loop = {Infinity} 
            wrapper = "b"
               />
               </h1>
           </p>
        </div>

        );
    }
}
