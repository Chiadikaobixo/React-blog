import React from "react";
import moment from 'moment'

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.blog ? props.blog.description : '',
            note: props.blog ? props.blog.note :'',
            createdAt: props.blog ? moment(props.blog.createdAt) : moment(),
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description){
            this.setState(() => ({error: 'please provide a description'}))
        }else{
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return (
           <div>
             <p>{this.state.error}</p>
             <form onSubmit={this.onSubmit}>
               <input
                 type="text"
                 placeholder="description"
                 autoFocus
                 value={this.state.description}
                 onChange={this.onDescriptionChange}
               />
               <textarea
                 type="text"
                 placeholder="Add a note for your Blog (optional)"
                 value={this.state.note}
                 onChange={this.onNoteChange}
               >
               </textarea>
               <button>save Post</button>
             </form>
           </div>
        )
    }
}