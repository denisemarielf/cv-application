import React, { useState } from "react";
import user from "../user.jpg";
import imageIcon from "../add-photo.png";

export default function CV(props) {
  const [img, setImg] = useState(user);
  const [isShown, setIsShownState] = useState(false);

  const onChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImg(URL.createObjectURL(img));
    }
  };

  function setIsShown() {
    setIsShownState((prevState) => {
      return !prevState;
    });
  }

  function changeImage(e) {
    e.preventDefault();
  }

  return (
    <div className="cv-container">
      <section
        className="image-container"
        onMouseEnter={setIsShown}
        onMouseLeave={setIsShown}
      >
        <img src={img} alt="profile" />
        {isShown && (
          <form onSubmit={changeImage}>
            <input
              onChange={onChange}
              id="file"
              type="file"
              accept="image/jpeg, image/png"
            ></input>
            <label htmlFor="file">
              <img id="upload-img" src={imageIcon} alt="icon-upload"></img>
            </label>
          </form>
        )}
      </section>
      <section className="personal-information-container">
        <div>
          <h5>ABOUT ME</h5>
          {props.general.aboutMe ? (
            <p className="about-paragraph">{props.general.aboutMe}</p>
          ) : (
            <p className="about-paragraph">
              Experienced software engineer with a passion for developing
              innovative programs that expedite the efficiency and effectiveness
              of organizational success. Well-versed in technology and writing
              code to create systems that are reliable and user-friendly.
              Skilled leader who has the proven ability to motivate, educate,
              and manage a team of professionals to build software programs and
              effectively track changes. Confident communicator, strategic
              thinker, and innovative creator to develop software that is
              customized to meet a company’s organizational needs, highlight
              their core competencies, and further their success.
            </p>
          )}
        </div>
        <div>
          <h5>CONTACT DETAILS</h5>
          {props.general.phone ? (
            <p>Phone: {props.general.phone}</p>
          ) : (
            <p>Phone: 123-456-789</p>
          )}
          {props.general.email ? (
            <p className="email">Email: {props.general.email}</p>
          ) : (
            <p className="email">Email: jane@doe.com</p>
          )}
        </div>
      </section>
      <section className="education-container">
        <h5>EDUCATION</h5>
        {props.displayEducation.props.data.education.length ? (
          props.displayEducation
        ) : (
          <>
            <div className="info-container">
              <h6>Amazing college</h6>
              <p>Software engineering, 2018</p>
            </div>
            <div className="info-container">
              <h6>Amazing institution</h6>
              <p>Coding bootcamp, 2016</p>
            </div>
          </>
        )}
      </section>
      <section className="name-and-position-container">
        {props.general.name ? (
          <h2 className="name-surname">{props.general.name.toUpperCase()}</h2>
        ) : (
          <h2 className="name-surname">JANE</h2>
        )}
        {props.general.surname ? (
          <h2 className="name-surname">
            {props.general.surname.toUpperCase()}
          </h2>
        ) : (
          <h2 className="name-surname">DOE</h2>
        )}
        {props.general.position ? (
          <h3>{props.general.position.toUpperCase()}</h3>
        ) : (
          <h3>SOFTWARE ENGINEER</h3>
        )}
      </section>
      <section className="experience-container">
        <h5>EXPERIENCE</h5>
        {props.displayExperience.props.data.experience.length ? (
          props.displayExperience
        ) : (
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
          </>
        )}
      </section>
    </div>
  );
}
