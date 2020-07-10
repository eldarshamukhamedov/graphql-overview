import React from 'react';
import { get } from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { SectionRow, TransactionRow } from './Rows';

export const TransactionList = ({ userId }) => {
    const { loading, error, data } = useQuery(
        gql`
            query GetUsers($ids: [ID!]!) {
                users(ids: $ids) {
                    id
                    accounts {
                        id
                        name
                        transactions {
                            id
                            amount
                            message
                        }
                    }
                }
            }
        `,
        { variables: { ids: [userId] } },
    );
    console.debug('TransactionList', { loading, error, data });

    const accounts = get(data, 'users[0].accounts', []);

    return accounts.map(account => (
        <React.Fragment key={account.id}>
            <SectionRow key={account.id}>{account.name}</SectionRow>
            {account.transactions.map(transaction => (
                <TransactionRow
                    key={transaction.id}
                    amount={transaction.amount}
                    message={transaction.message}
                />
            ))}
        </React.Fragment>
    ));
};
