import queryString from 'query-string';
import React, { useMemo } from 'react';
import { defaultTo } from 'lodash';
import ApolloClient from 'apollo-boost';
import { TransactionList } from './components/TransactionList';
import { Modal } from './components/Modal';
import { UserCard } from './components/UserCard';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';

export const App = () => {
    const client = useMemo(() => new ApolloClient({ uri: 'http://localhost:4000' }), []);
    const userId = defaultTo(
        queryString.parse(window.location.search).userId,
        '8f0649fa-172a-4de4-a291-b0f3bd0aefea',
    );

    return (
        <ApolloProvider client={client}>
            <Modal>
                <UserCard userId={userId} />
                <TransactionList userId={userId} />
            </Modal>
        </ApolloProvider>
    );
};
