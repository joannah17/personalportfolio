import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer,Code, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Project</SectionTitle>
    <GridContainer> 
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
      <BlogCard key={id}>
        <Img src={image} />
        <TitleContent>
          <HeaderThree>{title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ) )}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={source}> </ExternalLinks>
          <Code href="https://github.com/joannah17" target="_blank" rel="noopener noreferrer">Code</Code>
        </UtilityList>
      </BlogCard>
    ))}</GridContainer>
  </Section>
);

export default Projects;