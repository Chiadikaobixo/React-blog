import db from '../firebase/firebase'
import {push, ref, get, remove, update} from 'firebase/database'

//ADD_BLOG
export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
})

export const startAddBlog = (blogData = {}) => {
    return(dispatch, getState) =>{
        const uid = getState().auth.uid
        const{description = '', note = '', createdAt = 0}=blogData
        const blog = {description, note, createdAt}
        return push(ref(db, `users/${uid}/blogs`), {
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

export const startRemoveBlog = ({id} = {}) => {
    return(dispatch, getState) => {
       const uid = getState().auth.uid
       return remove(ref(db, `users/${uid}/blogs/${id}`)).then(() => {
        dispatch(removeBlog({id}))
       })
    }
}


//EDIT_BLOG
export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
})

export const startEditBlog = (id, updates) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid
        return update(ref(db, `users/${uid}/blogs/${id}`), updates).then(() => {
            dispatch(editBlog(id, updates))
        })
    }
}

//SET ADD_BLOG
export const setAddBlog = (blogs) => ({
    type: 'SET_BLOG',
    blogs
})

export const startSetAddBlog = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return get(ref(db, `users/${uid}/blogs`)).then((snapshot) => {
            const blogs = []
            
            snapshot.forEach((childSnapshot) => {
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setAddBlog(blogs))
        })
    }
}

export const startSetAddTwitter = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return get(ref(db, `users/${uid}/blogs`)).then((snapshot) => {
            const blogs = []
            
            snapshot.forEach((childSnapshot) => {
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setAddBlog(blogs))
        })
    }
}