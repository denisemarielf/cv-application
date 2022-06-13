import React, { useState } from "react";
import uniqid from "uniqid";

export default function FormGeneral(props) {
  const [formGeneralInfo, setFormGeneralInfo] = useState({
    name: "",
    surname: "",
    position: "",
    aboutMe: "",
    phone: "",
    email: "",
    id: uniqid(),
    key: uniqid(),
  });

  function onChange(e) {
    setFormGeneralInfo((prevState) => {
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
    props.getGeneralInfo(formGeneralInfo);
    setFormGeneralInfo({
      name: "",
      surname: "",
      position: "",
      aboutMe: "",
      phone: "",
      email: "",
      id: "",
      key: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Personal information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formGeneralInfo.name}
            onChange={onChange}
          />
        </label>

        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={formGeneralInfo.surname}
            onChange={onChange}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formGeneralInfo.position}
            onChange={onChange}
          />
        </label>
        <label>
          About:
          <textarea
            type="text"
            name="aboutMe"
            value={formGeneralInfo.aboutMe}
            onChange={onChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formGeneralInfo.phone}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formGeneralInfo.email}
            onChange={onChange}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
}
