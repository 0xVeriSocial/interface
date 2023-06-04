import theme from "@/styles/theme";
import styled from "styled-components";

export const CustomDropzoneContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.backgroundTwo};
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CustomDropzoneContent = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border: 1px dotted black;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CustomDropzoneImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
`;
