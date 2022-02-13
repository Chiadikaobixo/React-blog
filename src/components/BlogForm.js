import React from "react";
import moment from 'moment'

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.blog ? props.blog.description : '',
            note: props.blog ? props.blog.note : '',
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

        if (!this.state.description) {
            this.setState(() => ({ error: 'please provide a description' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <p className="form__error">{this.state.error}</p>
                    <input
                        type="text"
                        placeholder="description"
                        className="text-input"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <textarea
                        type="text"
                        className="textarea"
                        placeholder="Add a note for your Blog (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">save Post</button>
                    </div>
                </form>
            </div>
        )
    }
}