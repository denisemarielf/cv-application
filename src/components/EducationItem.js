import React from "react";
import editIcon from "../pen-to-square-solid.svg";
import deleteIcon from "../trash-can-solid.svg"


export default class EducationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      editMode: false,
      titleEdit: "",
      institutionEdit: "",
      dateEdit: "",
    };
  }

  setIsShown = (option) => {
    this.setState({ isShown: option });
  };

  setEditMode = (option) => {
    this.setState({ editMode: option });
  };

  setNewValues = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        className="education-item"
        onMouseEnter={() => this.setIsShown(true)}
        onMouseLeave={() => this.setIsShown(false)}
        id={this.props.id}
        key={this.props.key}
      >
        <div className="info-container">
        {this.state.editMode === false && <h6>{this.props.institution}</h6>}

        {this.state.editMode && (
          <input name="titleEdit" placeholder="Add new title" onChange={this.setNewValues} />
        )}

        {this.state.editMode === false && <p>{this.props.title}, {this.props.date.slice(0, 4)}</p>}

        {this.state.editMode && (
          <input name="institutionEdit" placeholder="Add new institution" onChange={this.setNewValues} />
        )}

        {this.state.editMode && (
          <input name="dateEdit" type="date" onChange={this.setNewValues} />
        )}

        {this.state.editMode === true && (
          <button
            onClick={() => {
              this.props.edit(
                this.props.id,
                this.state.titleEdit,
                this.state.institutionEdit,
                this.state.dateEdit
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
