// Blog Reducer
const defaultBlogReducer = []
export default (state = defaultBlogReducer, action) => {
    switch(action.type) {
    case 'ADD_BLOG':
        return [
            ...state,
            action.blog
        ]
    case 'REMOVE_BLOG':
        return state.filter(({id}) => {
            return action.id !== id
        })
    case 'EDIT_BLOG':
        return state.map((blog) => {
            if(blog.id === action.id) {
                return {
                    ...blog,
                    ...action.updates
                }
            }else {
                return blog
            }
        })
        default:
        return state
    }
}