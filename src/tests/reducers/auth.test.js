import authReducer from "../../reducers/auth";

test('uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('uid from logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'blog'}, action)
    expect(state).toEqual({})
})
