import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
`;

TitleContainer.displayName = "TitleContainer";
