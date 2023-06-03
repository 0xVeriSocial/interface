import theme from "@/styles/theme";
import styled from "styled-components";

export const LinkedAccountsOTPConnectorContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${theme.colors.backgroundTwo};
  border-radius: 10px;

  margin: 5px 0;

  padding: 10px;
`;

export const LinkedAccountsOTPConnectorLogo = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const LinkedAccountsOTPConnectorHeader = styled.div`
  position: relative;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LinkedAccountsOTPConnectorText = styled.p`
  font-weight: 400;
  color: ${theme.colors.text};
  font-size: 18px;
`;
