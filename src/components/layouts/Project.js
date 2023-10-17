import React from "react";

//import global styles
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

//import project styles

import {
  TechStackCard,
  ProjectImage,
  ProjectImageContainer,
} from "../../styles/MyProjects.styled";

//import assets
import { BsGithub } from "react-icons/bs";

const Project = ({ data }) => {
  return (
    <FlexContainer responsiveFlex="block" fullWidthChild>
      {/* --left-section-project-content-- */}
      <div>
        <FlexContainer responsiveFlex="block" align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>

          <IconContainer color="blue" size="2rem">
            <a href={data.project_git} target="_blank" color="blue">
              <BsGithub />
            </a>
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer responsiveFlex="block" gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>
        <a href={data.project_url} target="_blank" color="blue">
        <Button padding=" 1rem 2rem">Visit Website</Button>

</a>
      </div>
      {/* --right-secction-project-image-- */}
      <ProjectImageContainer>
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
