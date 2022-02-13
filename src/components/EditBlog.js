import React from "react";
import { connect } from "react-redux";
import { startEditBlog, startRemoveBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";

const EditBlog = (props) => {
  return(
    <div className="content-container">
      <BlogForm
         blog={props.blog}
         onSubmit={(blog) => {
           props.dispatch(startEditBlog(props.blog.id, blog))
           props.history.push('/dashboard')
         }} 
      />
      <button className="button button--secondary" onClick={() => {
        props.dispatch(startRemoveBlog({id: props.blog.id}))
        props.history.push('/dashboard')
       }}>Remove Post</button>
    
    </div>
  )
}
const mapStateToProps = (state, props) => {
  return{
    blog: state.blogs.find((blog) => blog.id === props.match.params.id) 
  }
}
export default connect(mapStateToProps)(EditBlog)