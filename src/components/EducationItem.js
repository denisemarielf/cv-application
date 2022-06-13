import React, { useState } from "react";
import editIcon from "../pen-to-square-solid.svg";
import deleteIcon from "../trash-can-solid.svg";

export default function EducationItem(props) {
  const [educationItemDetails, setEducationItemDetails] = useState({
    isShown: false,
    editMode: false,
    titleEdit: "",
    institutionEdit: "",
    dateEdit: "",
  });

  function setIsShown(option) {
    setEducationItemDetails((prevState) => {
      return {
        ...prevState,
        isShown: option,
      };
    });
  }

  function setEditMode(option) {
    setEducationItemDetails((prevState) => {
      return {
        ...prevState,
        editMode: option,
      };
    });
  }

  function setNewValues(e) {
    setEducationItemDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div
      className="education-item"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      id={props.id}
      key={props.key}
    >
      <div className="info-container">
        {educationItemDetails.editMode === false && (
          <h6>{props.institution}</h6>
        )}

        {educationItemDetails.editMode && (
          <input
            name="titleEdit"
            placeholder="Add new title"
            onChange={setNewValues}
          />
        )}

        {educationItemDetails.editMode === false && (
          <p>
            {props.title}, {props.date.slice(0, 4)}
          </p>
        )}

        {educationItemDetails.editMode && (
          <input
            name="institutionEdit"
            placeholder="Add new institution"
            onChange={setNewValues}
          />
        )}

        {educationItemDetails.editMode && (
          <input name="dateEdit" type="date" onChange={setNewValues} />
        )}

        {educationItemDetails.editMode === true && (
          <button
            onClick={() => {
              props.edit(
                props.id,
                educationItemDetails.titleEdit,
                educationItemDetails.institutionEdit,
                educationItemDetails.dateEdit
              );
              setEditMode(false);
            }}
          >
            Done
          </button>
        )}
      </div>
      <div className="button-container">
        {educationItemDetails.isShown &&
          educationItemDetails.editMode === false && (
            <button className="button-edit" onClick={() => setEditMode(true)}>
              <img alt="icon-edit" src={editIcon}></img>
            </button>
          )}

        {educationItemDetails.isShown &&
          educationItemDetails.editMode === false && (
            <button
              className="button-delete"
              onClick={() => props.delete(props.id)}
            >
              <img alt="icon-delete" src={deleteIcon}></img>
            </button>
          )}
      </div>
    </div>
  );
}
