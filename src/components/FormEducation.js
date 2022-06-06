import React from "react"
import uniqid from "uniqid"

export default class Form extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: "",
            institution: "",
            date: "",
            id: uniqid(),
            key: uniqid()
        }
    }

    onChange = (e) => {
        this.setState(
            {[e.target.name]: e.target.value,
            id: uniqid(),
            key: uniqid()}
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getEducationInfo(this.state)
        this.setState({
            title: "",
            institution: "",
            id: "",
            key: ""
        })
    }

    render(){
      return (
          <>
        <form onSubmit={this.handleSubmit}>
        <h2>Educational experience</h2>
            <label>
                Title:
                <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
            </label>
            
            <label>
                Institution:
                <input type="text" name="institution" value={this.state.institution} onChange={this.onChange} />
            </label>
            <label>
                Date:
                <input type="date" name="date" value={this.state.date} onChange={this.onChange} />
            </label>
            <button>Add</button>
        </form>

        </>
      )
    }
  }
  