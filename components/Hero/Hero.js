import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

/* eslint-disable react/no-unescaped-entities */


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
     I want to explore front-end development, back-end development and UI/UX design, with a passion for making an impact and building beautiful, modern websites.
      </SectionText>

      <SectionText>
        HELLO THERE!
      </SectionText>
      <SectionText>
      LET'S ENJOY MY SIMPLE PORTFOLIO
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;