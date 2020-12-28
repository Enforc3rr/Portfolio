import React, { Component } from 'react';
import Skillbar from "react-skillbars";
import Anim from "rc-queue-anim";

export class RightHandAbout extends Component {
    render() {
        return (
        <div className="outline w-100 h-auto flex flex-column mh5 pa4">
            <Anim type={['right', 'left']} interval={[1000, 2000]} delay={[0, 10000]} duration={[500, 2000]} ease={['easeOutBack', 'easeInOutCirc']} leaveReverse>
                <div key="1"   id="about">
                <p className="AdjustmentAbout underline"style={{textDecorationColor:"#03916b"}}><h1>About</h1></p>
                <div className="outline w-100 h-auto pa3 mr2">
                <p className="tc"><h2 className="underline"style={{textDecorationColor:"#03916b" , fontFamily : "serif"}} >DESCRIPTION</h2></p>
                <p className="newLine courier fw3">
                    {description}
                </p>
                </div>
                </div>
            <div className="outline w-100 h-auto pa3 mr2" key="2">
            <p className="tc"><h2 className="underline"style={{textDecorationColor:"#03916b", fontFamily : "serif"}}>EDUCATION</h2></p>
              <ul className="ListingAdjust">
                  <li><h2 className="ph6 ListingAdjust underline">College (B.Tech '23)</h2>
                      <ul className="ListingAdjust">
                          <li>
                              <h4 className="ph6 underline" style={{textDecorationColor:"#ff0000"}}>Galgotia College Of Engineering And Technology(Affiliated To AKTU)</h4> <ul className="ListingAdjust">
                                  <li className="ph6">1st Semester - 84%</li>
                                  <br/>
                                  <li className="ph6">2nd Semester - 82%</li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
            </div>
            <div className="outline w-100 h-auto pa3 mr2" key="3">
                <p className="tc"><h2 className="underline"style={{textDecorationColor:"#03916b", fontFamily : "serif"}}>SKILLS</h2></p>
                <p>
                    <Skillbar skills={skills} colors={skillColor} className="fw1"/>
                </p>
            </div>
            </Anim>
        </div>
        
        )
    }
}

const description = `
                 Hey There , My Name is Prateek.
                 I am a Second Year Undergrad currently Pursuing my Bachelor's in IT.
                 I Am Interested in Backend Developement.
                 And I am Familiar with Front-end.`

const skills = [
    {type: "Java", level: 85},
    {type: "Data Str.", level: 80},
    {type: "SpringBoot", level: 75},
    {type: "Javascript", level: 75},
    {type: "Node+Express", level: 70},
    {type: "MongoDB", level: 65},
    {type: "MySQL", level: 60},
    {type: "Reactjs", level: 55},
    {type: "Golang", level: 50},
  ];
const  skillColor = {
    "bar": "#000000",
    "title": {
      "text": "#fff",
      "background": "#191970"
    }
  }
export default RightHandAbout
