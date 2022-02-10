import getVisibleBlogs from '../../selectors/blogs'
import blogs from '../fixtures/blogs'

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date'
    }
    const result = getVisibleBlogs(blogs, filters)
    expect(result).toEqual([blogs[2], blogs[1]])
})

test('should sortBy Date', () => {
    const filters = {
        text: '',
        sortBy: 'date'
    }
    const result = getVisibleBlogs(blogs, filters)
    expect(result).toEqual([blogs[2], blogs[0], blogs[1]])
})