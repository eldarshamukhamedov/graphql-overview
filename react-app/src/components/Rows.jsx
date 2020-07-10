import React from 'react';
import styled from 'styled-components';
import { Avatar } from './Avatar';
import { Card } from './Card';

const Row = styled(Card)`
    align-items: center;
    display: inline-flex;
    height: 2.8rem;
    padding: 0 1rem;
    white-space: break-spaces;
    justify-content: space-between;
    ${Avatar} {
        line-height: 1rem;
        height: 1.5rem;
        width: 1.5rem;
    }
`;

const Number = styled.span`
    color: ${props => {
        if (props.positive) return 'green';
        if (props.negative) return 'red';
        return 'inherit';
    }};
`;
export const TransactionRow = ({ amount, message }) => (
    <Row>
        <span>
            {message}
        </span>
        <Number positive={amount > 0} negative={amount < 0}>
            ${amount.toFixed(2)}
        </Number>{' '}
    </Row>
);

export const SectionRow = styled(Row)`
    color: #666;
    font-weight: 600;
`;


/*
from <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg" /> Lauren S.
*/