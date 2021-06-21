import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I am Mauritz! <br />
          A highly focused <br />
          Full-Stack Software Engineer.
        </SectionTitle>
        <SectionText>
        {/* The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps. */}
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;