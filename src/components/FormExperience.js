import React, { useState } from "react";
import uniqid from "uniqid";

export default function FormExperience(props) {
  const [formExperienceInfo, setFormExperienceInfo] = useState({
    position: "",
    company: "",
    dateStart: "",
    dateFinish: "",
    isCurrent: false,
    task1: "",
    task2: "",
    task3: "",
    id: uniqid(),
    key: uniqid(),
  });

  function onChange(e) {
    if (e.target.name !== "isCurrent") {
      setFormExperienceInfo((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
          id: uniqid(),
          key: uniqid(),
        };
      });
    } else {
      setFormExperienceInfo((prevState) => {
        return {
          ...prevState,
          isCurrent: e.target.checked,
        };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.getExperienceInfo(formExperienceInfo);
    setFormExperienceInfo({
      position: "",
      company: "",
      dateStart: "",
      dateFinish: "",
      isCurrent: false,
      task1: "",
      task2: "",
      task3: "",
      id: "",
      key: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Practical experience</h2>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formExperienceInfo.position}
            onChange={onChange}
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formExperienceInfo.company}
            onChange={onChange}
          />
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            name="isCurrent"
            value={formExperienceInfo.isCurrent}
            onChange={onChange}
          />
          Are you currently working here?
        </label>
        <label>
          Date start:
          <input
            type="date"
            name="dateStart"
            value={formExperienceInfo.dateStart}
            onChange={onChange}
          />
        </label>
        {!formExperienceInfo.isCurrent && (
          <label>
            Date finish:
            <input
              type="date"
              name="dateFinish"
              value={formExperienceInfo.dateFinish}
              onChange={onChange}
            />
          </label>
        )}

        <label>Main tasks:</label>
        <label>
          <input
            type="text"
            name="task1"
            value={formExperienceInfo.task1}
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="task2"
            value={formExperienceInfo.task2}
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="task3"
            value={formExperienceInfo.task3}
            onChange={onChange}
          />
        </label>

        <button>Add</button>
      </form>
    </>
  );
}
