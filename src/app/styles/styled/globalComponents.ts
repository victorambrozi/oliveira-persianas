import styled from "styled-components";
import { serifFont, sansFont } from "../global";

export const Subtitle = styled.h2 < { color: string }> `
  font-size: clamp(1.6rem, 2.5vw, 3.6rem);
  font-weight: 600;
  font-family: ${serifFont.style.fontFamily};
  color: ${({ color }) => color};
  text-transform: uppercase;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;


  &::after {
    content: '';
    display: block;
    width: 100%;
    max-width: 10rem;
    height: 1px;

    background-color: ${({ color }) => color};
  }
`;

export const Text = styled.p<{ size: number, family?: string, weight?: number, color?: string }>`
  
  font-size: ${({ size }) => `clamp(1.6rem, ${size / 1.5}vw, 14rem)`};
  font-family:${({ family }) => family && sansFont.style.fontFamily};
  font-weight: ${({ weight }) => weight};
  color: ${({color}) => color};

`;