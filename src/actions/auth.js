import { provider, twitterProvider} from "../firebase/firebase";
import { getAuth, signInWithPopup, signOut} from "firebase/auth";

const auth = getAuth()

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, provider)
    }
}
export const logout = () => ({
    type: 'LOGOUT'
})
export const startLogout = () => {
    return () => {
        return signOut(auth)
    }
}

export const loginTwitter = (uid) => ({
    type: 'LOGIN_TWITTER',
    uid
})

export const startLoginTwitter = () => {
    return () => {
        return signInWithPopup(auth, twitterProvider)
    }
}
export const logoutTwitter = () => ({
    type: 'LOGOUT_TWITTER'
})
export const startLogoutTwitter = () => {
    return () => {
        return signOut(auth)
    }
}
