import React from 'react';
import { DiHtml53DEffects, DiCss3, DiJavascript, DiLaravel, DiRuby, DiRor, DiPostgresql, DiFirebase, DiReact, DiMongodb, DiDigitalOcean, DiHeroku, DiVisualstudio, DiGithubBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From full-stack, deployment sites, and IDE tools.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiHtml53DEffects size="3rem" />
          <DiCss3 size="3rem" />
          <DiJavascript size="3rem" />
          <DiLaravel size="3rem" />
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JS, Laravel, and React.js
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
          <DiVisualstudio size="3rem" />
          <DiGithubBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployments and Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Heroku, Digital Ocean, VS.Code, and GitHub.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;
