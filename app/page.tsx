"use client";
import styled from "styled-components";
import { sansFont, serifFont } from "./styles/global";

// assets
import { FaAngleDoubleDown } from 'react-icons/fa'
import bgMain from "../public/bg-intro__intro.svg"

const Main = styled.main`
  width: 100%;
  height: 100vh;

  padding: 4rem 8rem;

  display: flex;
  justify-content: flex-start;
  background-image: url(${bgMain});
  position: relative;

`;

const Title = styled.h1`
  margin-top: 8rem;
  font-family: ${serifFont.style.fontFamily};
  font-size: 7.2rem;
  line-height: 72px;
  font-weight: 700;

`;

const Text = styled.p<{ size: number, family?: string, weight?: number }>`
  margin-top: 2rem;
  font-size: ${({ size }) => size.toString() + 'rem'};
  font-family:${({ family }) => family && sansFont.style.fontFamily};
  font-weight: ${({ weight }) => weight};
`;

const Icon = styled.div`
  position: absolute;

  bottom: 100px;
  left: 50%;
`;

export default function Home() {
  return (
    <Main>
      <div>
        <Title>
          <Text size={3.2} weight={300}>Prazer, somos a </Text>
          Oliveira persianas
        </Title>
        <Text size={2.4}>Trazendo mais elegância para seu ambiente</Text>
        <Icon>
          <FaAngleDoubleDown size={40}/>
        </Icon>
      </div>
    </Main>
  )
}
