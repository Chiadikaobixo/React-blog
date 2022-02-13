import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {
    startAddBlog,
    addBlog,
    removeBlog,
    startRemoveBlog, 
    editBlog,
    setAddBlog,
    startSetAddBlog,
    startEditBlog
} from "../../actions/blogs";
import blogs from '../fixtures/blogs'
import db from '../../firebase/firebase'
import { get, ref, set } from 'firebase/database';


const uid = 'mytestuid'
const defaultAuthState = { auth: { uid } } 
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const blogData = {}
    blogs.forEach(({ id, description, note, createdAt }) => {
        blogData[id] = { description, note, createdAt }
    })
    set(ref(db, `users/${uid}/blogs`), blogData).then(() => done())
})


test('should setup addblog action object with provided values', () => {
    const action = addBlog(blogs[1])
    expect(action).toEqual({
        type: 'ADD_BLOG',
        blog: blogs[1]
    })
})

test('should add blog to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
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
        return get(ref(db, `users/${uid}/blogs/${action[0].blog.id}`))
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(blogData)
        done()
    })
})

test('should add blog with default to database and store', () => {
    const store = createMockStore(defaultAuthState)
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
                ...blogDataDefault
            }
        })
        return get(ref(db, `users/${uid}/blogs/${action[0].blog.id}`))
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

test('should remove blog from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = blogs[2].id
    store.dispatch(startRemoveBlog({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_BLOG',
            id
        })
        return get(ref(db, `users/${uid}/blogs/${id}`))
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
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

test('should edit blog from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = blogs[1].id
    const updates = { description: 'my new note' }
    store.dispatch(startEditBlog(id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[1]).toEqual({
            type: 'EDIT_BLOG',
            id,
            updates
        })
        return get(ref(db, `users/${uid}/blogs/${id}`))
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description)
        done()
    })
})

test('should setup set blog', () => {
    const action = setAddBlog(blogs)
    expect(action).toEqual({
        type: 'SET_BLOG',
        blogs
    })
})

test('should fetch the blog from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetAddBlog()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_BLOG',
            blogs
        })
        done()
    })
})