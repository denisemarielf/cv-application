import React from "react"
import uniqid from "uniqid"

export default class FormGeneral extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: "",
            surname: "",
            position: "",
            aboutMe: "",
            phone: "",
            email: "",
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
        this.props.getGeneralInfo(this.state)
        this.setState({
            name: "",
            surname: "",
            position: "",
            aboutMe: "",
            phone: "",
            email: "",
            id: "",
            key: ""
        })
    }

    render(){

      return (
          <>
        <form onSubmit={this.handleSubmit}>
            <h2>Personal information</h2>
            <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
            </label>
            
            <label>
                Surname:
                <input type="text" name="surname" value={this.state.surname} onChange={this.onChange} />
            </label>
            <label>
                Position:
                <input type="text" name="position" value={this.state.position} onChange={this.onChange} />
            </label>
            <label>
                About:
                <textarea type="text" name="aboutMe" value={this.state.aboutMe} onChange={this.onChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="phone" value={this.state.phone} onChange={this.onChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={this.state.email} onChange={this.onChange} />
            </label>
            <button>Add</button>
        </form>

        </>
      )
    }
  }
  