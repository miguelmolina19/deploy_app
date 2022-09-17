import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const [Changed, setChanged] = useState(false)

    const theme = () => {
      setChanged(!Changed)
    };

    
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} Changed={Changed} />
    <Navbar toggle={toggle} Changed={Changed} theme={theme}/>   
    <HeroSection Changed={Changed}/>
    <InfoSection {...homeObjOne}/>
    </>
  );
};



export default Home