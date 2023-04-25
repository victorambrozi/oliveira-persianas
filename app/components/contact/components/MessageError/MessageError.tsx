import React from 'react';
import styled from 'styled-components';
import { MdOutlineErrorOutline } from "react-icons/md";

import { Text } from '@/app/styles/styled';
import { colors } from '@/app/styles/global';

const Container = styled.div`
    padding: 0.5rem;
    margin: 0.5rem 0 2rem 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    border: 3px solid ${colors.greySix};
    border-radius: 10px;
    background-color: ${colors.greyThree};
    
`;

const MessageError = ({ message }: any) => {
    return (
        <Container>
            <MdOutlineErrorOutline size={20} color='#B00B00' />
            <Text size={1} weight={500} color='#B00B00'>{message}</Text>
        </Container>
    )
}

export default MessageError;