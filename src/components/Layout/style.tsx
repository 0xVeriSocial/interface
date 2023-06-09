import theme from "@/styles/theme";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LayoutContent = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 20px;
  background: ${theme.colors.backgroundOne};

  overflow-y: auto;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    min-height: 100vh;
    padding: 40px;
    transition: 0.5s all linear;
  }
`;
