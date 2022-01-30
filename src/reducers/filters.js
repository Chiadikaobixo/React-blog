//Fliter Reducer
const defaultFilterReducer = {
    text: '',
    sortBy: 'date' // title or date
}
export default (state = defaultFilterReducer, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
               ...state,
               text: action.text
            }
        case 'SORT_BY_TITLE':
            return {
                ...state,
                sortBy: 'title'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        default:
            return state
    }
}
