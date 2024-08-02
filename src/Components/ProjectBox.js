import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EchoesofBillieTitle: "Echoes of Billie",
    EchoesofBillieDesc:"Sumerge en la misteriosa y fantástica historia de Billie. Perdido y sin recuerdos de cómo llegó a ese lugar, su única esperanza de respuestas es recolectar fragmentos de su memoria, mientras se enfrenta a sus peores pesadillas.",
    EchoesofBillieGithub:"https://github.com/Sebasm2028/Echoes_of_Billy",
    EchoesofBillieWebsite:"https://valen-arias.itch.io/echoes-of-billy",

    ExplosiveBallonTitle : "Explosive Ballon Race",
    ExplosiveBallonDesc : "Juega este increíble prototipo y trata de superar tu record, pero ten cuidado... puedes explotar intentandolo.",
    ExplosiveBallonGithub : "https://valen-arias.itch.io/",
    ExplosiveBallonWebsite : "https://valen-arias.itch.io/explosive-balloon-race",

    GrabBallTitle : "Grab the ball Rex!",
    GrabBallDesc : "¿Podrá Max coger la pelota o se le escapará de su hocico?, juega este increíble prototipo y descubrelo!.",
    GrabBallGithub : "https://valen-arias.itch.io/",
    GrabBallWebsite : "https://valen-arias.itch.io/challenge-2",

    LaserFoodTitle:"Laser Food",
    LaserFoodDesc:"¡Oh ho!, los animales escaparon del Zoologico, intenta detenerlos... con una sabrosa pizza!.",
    LaserFoodGithub:"https://valen-arias.itch.io/",
    LaserFoodWebsite:"https://valen-arias.itch.io/laser-food",

    SlideCarTitle: "Slide Car",
    SlideCarDesc:"¿Podrás conducir está camioneta y empujar obstaculos?..",
    SlideCarGithub:"https://valen-arias.itch.io/",
    SlideCarWebsite:"https://valen-arias.itch.io/slide-car"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3> {desc[projectName + 'Title']}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox