import React from "react";

import { motion } from "framer-motion";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";

// importar estilos globales
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
  Button2,
  IconContainer,
} from "../styles/Global.styled";
import { navLinks } from "../utils/Data";

// Importar estilos del Footer
import { ContactForm, FormInput } from "../styles/Footer.styled";

import { fadeInBottomVariant } from "../utils/Variant";

const Footer = ({}) => {
  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        Descarga
      </Heading>

      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Mi <BlueText>CV</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <Button2 
            responsiveleft="34px"
            href="CV Paola.pdf" download>
              Curriculum Vital
            </Button2>

            <FlexContainer gap="20px" responsiveFlex>
              <IconContainer
              responsiveleft="110px"
                left="205px"
                right="-195px"
                bottom="20px"
                align="center"
                size="1.5rem"
              >
                <a
                  href="https://www.linkedin.com/in/paola-adriana-erazo-52352b278/"
                  target="_blank"
                  color="blue"
                >
                  <BsLinkedin />
                </a>
              </IconContainer>

              <IconContainer
                left="195px"
                right="-195px"
                bottom="20px"
                align="center"
                size="1.5rem"
              >
                <a
                  href="https://github.com/erazopa"
                  target="_blank"
                  color="blue"
                >
                  <BsGithub />
                </a>
              </IconContainer>
            </FlexContainer>

            <FlexContainer
              justify="center"
              responsiveFlex="none"
              responsivegrid="auto auto"
              responsivemargin="0px 20px"
            >
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  href={`#${link.href}`}
                  padding="10px 5rem"
                >
                  {link.name}
                </Button>
              ))}
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
