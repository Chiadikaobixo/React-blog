import { login, logout, loginTwitter, logoutTwitter } from "../../actions/auth";

test('login action object', () => {
    const uid = '123abc'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})

test('loginTwitter action object', () => {
    const uid = '123abc'
    const action = loginTwitter(uid)
    expect(action).toEqual({
        type: 'LOGIN_TWITTER',
        uid
    })
})

test('logoutTwitter action object', () => {
    const action = logoutTwitter()
    expect(action).toEqual({
        type: 'LOGOUT_TWITTER'
    })
})