import React from 'react';

import { Subtitle, Text } from '@/app/styles/styled/index';
import { colors } from '@/app/styles/global';
import styled from 'styled-components';
import { Form } from './components/form/index';

const Section = styled.section`
    padding: 6rem 8rem;
    width: 100%;

    background: ${colors.greyFour};
`;
const Content = styled.section`
    width: 100%;
    margin-top: 6rem;

    display: flex;
    justify-content: center;
    gap: 4rem;
`;
const DataContact = styled.section``;


const ContactComponent = () => {
    return (
        <Section>
            <Subtitle color={colors.greyTwo}>Contato</Subtitle>
            <Content>
                <Form />
                <DataContact>
                    <Text size={1}></Text>
                </DataContact>
            </Content>
        </Section>
    )
}

export default ContactComponent;