import { addBlog, removeBlog, editBlog } from "../../actions/blogs";

test('should setup addblog action object with provided values', () => {
    const blogData = {
        description: 'house',
        note: 'my house rent',
        createdAt: 0
    }
    const action = addBlog(blogData)
    expect(action).toEqual({
        type: 'ADD_BLOG',
        blog: {
            ...blogData,
            id: expect.any(String)
        }
    })
})

test('should setup addblog action object with defaults values', () => {
    const action = addBlog()
    expect(action).toEqual({
        type: 'ADD_BLOG',
        blog: {
            description: '',
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
})

test('should setup removeblog action objects', () => {
    const action = removeBlog({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_BLOG',
        id: '123abc'
    })
})

test('should setup editBlog action objects', () => {
    const id = '123'
    const updates = { name: 'chiadi' }
    const action = editBlog(id, updates)
    expect(action).toEqual({
        type: 'EDIT_BLOG',
        id: '123',
        updates: {
            name: 'chiadi'
        }
    })
})