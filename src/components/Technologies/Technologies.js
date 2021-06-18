import React from 'react';
import { DiRuby, DiRor, DiPostgresql, DiFirebase, DiReact, DiMongodb, DiDigitalOcean, DiHeroku } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiRuby size="3rem" />
          <DiRor size="3rem" />
          <DiFirebase size="3rem" />
          <DiPostgresql size="3rem" />
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Ruby on Rails and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDigitalOcean size="3rem" />
          <DiHeroku size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployments</ListTitle>
          <ListParagraph>
            Experience with <br />
            Cloudways, Heroku, and Digital Ocean
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
