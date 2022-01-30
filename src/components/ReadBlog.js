import React from "react";

const ReadBlog = (props) => {
    console.log(props)
    return(
        <div>
           <h3>{props.description}</h3>
           <p>{props.note}</p>
           <p>dddd</p>
        </div>
    )
}
export default ReadBlog