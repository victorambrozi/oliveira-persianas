"use client";
import styled from "styled-components";
import Image from "next/image";
import ServicesComponent from "./components/services/index";

// assets
import { FaAngleDoubleDown } from 'react-icons/fa'
import bgMain from "../public/bg-intro__intro.svg"
import  ProductComponent  from "./components/products/index";

// global components styled-components
import { colors, sansFont, serifFont } from "./styles/global";
import { Text } from "./styles/global";

const Intro = styled.section`
  width: 100%;
  height: 100vh;

  padding: 4rem 8rem;
  
  position: relative;
  
  
  > img {
    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;

    object-fit: cover;
    z-index: -1;
  }

  p {
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  margin-top: 16rem;
  font-family: ${serifFont.style.fontFamily};
  font-size: clamp(4.8rem, 4vw, 7.2rem);
  line-height: 72px;
  font-weight: 700;

  color: ${colors.greyTwo};

`;

const Icon = styled.div`
  position: absolute;

  bottom: 60px;
  left: calc(100% - 50%);
`;

export default function Home() {
  return (
    <main>
      <Intro>
        <Image src={bgMain} alt="Imagem de fundo"/>
        <Title>
          <Text size={3.2} weight={300} family={sansFont.style.fontFamily}>
            Prazer, somos a
          </Text>
          Oliveira persianas
        </Title>
        <Text size={2.4} color={colors.greyTwo}>Trazendo mais elegância para seu ambiente</Text>
        <Icon>
          <FaAngleDoubleDown size={40} color={colors.greyTwo}/>
        </Icon>
      </Intro>
      <ProductComponent />
      <ServicesComponent /> 
    </main>
  )
}
