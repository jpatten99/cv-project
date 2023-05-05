import React, { Component } from "react";
import '../App.css';

class EducationalExperienceForm extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { onSubmitEduExp, handleChangeEduExpSchoolName, schoolName, handleChangeEduExpDegree, degree, handleChangeEduExpMajor, major} = this.props;
      return (
        <div id = "eduExp-div">
          <h2>Add Education:</h2>
          <form onSubmit={onSubmitEduExp} className="top-form">
            <label htmlFor="eduExpSchoolNameInput">School:  </label>
            <input
              onChange={handleChangeEduExpSchoolName}
              value={schoolName}
              type="text"
              id="eduExpSchoolNameInput"
            />
            <label htmlFor="eduExpDegreeInput">Degree:  </label>
            <input
              onChange={handleChangeEduExpDegree}
              value={degree}
              type="text"
              id="eduExpDegreeInput"
            />
            <label htmlFor="eduExpMajorInput">Major:  </label>
            <input
              onChange={handleChangeEduExpMajor}
              value={major}
              type="text"
              id="eduExpMajorInput"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
  }
}

export default EducationalExperienceForm;