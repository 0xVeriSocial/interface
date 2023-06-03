import theme from "@/styles/theme";
import styled, { css } from "styled-components";

export const MainNavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  transition: 0.5s all linear;
`;

export const MainNavigationLogo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  cursor: default;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    margin-bottom: 20px;
  }
`;

export const MainNavigationTitle = styled.h2`
  display: block
  transition: 0.5s all linear;

  font-weight: 700;
  font-size: 18px;
  color: ${theme.colors.title};

  margin-left: 8px;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 28px;
  }
`;

export const MainNavigationIcon = styled.div`
  position: relative;
  height: 64px;
  width: 64px;
`;

export const MainNavigationContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: 20px;
`;

export const MainNavigationItem = styled.div<{ selected: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 10px;

  background-color: ${({ selected }) =>
    selected ? theme.colors.backgroundTwo : "transparent"};

  margin: 5px 0;
  border-radius: 10px;

  cursor: pointer;
`;

export const MainNavigationItemIcon = styled.div`
  height: 24px;
  width: 24px;
`;

export const MainNavigationItemText = styled.h4<{
  selected: boolean;
}>`
  display: "block";
  font-weight: ${({ selected }) => (selected ? "700" : "400")};
  color: ${({ selected }) =>
    selected ? theme.colors.title : theme.colors.highlight};
  white-space: nowrap;
`;
