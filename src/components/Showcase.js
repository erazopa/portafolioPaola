import React from "react";

import { motion } from "framer-motion";

// Importando stilos globales

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  ParaText,
  IconContainer,
} from "../styles/Global.styled";
// Importando stilos de ShowCase

import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Particle,
} from "../styles/Showcase.styled";

// Importando iconos de React
import { BsLinkedin, BsGithub } from "react-icons/bs";

// Assets
import ShowCaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";
import BackgroundImg1 from "../assets/particle2.png";
import BackgroundImg2 from "../assets/particle3.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variant";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer fullWidthChild>
        {/* Contenido de la Izquierda */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
          Hola
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
           Soy <BlueText>Paola Adrian Erazo</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            Soy <BlueText> Desarrolladora Front End</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
          Con manejo de diferentes tecnologías, responsable, positiva,
            <BlueText>dispuesta a aprender y estar a la vanguardia.</BlueText>
            Con experiencia en el desarrollo de varias tareas, en generar un
            ambiente laboral <BlueText> entusiasta y saludable. </BlueText>
          </ParaText>

          {/* Iconos de redes Sociales */}

          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="blue" size="1.5rem">
            <a 
            href="https://github.com/"
            >
                <BsLinkedin />
            </a>
            </IconContainer>
            
            <IconContainer color="blue" size="1.5rem">
              <a href="https://github.com/NikaoV" target="_blank">
                <BsGithub />
              </a>
            </IconContainer>
          </FlexContainer>
        </motion.div>
        {/* Contenido de la Derecha */}

        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
          margin="70px"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowCaseImg} alt="Paola Erazo" width="400px" />
            </ShowcaseImageCard>

            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
              width="70px"
            />

            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={BackgroundImg1}
              alt="particle"
              top="40px"
              right="-70px"
              rotate="0deg"
              width="70px"
            />

            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImg2}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
              width="70px"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
