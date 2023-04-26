import { colors } from '@/src/app/styles/global';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

// assets
import woven from "../../../../public/images/products/c-tecido__produtos.svg";
import bVertical from "../../../../public/images/products/p-vertical__produtos.svg";
import bHorizontal from "../../../../public/images/products/p-horizontal__produtos.svg";
import special from "../../../../public/images/products/l-especial__produtos.svg";

// global components styled-components
import { Text, Subtitle } from '@/src/app/styles/styled/index';

const Section = styled.section`
    width: 100%;
    
    padding: 0 8rem;
    background: ${colors.greyFour};
    
    h2 {
        padding-top: 6rem;
    }
`;

const CardContainer = styled.div`
    width: 100%;
    padding: 6rem 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 2rem;
`;

const ProductCard = styled.div`
    width: 100%;

    border: 1px solid #000;
    position: relative;
    z-index: 0;

    > img {
        width: 100%;
        height: 100%;

        object-fit: cover;

    }

    > div {
        width: 100%;
        height: 100%;
        padding: 2rem;
        background: ${colors.greyGradient};

        position:absolute;
        top: 0;
        left: 0;
        z-index: 1;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: .5s;
        
        p {
            text-transform: uppercase;
            text-align: center;
            color: ${colors.greyTwo};
        }

        &:hover {
            opacity: 0;
        }
    }
`;

const ProductComponent = () => {
    return (
        <Section>
            <Subtitle color={colors.greyTwo}>Produtos</Subtitle>
            <CardContainer>
                <ProductCard>
                    <Image src={woven} alt='Cortina de Tecido' />
                    <div>
                        <Text size={3.2} weight={500}>Cortina <br /> de <br /> tecido</Text>
                    </div>
                </ProductCard>
                <ProductCard>
                    <Image src={bVertical} alt='Persiana vertical' />
                    <div>
                        <Text size={3.2} weight={500}>Persiana <br />vertical</Text>
                    </div>
                </ProductCard>
                <ProductCard>
                    <Image src={bHorizontal} alt='Persiana horizontal' />
                    <div>
                        <Text size={3.2} weight={500}>Persiana <br /> horizontal </Text>
                    </div>
                </ProductCard>
                <ProductCard>
                    <Image src={special} alt='Linhas Especiais' />
                    <div>
                        <Text size={3.2} weight={500}>Linhas <br /> Especiais</Text>
                    </div>
                </ProductCard>
            </CardContainer>
        </Section>
    )
}

export default ProductComponent;