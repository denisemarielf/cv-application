import React from "react";
import EducationItem from "./EducationItem";

export default function DisplayEducationForm(props) {
  const data = props.data.education.map((item) => {
    return (
      <EducationItem
        id={item.id}
        key={item.key}
        title={item.title}
        institution={item.institution}
        date={item.date}
        edit={props.edit}
        delete={props.delete}
      />
    );
  });

  return <>{data}</>;
}
