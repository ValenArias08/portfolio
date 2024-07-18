import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hola!</h1>
          <h1>Soy <b>Valentina Arias</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Breve <b>introducción</b></h1>
          <p>
            Me apasiona el proceso de transformar ideas en experiencias de juego inmersivas y <b>personajes 3D detallados</b>. 
            Estoy buscando oportunidades que me desafíen como desarrolladora de videojuegos y me permitan crecer en la creación de modelos 3D en Unity.<br /><br />
            
            Tengo conocimientos en C#, <b>Unity</b> y Blender, entre otros. Actualmente, estoy desarrollando mis habilidades en Unity, planeo aprender Maya y <b>Realidad 
            Virtual</b> en un futuro cercano para expandir mis capacidades en el desarrollo de juegos y aplicaciones interactivas.<br />
            Además, me encanta <b>dibujar</b> cosas nuevas.<CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home