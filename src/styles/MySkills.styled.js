import { BsDisplay } from "react-icons/bs";
import styled from "styled-components";

export const SkillsCardContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto ;
grid-gap: 2rem;
padding:0 5%;
margin-left:8rem;

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0px;
    display:flex;
    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
  }
`
export const SkillsCard = styled.div`
width: 230px;
border: 1px solid #fff;
padding: 3rem 0;
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
background-color:transparent;

`