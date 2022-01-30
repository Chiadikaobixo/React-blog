import { v4 as uuidv4 } from 'uuid';

//ADD_BLOG
export const addBlog = (
    {
        description = '',
        note = '',
        createdAt = 0
    } ={}
) => ({
    type: 'ADD_BLOG',
    blog: {
        id: uuidv4(),
        description,
        note,
        createdAt
    }
})
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
