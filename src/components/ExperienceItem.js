import React from "react";
import editIcon from "../pen-to-square-solid.svg";
import deleteIcon from "../trash-can-solid.svg"

export default class ExperienceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      editMode: false,
      positionEdit: "",
      companyEdit: "",
      dateStartEdit: "",
      dateFinishEdit: "",
      isCurrentEdit: false,
      task1Edit: "",
      task2Edit: "",
      task3Edit: "",
    };
  }

  setIsShown = (option) => {
    this.setState({ isShown: option });
  };

  setEditMode = (option) => {
    this.setState({ editMode: option });
  };

  setNewValues = (e) => {
    if (e.target.name !== "isCurrentEdit") {
        this.setState(
        {[e.target.name]: e.target.value}
        )
    } else {
        this.setState(
           {isCurrentEdit: e.target.checked}
        )
    }
  };


  render() {
    return (
      <div 
        className="experience-item"
        onMouseEnter={() => this.setIsShown(true)}
        onMouseLeave={() => this.setIsShown(false)}
        id={this.props.id}
        key={this.props.key}
      >
        <div className="info-container">
        {this.state.editMode === false && <h6>{this.props.position}</h6>}

        {this.state.editMode && (
          <input name="positionEdit" placeholder="Add new position" onChange={this.setNewValues} />
        )}

        {this.state.editMode === false && <p>{this.props.company}, {this.props.dateStart.slice(0, 4)} - {this.props.isCurrent ? "present" : this.props.dateFinish.slice(0, 4)}</p>}

        {this.state.editMode && (
        <input name="companyEdit" placeholder="Add new company" onChange={this.setNewValues} />
        )}

        {this.state.editMode && (
          <input name="dateStartEdit" placeholder="Add new start date" type="date" onChange={this.setNewValues} />
        )}

        {this.state.editMode && !this.state.isCurrentEdit && (
        <input name="dateFinishEdit" placeholder="Add new finish date" type="date" onChange={this.setNewValues} />
        )}

        {this.state.editMode && (
          <label className="checkbox">
          <input name="isCurrentEdit" type="checkbox" onChange={this.setNewValues} />
          Are you currently working here?
        </label>
        )}

        

        {this.state.editMode === false && 
          <ul>
              <li>{this.props.task1}</li>
              <li>{this.props.task2}</li>
              <li>{this.props.task3}</li>
          </ul>}
        
        {this.state.editMode && (
          <>
            <input placeholder="Task 1" name="task1Edit" onChange={this.setNewValues} />
            <input placeholder="Task 2" name="task2Edit" onChange={this.setNewValues} />
            <input placeholder="Task 3" name="task3Edit" onChange={this.setNewValues} />
          </>
        
        )}

        {this.state.editMode === true && (
          <button
            onClick={() => {
              this.props.edit(
                this.props.id,
                this.state.positionEdit,
                this.state.companyEdit,
                this.state.dateStartEdit,
                this.state.dateFinishEdit,
                this.state.isCurrentEdit,
                this.state.task1Edit,
                this.state.task2Edit,
                this.state.task3Edit,
              );
              this.setEditMode(false);
            }}
          >
            Done
          </button>
        
        )}
        </div>
        <div className="button-container">
        {this.state.isShown && this.state.editMode === false && (
          <button className="button-edit" onClick={() => this.setEditMode(true)}><img alt="icon-edit" src={editIcon}></img></button>
        )}

        {this.state.isShown && this.state.editMode === false && (
          <button className="button-delete" onClick={() => this.props.delete(this.props.id)}><img alt="icon-delete" src={deleteIcon}></img></button>
        )}
        </div>
      </div>
    );
  }
}
