export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                uid: action.uid
            }
        case 'LOGOUT':
            return {}
        case 'LOGIN_TWITTER':
            return {
                uid: action.uid
            }
        case 'LOGOUT_TWITTER':
            return {}   
        default: 
            return state    
    }
}