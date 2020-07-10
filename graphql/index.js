import apollo from 'apollo-server';
import lodash from 'lodash';
import {
    getAccounts,
    getAccountsByUser,
    getTransactions,
    getTransactionsByAccount,
    getUsers,
} from './apis.js';

const { head, defaultTo } = lodash;
const { ApolloServer, gql } = apollo;

const typeDefs = gql`
    """
    Users that can have accounts
    """
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        occupation: String!
        avatar: String!
        accounts: [Account]
    }

    """
    Accounts can have transactions and belong to users
    """
    type Account {
        id: ID!
        name: String
        user: User
        transactions: [Transaction]
    }

    type Transaction {
        id: ID!
        from: Account
        to: Account!
        amount: Float
        message: String
    }

    type Query {
        """
        Get users by list of IDs
        """
        users(ids: [ID!]!): [User]
        accounts(ids: [ID!]!): [Account]
        transactions(ids: [ID!]!): [User]
    }
`;

const resolvers = {
    Query: {
        users: (parent, { ids }) => getUsers(ids), //User { ...user, accounts: []}
        accounts: (parent, { ids }) => getAccounts(ids),
        transactions: (parent, { ids }) => getTransactions(ids),
    },

    User: {
        accounts: parent => getAccountsByUser(parent.id),
    },

    Account: {
        user: parent => head(getUsers(parent.user)),
        transactions: parent => getTransactionsByAccount(parent.id),
    },

    Transaction: {
        to: parent => head(getAccounts([parent.to])),
        from: parent => defaultTo(head(getAccounts([parent.from])), null),
    },
};

// Start server
(async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
})();
