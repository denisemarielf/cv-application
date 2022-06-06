import React from "react"
import EducationItem from "./EducationItem"

export default class DisplayEducationForm extends React.Component {

    render() {
        const data = this.props.data.education.map(item => {
            return (
                <EducationItem 
                id={item.id} 
                key={item.key} 
                title={item.title}
                institution={item.institution}
                date={item.date}
                edit={this.props.edit}
                delete={this.props.delete}
                />
            )
        })

    return (
      <>
          {data}
      </>
    )
  }
  }