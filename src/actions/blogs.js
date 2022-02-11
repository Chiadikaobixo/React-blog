import db from '../firebase/firebase'
import {push, ref} from 'firebase/database'

//ADD_BLOG
export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
})

export const startAddBlog = (blogData = {}) => {
    return(dispatch) =>{
        const{description = '', note = '', createdAt = 0}=blogData
        const blog = {description, note, createdAt}
        return push(ref(db, 'blogs'), {
            ...blog
        }).then((ref) => {
            dispatch(addBlog({
                id: ref.key,
                ...blog
            }))
        })
    }
}
//REMOVE_BLOG
export const removeBlog = ({id} = {}) =>  ({
    type: 'REMOVE_BLOG',
    id
})

//EDIT_BLOG
export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
})
