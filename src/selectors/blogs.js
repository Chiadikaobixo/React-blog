//Get visible Blogs
export default (blogs, { text, sortBy }) => {
    return blogs.filter((blog) => {
        const textMatch = blog.description.toLowerCase().includes(text.toLowerCase())
        return textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'description') {
            return a.description < b.description ? -1 : 1
        }
    })
}