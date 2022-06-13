import React, { useState } from "react";
import editIcon from "../pen-to-square-solid.svg";
import deleteIcon from "../trash-can-solid.svg";

export default function ExperienceItem(props) {
  const [experienceItemDetails, setExperienceItemDetails] = useState({
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
  });

  function setIsShown(option) {
    setExperienceItemDetails((prevState) => {
      return {
        ...prevState,
        isShown: option,
      };
    });
  }

  function setEditMode(option) {
    setExperienceItemDetails((prevState) => {
      return {
        ...prevState,
        editMode: option,
      };
    });
  }

  function setNewValues(e) {
    if (e.target.name !== "isCurrentEdit") {
      setExperienceItemDetails((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    } else {
      setExperienceItemDetails((prevState) => {
        return {
          ...prevState,
          isCurrentEdit: e.target.checked,
        };
      });
    }
  }

  return (
    <div
      className="experience-item"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      id={props.id}
      key={props.key}
    >
      <div className="info-container">
        {experienceItemDetails.editMode === false && <h6>{props.position}</h6>}

        {experienceItemDetails.editMode && (
          <input
            name="positionEdit"
            placeholder="Add new position"
            onChange={setNewValues}
          />
        )}

        {experienceItemDetails.editMode === false && (
          <p>
            {props.company}, {props.dateStart.slice(0, 4)} -{" "}
            {props.isCurrent ? "present" : props.dateFinish.slice(0, 4)}
          </p>
        )}

        {experienceItemDetails.editMode && (
          <input
            name="companyEdit"
            placeholder="Add new company"
            onChange={setNewValues}
          />
        )}

        {experienceItemDetails.editMode && (
          <input
            name="dateStartEdit"
            placeholder="Add new start date"
            type="date"
            onChange={setNewValues}
          />
        )}

        {experienceItemDetails.editMode &&
          !experienceItemDetails.isCurrentEdit && (
            <input
              name="dateFinishEdit"
              placeholder="Add new finish date"
              type="date"
              onChange={setNewValues}
            />
          )}

        {experienceItemDetails.editMode && (
          <label className="checkbox">
            <input
              name="isCurrentEdit"
              type="checkbox"
              onChange={setNewValues}
            />
            Are you currently working here?
          </label>
        )}

        {experienceItemDetails.editMode === false && (
          <ul>
            <li>{props.task1}</li>
            <li>{props.task2}</li>
            <li>{props.task3}</li>
          </ul>
        )}

        {experienceItemDetails.editMode && (
          <>
            <input
              placeholder="Task 1"
              name="task1Edit"
              onChange={setNewValues}
            />
            <input
              placeholder="Task 2"
              name="task2Edit"
              onChange={setNewValues}
            />
            <input
              placeholder="Task 3"
              name="task3Edit"
              onChange={setNewValues}
            />
          </>
        )}

        {experienceItemDetails.editMode === true && (
          <button
            onClick={() => {
              props.edit(
                props.id,
                experienceItemDetails.positionEdit,
                experienceItemDetails.companyEdit,
                experienceItemDetails.dateStartEdit,
                experienceItemDetails.dateFinishEdit,
                experienceItemDetails.isCurrentEdit,
                experienceItemDetails.task1Edit,
                experienceItemDetails.task2Edit,
                experienceItemDetails.task3Edit
              );
              setEditMode(false);
            }}
          >
            Done
          </button>
        )}
      </div>
      <div className="button-container">
        {experienceItemDetails.isShown &&
          experienceItemDetails.editMode === false && (
            <button className="button-edit" onClick={() => setEditMode(true)}>
              <img alt="icon-edit" src={editIcon}></img>
            </button>
          )}

        {experienceItemDetails.isShown &&
          experienceItemDetails.editMode === false && (
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
