import React from 'react'
import { useParams } from 'react-router-dom'

import {projects} from "./../helpers/projectList"

import img from "./../img/projects/02-big.jpg"
import BtnGithub from '../components/button-github/BtnGithub'


export default function Project() {
    const {id} = useParams();
    const project = projects[id];

  return (
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
                <img src={project.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>

                {project.githubLink && (
                    <BtnGithub link="https://github.com"/>)
                }
                
            </div>
        </div>
    </main>
  )
}
