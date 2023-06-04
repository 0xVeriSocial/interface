import theme from "@/styles/theme";
import styled from "styled-components";

export const ViewContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ViewCard = styled.a`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;

  margin: 10px 0;
  border-radius: 10px;
  background-color: ${theme.colors.backgroundTwo};
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

export const ViewCardLogo = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

export const ViewCardText = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: ${theme.colors.text};
`;
