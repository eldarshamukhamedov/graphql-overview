import React from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Avatar } from './Avatar';
import { Card } from './Card';

const Meta = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 7rem;
    ${Avatar} {
        font-size: 5rem;
        margin-left: 0.75rem;
    }
`;
const CardContent = styled.div`
    align-items: flex-start;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`;

const Name = styled.h1`
    margin: 0;
`;
const Email = styled.span`
    color: #00afff;
`;
const Occupation = styled.span``;

export const UserCard = ({ userId }) => {
    const { loading, error, data } = useQuery(
        gql`
            query GetUsers($ids: [ID!]!) {
                users(ids: $ids) {
                    id
                    avatar
                    email
                    firstName
                    lastName
                    occupation
                }
            }
        `,
        { variables: { ids: [userId] } },
    );
    const user = get(data, 'users[0]', null);
    console.debug('UserCard', { loading, error, data, user });

    if (!user) return null;
    return (
        <Card>
            <Meta>
                <Avatar src={user.avatar} />
            </Meta>
            <CardContent>
                <Name>
                    {user.firstName} {user.lastName}
                </Name>
                <Occupation>{user.occupation}</Occupation>
                <Email>{user.email}</Email>
            </CardContent>
        </Card>
    );
};
