import theme from "@/styles/theme";
import styled from "styled-components";

export const GenericContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GenericTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${theme.colors.title};
`;

export const GenericContent = styled.div`
  position: relative;
  width: 100%;
  min-width: 50vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;
