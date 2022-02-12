import React from "react";
import { connect } from "react-redux";
import { startEditBlog, startRemoveBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";

const EditBlog = (props) => {
  return(
    <div>
    <a href="/read/:id">link</a>
      <h3> Edit Blog</h3>
      <BlogForm
         blog={props.blog}
         onSubmit={(blog) => {
           props.dispatch(startEditBlog(props.blog.id, blog))
           props.history.push('/dashboard')
         }} 
      />
      <button onClick={() => {
        props.dispatch(startRemoveBlog({id: props.blog.id}))
        props.history.push('/dashboard')
       }}>Remove post</button>
    
    </div>
  )
}
const mapStateToProps = (state, props) => {
  return{
    blog: state.blogs.find((blog) => blog.id === props.match.params.id) 
  }
}
export default connect(mapStateToProps)(EditBlog)