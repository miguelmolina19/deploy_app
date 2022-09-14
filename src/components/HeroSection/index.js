import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElment'
import { HeroContainer, HeroBg, VideoBg, HeroH1, HeroP, HeroBtnWrapper, HeroContent} from './HeroElements'

const HeroSection = ({Changed}) => {

  
    const [Hover, setHover] = useState(false)

    const onHover = () =>{
      setHover(!Hover)
    }
  
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1 Changed ={Changed}>What Is React.JS? </HeroH1>
          <HeroP>
          React is a JavaScript library developed by Facebook. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. <br></br>
          Sign Up to lear more about react.js
          </HeroP>
          <HeroBtnWrapper>
            <Button to="/signin" Changed ={Changed} onMouseEnter={onHover} onMouseLeaver={onHover} >
              Get Started
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection