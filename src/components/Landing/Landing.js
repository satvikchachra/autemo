import React from 'react';
// import Hero from './Hero/Hero';
// import Level1Section from './Level1Section/Level1Section';
// import Level2Section from './Level2Section/Level2Section';
// import Level3Section from './Level3Section/Level3Section';
import HeroSection from './HeroSection/HeroSection';
import {
    homeObjHero, homeObjDoctor, homeObjImage, homeObjAudio, homeObjVideo, homeObjCamera, homeObjUpload
} from './Data/Data';
import Footer from './Footer/Footer';
import classes from './Landing.module.css';

const landing = props => (
    <div className={classes.Landing} >
        <HeroSection {...homeObjHero} />
        <HeroSection {...homeObjDoctor} />
        <HeroSection {...homeObjImage} />
        <HeroSection {...homeObjAudio} />
        <HeroSection {...homeObjVideo} />
        <HeroSection {...homeObjCamera} />
        <HeroSection {...homeObjUpload} />
        {/* <Level1Section />
        <Level2Section />
        <Level3Section />*/}
        <Footer />
    </div>
);

export default landing;