import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer } from './HeroElements';

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
