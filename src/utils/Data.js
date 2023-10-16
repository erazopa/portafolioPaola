import { FaReact, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiHtml5 } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiKrita,
  SiCanva,
} from "react-icons/si";
import { BiLogoBlender } from "react-icons/bi";

import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png"

export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "Next JS",
    icon: <TbBrandNextjs />,
  },
  {
    id: 3,
    tech: "Html",
    icon: <SiHtml5 />,
  },
  {
    id: 4,
    tech: "JS",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    tech: "Css",
    icon: <FaCss3Alt />,
  },
  {
    id: 5,
    tech: "Git Hub",
    icon: <FaGithub />,
  },
];

export const Skillsillustration = [
  {
    id: 1,
    tech: "Illustrator",
    icon: <SiAdobeillustrator />,
  },
  {
    id: 2,
    tech: "After Effects",
    icon: <SiAdobeaftereffects />,
  },
  {
    id: 3,
    tech: "Blender",
    icon: <BiLogoBlender />,
  },
  {
    id: 4,
    tech: "Premier",
    icon: <SiAdobepremierepro />,
  },
  {
    id: 5,
    tech: "Krita",
    icon: <SiKrita />,
  },
  {
    id: 6,
    tech: "Canva",
    icon: <SiCanva />,
  },
];


export const projectDetails = [
  {
    id: 0,
    project_name: "Swipe",
    project_desc: "Pagina desarrollada RESPONSIVE Mobile y Desktop",
    tech_stack: ["CSS", "HTML"],
    project_img: Project1,
    project_url: "https://erazopa.github.io/swipe/",
    project_git: "https://github.com/erazopa/swipe",
    reverse: false,
  },
  {
    id: 1,
    project_name: "Hotels",
    project_desc:
      "Pagina desarrollada a travez de una interfaz, permitiendo que las tarjetas se actualizen de forma dinámica a medida que los filtros de busqueda cambien y coincidan con los criterios establecidos, lo que proporcionará una experiencia de usuario más interactiva y precisa.",
    tech_stack: ["JS", "CSS", "HTML"],
    project_img: Project2,
    project_url: "https://erazopa.github.io/hotels//",
    project_git: "https://github.com/erazopa/hotels",
    reverse: false,
  },
  {
    id: 2,
    project_name: "Hotels ",
    project_desc:
      "Pagina desarrollada haciendo la migración a Next JS, usando librerias_React, Props, componentes, estados",
    tech_stack: ["NextJS", "JSX", "CSS" ],
    project_img: Project3,
    project_url: "https://hotelsreact-paola-adriana-erazos-projects.vercel.app/",
    project_git: "https://github.com/erazopa/hotelsreact",
    reverse: false,
  },
  
];


export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "Projects",
    href: "Projects",
  },
  {
    id: 3,
    name: "Contact",
    href: "Contact",
  },

  
];
