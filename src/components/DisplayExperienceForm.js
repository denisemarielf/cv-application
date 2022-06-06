import React from "react"
import ExperienceItem from "./ExperienceItem"

export default class DisplayExperienceForm extends React.Component {
    
    render() {
        const data = this.props.data.experience.map(item => {
            return (
                <ExperienceItem 
                position={item.position}
                company={item.company}
                dateStart={item.dateStart}
                dateFinish={item.dateFinish}
                isCurrent={item.isCurrent}
                task1={item.task1}
                task2= {item.task2}
                task3= {item.task3}
                id={item.id}
                key= {item.key}
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