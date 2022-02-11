import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { startAddBlog, addBlog, removeBlog, editBlog } from "../../actions/blogs";
import blogs from '../fixtures/blogs'
import db from '../../firebase/firebase'
import { get, ref } from 'firebase/database';

const createMockStore = configureMockStore([thunk])

test('should setup addblog action object with provided values', () => {
    const action = addBlog(blogs[1])
    expect(action).toEqual({
        type: 'ADD_BLOG',
        blog: blogs[1]
    })
})

test('should add blog to database and store', (done) => {
    const store = createMockStore({})
    const blogData = {
        description: 'chelsea',
        note: 'chelsea player',
        createdAt: 23333
    }
    store.dispatch(startAddBlog(blogData)).then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'ADD_BLOG',
            blog: {
                id: expect.any(String),
                ...blogData
            }
        })
        return get(ref(db, `blogs/${action[0].blog.id}`))
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(blogData)
            done()
    })
})

test('should add blog with default to database and store', () => {
    const store = createMockStore({})
    const blogDataDefault = {
        description: '',
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddBlog(blogDataDefault)).then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual({
            type: 'ADD_BLOG',
            blog: {
                id: expect.any(String),
                ...blogData
            }
        })
        return get(ref(db, `blogs/${action[0].blog.id}`))
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(blogDataDefault)
            done()
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