import React from 'react'
import './About.css'
import AboutBestItSolution from '../../Components/AboutBestItSolution/AboutBestItSolution'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import AboutOurMission from '../../Components/AboutOurMission/AboutOurMission'

const About = () => {
  return (
    <div>
            <AboutBestItSolution />
            <AboutCompany />
            <AboutOurMission />
    </div>
  )
}

export default About