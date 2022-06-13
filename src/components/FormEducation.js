import React, { useState } from "react";
import uniqid from "uniqid";

export default function Form(props) {
  const [formEducationInfo, setFormEducationInfo] = useState({
    title: "",
    institution: "",
    date: "",
    id: uniqid(),
    key: uniqid(),
  });

  function onChange(e) {
    setFormEducationInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
        id: uniqid(),
        key: uniqid(),
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.getEducationInfo(formEducationInfo);
    setFormEducationInfo({
      title: "",
      institution: "",
      id: "",
      key: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Educational experience</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formEducationInfo.title}
            onChange={onChange}
          />
        </label>

        <label>
          Institution:
          <input
            type="text"
            name="institution"
            value={formEducationInfo.institution}
            onChange={onChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formEducationInfo.date}
            onChange={onChange}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
}
