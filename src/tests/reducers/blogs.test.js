import blogsReducers from '../../reducers/blogs'
import blogs from '../fixtures/blogs'

test('set up default blog reducer', () => {
    const result = blogsReducers(undefined, { type: '@@INIT' })
    expect(result).toEqual([])
})

test('setup addBlog', () => {
    const blog = {
        id: '123abc',
        description: 'car',
        note: 'here i am',
        createdAt: 0
    }
    const action = {
        type: 'ADD_BLOG',
        blog
    }
    const result = blogsReducers(blogs, action)
    expect(result).toEqual([...blogs, blog])
})

test('setup removeBlog with valid id', () => {
    const action = {
        type: 'REMOVE_BLOG',
        id: blogs[2].id
    }
    const result = blogsReducers(blogs, action)
    expect(result).toEqual([blogs[0], blogs[1]])
})

test('setup removeBlog with invalid id', () => {
    const action = {
        type: 'REMOVE_BLOG',
        id: '-1'
    }
    const result = blogsReducers(blogs, action)
    expect(result).toEqual([...blogs])
})

test('setup editBlog ', () => {
    const text = 'my text'
    const action = {
        type: 'EDIT_BLOG',
        id: blogs[1].id,
        updates: {
            text
        }
    }
    const result = blogsReducers(blogs, action)
    expect(result[1].text).toEqual(text)
})

test('should not editBlog if blog not found ', () => {
    const text = 'my text'
    const action = {
        type: 'EDIT_BLOG',
        id: '-7',
        text
    }
    const result = blogsReducers(blogs, action)
    expect(result).toEqual(blogs)
})