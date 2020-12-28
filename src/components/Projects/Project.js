import React, { Component } from 'react'

export class Project extends Component {
    render() {
        return this.props.projects.map(
            proj => (
                <div className="bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5">
                <img src="https://source.unsplash.com/random/300x300" alt=" "></img>
                <h4 className="underline">{proj.title}</h4>
                <h5>Language Used - {proj.language}</h5>
                <h5>Framework Used -{proj.tech}</h5>
                <a href={proj.github} className="link underline-hover black">Github Link Of Project</a>
            </div>
            )
        )
    }
}
export default Project
