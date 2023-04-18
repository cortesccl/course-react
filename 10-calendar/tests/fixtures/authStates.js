

export const initialState = {
    status: 'checking', //'authenticated', 'checking', 'not-authenticated'
    user: {},
    errorMessage: undefined,
}

export const authenticatedState = {
    status: 'authenticated', //'authenticated', 'checking', 'not-authenticated'
    user: {
        uid: 'abc',
        name: 'Sara'
    },
    errorMessage: undefined,
}

export const notAuthenticatedState = {
    status: 'not-authenticated', //'authenticated', 'checking', 'not-authenticated'
    user: {},
    errorMessage: undefined,
}