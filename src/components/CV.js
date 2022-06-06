import React from "react";
import user from "../user.jpg";
import imageIcon from "../add-photo.png"

export default class CV extends React.Component {

    constructor(){
        super()
        this.state = {
            img: user,
            isShown: false
        }
    }

    onChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            this.setState({
              img: URL.createObjectURL(img)
            });
          }
    }

    setIsShown = () => {
        this.setState(prevState => {
            return {isShown: !prevState.isShown}
        })
    }

    changeImage = (e) => {
        e.preventDefault()
    }
    
    render(){
        return (
            <div className="cv-container">
                            <section className="image-container" onMouseEnter={this.setIsShown} onMouseLeave={this.setIsShown}>
                                <img src={this.state.img} alt="profile"/>
                               {this.state.isShown && <form onSubmit={this.changeImage}>
                                  <input onChange={this.onChange} id="file" type="file" accept="image/jpeg, image/png"></input>  
                                  <label htmlFor="file">
                                      <img id="upload-img" src={imageIcon} alt="icon-upload"></img>
                                  </label>
                                </form>}
                            </section>                            
                            <section className="personal-information-container">                               
                            <div>
                                <h5>ABOUT ME</h5>
                              {this.props.general.aboutMe ? <p className="about-paragraph">{this.props.general.aboutMe}</p> : 
                              <p className="about-paragraph">Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. 
                              Well-versed in technology and writing code to create systems that are reliable and user-friendly. 
                              Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. 
                              Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.</p>}
                            </div>
                            <div>
                                <h5>CONTACT DETAILS</h5>
                               {this.props.general.phone ? <p>Phone: {this.props.general.phone}</p> : <p>Phone: 123-456-789</p>}
                                {this.props.general.email ? <p className="email">Email: {this.props.general.email}</p> : <p className="email">Email: jane@doe.com</p>}
                                
                            </div>
                            
                </section>
                <section className="education-container">
                    <h5>EDUCATION</h5>
                   {this.props.displayEducation.props.data.education.length ? this.props.displayEducation : 
                        <>
                        <div className="info-container">
                            <h6>Amazing college</h6>
                            <p>Software engineering, 2018</p>
                       </div>
                       <div className="info-container">
                            <h6>Amazing institution</h6>
                            <p>Coding bootcamp, 2016</p>
                       </div>
                       </>}
                </section>
               <section className="name-and-position-container">
                   {this.props.general.name ? <h2 className="name-surname">{(this.props.general.name).toUpperCase()}</h2> : <h2 className="name-surname">JANE</h2>}
                   {this.props.general.surname ? <h2 className="name-surname">{(this.props.general.surname).toUpperCase()}</h2> : <h2 className="name-surname">DOE</h2>}
                   {this.props.general.position ? <h3>{(this.props.general.position).toUpperCase()}</h3> : <h3>SOFTWARE ENGINEER</h3>}
               </section>
               <section className="experience-container">
                   <h5>EXPERIENCE</h5>
                   {this.props.displayExperience.props.data.experience.length ? this.props.displayExperience : 
                   <>
                        <div className="experience-item">
                            <div className="info-container">
                                <h6>Senior engineer</h6>
                                <p>Facebook, 2020 - present</p>
                                <ul>
                                    <li>Amazing task</li>
                                    <li>Hard task</li>
                                    <li>Incredible task</li>
                                </ul>
                            </div>
                        </div>
                       
                       <div className="experience-item">
                            <div className="info-container">
                                <h6>Semi-senior engineer</h6>
                                <p>Google, 2017 - 2020</p>
                                <ul>
                                    <li>Amazing task</li>
                                    <li>Hard task</li>
                                    <li>Incredible task</li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-item">
                            <div className="info-container">
                                <h6>Junior engineer</h6>
                                <p>Amazon, 2015 - 2017</p>
                                <ul>
                                    <li>Amazing task</li>
                                    <li>Hard task</li>
                                    <li>Incredible task</li>
                                </ul>
                            </div>
                        </div>
                        </>}
               </section>
            </div>
        )
    }

}