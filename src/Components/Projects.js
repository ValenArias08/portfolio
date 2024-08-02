import React from 'react';
import ProjectBox from './ProjectBox';
import EchoesofBillie from '../images/EchoesofBillie1.jpg';
import ExplosiveBallon from '../images/explosive-balloon-race-1.jpg';
import GrabBall from '../images/Grab-the-Ball-Rex-1.jpg';
import LaserFood from '../images/Laser-food-1.jpg';
import SlideCar from '../images/Slide_car_2.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>Mis <b>Proyectos</b></h1>

      <h2 className='subProjects'>Game<b>Jams</b></h2>

      <div className='project'>
        <ProjectBox projectPhoto={EchoesofBillie} projectName="EchoesofBillie" />
      </div>

      <h2 className='subProjects'>Proto<b>tipos</b></h2>

      <div className='project'>
        <ProjectBox projectPhoto={ExplosiveBallon} projectName="ExplosiveBallon" />
        <ProjectBox projectPhoto={GrabBall} projectName="GrabBall" />
        <ProjectBox projectPhoto={LaserFood} projectName="LaserFood" />
        <ProjectBox projectPhoto={SlideCar} projectName="SlideCar" />
      </div>

    </div>
  )
}

export default Projects