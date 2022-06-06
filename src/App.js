import React from "react";
import FormGeneral from "./components/FormGeneral"
import FormEducation from "./components/FormEducation";
import FormExperience from "./components/FormExperience";
import DisplayEducationForm from "./components/DisplayEducationForm";
import DisplayExperienceForm from "./components/DisplayExperienceForm";
import CV from "./components/CV";
import printLogo from "./print-solid.svg"
import returnLogo from "./arrow-back.svg"

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      general: {},
      education: [],
      experience: [],
      printMode: false,
      display: 'block'
    }
  }

  getGeneralInfo = ({name, surname, position, aboutMe, phone, email, id, key}) => {
    this.setState(prevState => {
      return {
        general: {name: name, surname: surname, position: position, aboutMe: aboutMe, phone: phone, email: email, id: id, key: id}
      }
    })
  }
  getEducationInfo = ({title, institution, date, id}) => {
    this.setState(prevState => {
      return {
        education: [...prevState.education, {title: title, institution: institution, date: date, id: id}]
      }
    })
  }

  getExperienceInfo = ({position, company, dateStart, dateFinish, isCurrent, task1, task2, task3, id, key}) => {
    this.setState(prevState => {
      return {
        experience: [...prevState.experience, {
          position: position,
          company: company,
          dateStart: dateStart,
          dateFinish: dateFinish,
          isCurrent: isCurrent,
          task1: task1,
          task2: task2,
          task3: task3,
          id: id,
          key: key
      }]
      }
    })
  }

  editEducation = (id, newTitle, newInstitution, newDate) => {
    const newState = this.state.education.map(item =>{
        if (item.id === id) {
          return {title: newTitle, institution: newInstitution, date: newDate, id: item.id}
        } else {
          return item
        }
    })
    this.setState({education: newState})
  }

  editExperience = (id, newPosition, newCompany, newDateStart, newDateFinish, newIsCurrent, newTask1, newTask2, newTask3) => {
    const newState = this.state.experience.map(item =>{
        if (item.id === id) {
          return {position: newPosition, company: newCompany, dateStart: newDateStart, dateFinish: newDateFinish, isCurrent: newIsCurrent, task1: newTask1, task2: newTask2, task3: newTask3, id: item.id}
        } else {
          return item
        }
    })
    this.setState({experience: newState})
  }

  deleteEducationItem = (id) => {
    const newState = this.state.education.filter(item => item.id !== id)
    this.setState({education: newState})
  }

  deleteExperienceItem = (id) => {
    const newState = this.state.experience.filter(item => item.id !== id)
    this.setState({experience: newState})
  }

  setPrintMode = () => {
    this.setState(prevState => {
      return {printMode: !prevState.printMode}
    })
  }

  setDisplay = () => {
    this.setState({display: 'block'})
  }

  toggleDisplay = (option) => {
    this.setState({display: option}, function(){window.print()})
    window.onafterprint = () => {this.setDisplay()}
  }

  print = () => {
    this.toggleDisplay('none');
  }

  render() {
  return (
    <div className="App">
      {!this.state.printMode && <header>
        <h1>Create your CV</h1>
      </header> }
     <main>
     {!this.state.printMode && <div className="forms-container">
      <FormGeneral getGeneralInfo={this.getGeneralInfo}/>
      <FormEducation getEducationInfo={this.getEducationInfo}/>
      <FormExperience getExperienceInfo={this.getExperienceInfo}/>
      </div>}
      <CV
      general={this.state.general} 
      displayEducation={<DisplayEducationForm data={this.state} edit={this.editEducation} delete={this.deleteEducationItem}/>}
      displayExperience={<DisplayExperienceForm data={this.state} edit={this.editExperience} delete={this.deleteExperienceItem}/>}
      />
    <div className="print-button-container">
        {!this.state.printMode && <button onClick={this.setPrintMode}>
          <img src={printLogo} alt="print-logo"></img>
          </button>}
        {this.state.printMode && <button style={{'display': this.state.display}} onClick={this.setPrintMode}>
        <img src={returnLogo} alt="return-logo"></img>
          </button>}
        {this.state.printMode && <button style={{'display': this.state.display}} onClick={() => this.print()}>
          <img src={printLogo} alt="print-logo"></img>
          </button>}
      </div> 
      </main>
      
    </div>
  )
}
}

