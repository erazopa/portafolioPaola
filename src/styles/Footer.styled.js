import styled from "styled-components";

export const ContactForm = styled.div`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:90%;
    margin: auto;

}
`;
export const FormLabel = styled.div`
  color: ${({ theme }) => theme.colors.para_text_color};
  padding-bottom: 10px;
`;

export const FormInput = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    margin-top:10px;
    margin-left:5px;

  &::placeholder{
    
  }
`;
