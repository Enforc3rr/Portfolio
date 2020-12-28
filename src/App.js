import { Component } from "react"
import Rhp from "./components/RightHandPart";
import Lhp from "./components/LeftHandPart";
import Rha from "./components/About/RightHandAbout";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Project";
import ParticlesBg from "particles-bg";
import Footr from "./components/Footer";


import "tachyons";

export default class App extends Component{
  render(){
    return(
      <div>
        <ParticlesBg type="cobweb" bg={true} />
          <div className="flex flex-wrap-reverse" id="home">
             <div className="pa2 w-30 h-auto">
                <Lhp/>
              </div>
              <div className="w-70 h-auto">
                <Rhp/>
              </div>
          </div>
          <Contact/>
          <div className="flex item-center GradientBg">
            <Rha/>
          </div>
          <div className="GradientBgProj">
            <p className="tc BoxProject underline">Projects</p>
            <div  id="projects">
            <Projects projects={projects}/>
            </div>
          </div>
          <Footr></Footr>
      </div>
    );
  }
}
//http://mrmrs.github.io/photos/u/009.jpg
const projects = [
  {
      id : 1 ,
      title : "Food Ordering WebApp" ,
      language : "Java",
      tech : "Spring Boot" ,
      github :"https://github.com/Enforc3rr/SpringBoot-SmallScale-eFoodOrdering"
  },
  {
      id : 2 ,
      title : "Review Management WebApp" ,
      language : "Java" ,
      tech : "Spring Boot",
      github :"https://github.com/Enforc3rr/Review-Managment-WebApp"
  },
  {
      id : 3 ,
      title : "Portfolio" ,
      language : "Javascript" ,
      tech : "React.Js",
      github :""
  },
  {
      id : 4 ,
      title : "Todo WebApp" ,
      language : "Javascript" ,
      tech : "React.Js" ,
      github :"https://github.com/Enforc3rr/Todo-App"
  },
  {
      id : 5 ,
      title : "Book Review" ,
      language : "Java",
      tech : "Core Java" ,
      github :"https://github.com/Enforc3rr/Book-Management-System"
  },
  {
      id : 6 ,
      title : "Father-Son Height Predictor" ,
      language : "Python",
      tech : "Scikit Learn" ,
      github :"https://github.com/Enforc3rr/ML-father-son-height-predictor"
  }
]
