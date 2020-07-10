const users = [
    {
        id: '8f0649fa-172a-4de4-a291-b0f3bd0aefea',
        firstName: 'Robbie',
        lastName: 'Emard',
        email: 'robbie.emard@gmail.com',
        occupation: 'Software Engineer',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg',
    },
    {
        id: 'd19ca52c-942c-4a26-8527-5e27d35b86ab',
        firstName: 'Lauren',
        lastName: 'Still',
        email: 'lauren.still@gmail.com',
        occupation: 'Software Engineer',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/megdraws/128.jpg',
    },
];
export const getUsers = (ids = []) => users.filter(user => ids.includes(user.id));

const accounts = [
    {
        id: 'a4b334f8-04f2-47c7-8d29-23291d235e7a',
        name: 'Chase checking (0023)',
        user: '8f0649fa-172a-4de4-a291-b0f3bd0aefea',
    },
    {
        id: '960246f5-5ba2-4ee0-bbdc-d2b0715d405d',
        name: 'Discover card (4412)',
        user: '8f0649fa-172a-4de4-a291-b0f3bd0aefea',
    },
    {
        id: '468148d2-1f3f-4919-80f5-d6d50a2bd324',
        name: 'Wells Fargo (9950)',
        user: 'd19ca52c-942c-4a26-8527-5e27d35b86ab',
    },
];
export const getAccounts = (ids = []) => accounts.filter(account => ids.includes(account.id));
export const getAccountsByUser = userId => accounts.filter(account => account.user === userId);

const transactions = [
    {
        id: '59ce3a09-2d63-4929-ad3d-a490c24aafbd',
        from: null,
        to: 'a4b334f8-04f2-47c7-8d29-23291d235e7a',
        amount: -65.12,
        message: 'Groceries 🌮',
    },
    {
        id: 'b6d2686d-7b9e-444c-84bc-bfe40ce6a756',
        from: null,
        to: 'a4b334f8-04f2-47c7-8d29-23291d235e7a',
        amount: 1391.98,
        message: 'Tax return 🇺🇸',
    },
    {
        id: 'ac4fc138-de7c-4ed0-a2d0-4d7eccd6bd19',
        from: '468148d2-1f3f-4919-80f5-d6d50a2bd324',
        to: 'a4b334f8-04f2-47c7-8d29-23291d235e7a',
        amount: 120.0,
        message: 'Venmo ✉️',
    },
    {
        id: '9309cb25-40f8-4126-9362-67c863100242',
        from: null,
        to: 'a4b334f8-04f2-47c7-8d29-23291d235e7a',
        amount: -120.0,
        message: 'Internet 🖥',
    },
    {
        id: '9dd09f25-21c2-45ac-a553-52cd7ab8b8d4',
        from: null,
        to: 'a4b334f8-04f2-47c7-8d29-23291d235e7a',
        amount: -2500.0,
        message: 'Rent 🏠',
    },
    {
        id: '06d68d10-4fc6-4bda-b354-7992dd13a8b3',
        from: null,
        to: '960246f5-5ba2-4ee0-bbdc-d2b0715d405d',
        amount: -9.99,
        message: 'Netflix 🎬',
    },
];

export const getTransactions = (ids = []) =>
    transactions.filter(transaction => ids.includes(transaction.id));
export const getTransactionsByAccount = accountId =>
    transactions.filter(transaction => transaction.to === accountId);
