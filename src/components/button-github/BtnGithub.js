import "./style.css"
import githubIcon from "./../../img/icons/gitHub-black.svg"
import React from 'react'

export default function BtnGithub({link}) {
  return (
    <a href={link} target="blank" rel="noreferrer" className="btn-outline">
        <img src={githubIcon} alt=""/>
        GitHub repo
    </a>
  )
}
