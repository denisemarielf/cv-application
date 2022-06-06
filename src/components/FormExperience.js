import React from "react"
import uniqid from "uniqid"

export default class FormExperience extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            position: "",
            company: "",
            dateStart: "",
            dateFinish: "",
            isCurrent: false,
            task1: "",
            task2: "",
            task3: "",
            id: uniqid(),
            key: uniqid()
        }
    }

    onChange = (e) => {
        if (e.target.name !== "isCurrent") {
            this.setState(
            {[e.target.name]: e.target.value,
            id: uniqid(),
            key: uniqid()}
            )
        } else {
            this.setState(
               {isCurrent: e.target.checked}
            )
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getExperienceInfo(this.state)
        this.setState({
            position: "",
            company: "",
            dateStart: "",
            dateFinish: "",
            isCurrent: false,
            task1: "",
            task2: "",
            task3: "",
            id: "",
            key: ""
        })
    }

    render(){
      return (
          <>
          
        <form onSubmit={this.handleSubmit}>
            <h2>Practical experience</h2>
            <label>
                Position:
                <input type="text" name="position" value={this.state.position} onChange={this.onChange} />
            </label>
            
            <label>
                Company:
                <input type="text" name="company" value={this.state.company} onChange={this.onChange} />
            </label>
            <label className="checkbox"> 
                <input type="checkbox" name="isCurrent" value={this.state.isCurrent} onChange={this.onChange} />
                Are you currently working here?
            </label>
            <label>
                Date start:
                <input type="date" name="dateStart" value={this.state.dateStart} onChange={this.onChange} />
            </label>
          {!this.state.isCurrent &&  <label>
                Date finish:
                <input type="date" name="dateFinish" value={this.state.dateFinish} onChange={this.onChange} />
            </label> }
            
            <label>
                Main tasks:
            </label>
            <label>
                <input type="text" name="task1" value={this.state.task1} onChange={this.onChange} />
            </label>
            <label>
                <input type="text" name="task2" value={this.state.task2} onChange={this.onChange} />
            </label>
            <label>
                <input type="text" name="task3" value={this.state.task3} onChange={this.onChange} />
            </label>
            
            <button>Add</button>
        </form>

        </>
      )
    }
  }