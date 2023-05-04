import React, { Component } from "react";
import uniqid from "uniqid";
import WorkExperienceForm from "./WorkExperienceForm";

class EducationalExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eduExp: {
        schoolName: '',
        degree: '',
        major: '',
        id: uniqid()
      },
      eduExps: []
    };
    this.handleChangeEduExpSchoolName = this.handleChangeEduExpSchoolName.bind(this);
    this.handleChangeEduExpDegree = this.handleChangeEduExpDegree.bind(this);
    this.handleChangeEduExpMajor = this.handleChangeEduExpMajor.bind(this);
    this.deleteEduExp = this.deleteEduExp.bind(this);
    this.onSubmitEduExp = this.onSubmitEduExp.bind(this);
    this.setUpdateSchoolName = this.setUpdateSchoolName.bind(this);
    this.setUpdateDegree = this.setUpdateDegree.bind(this);
    this.setUpdateMajor = this.setUpdateMajor.bind(this);
  }

  handleChangeEduExpSchoolName = (e) => {
    this.setState({
      eduExp: {
        schoolName: e.target.value,
        degree: this.state.eduExp.degree,
        major: this.state.eduExp.major,
        id: this.state.eduExp.id,
      },
    });
  };

  handleChangeEduExpDegree = (e) => {
    this.setState({
      eduExp: {
        schoolName: this.state.eduExp.schoolName,
        degree: e.target.value,
        major: this.state.eduExp.major,
        id: this.state.eduExp.id,
      },
    });
  };

  handleChangeEduExpMajor = (e) => {
    this.setState({
      eduExp: {
        schoolName: this.state.eduExp.schoolName,
        degree: this.state.eduExp.degree,
        major: e.target.value,
        id: this.state.eduExp.id,
      },
    });
  };

  deleteEduExp(id) {
    const filteredEduExps = this.state.eduExps.filter(eduExp => 
      eduExp.id !== id);
    this.setState({
      eduExps: filteredEduExps
    })  
  }

  onSubmitEduExp = (e) => {
    e.preventDefault();
    this.setState({
      eduExps: this.state.eduExps.concat(this.state.eduExp),
      eduExp: {
        schoolName: '',
        degree: '',
        major: '', 
        id: uniqid()
      },
    });
  };

  setUpdateSchoolName(schoolName, id){
    const eduExps = this.state.eduExps;
    // eslint-disable-next-line array-callback-return
    eduExps.map((eduExp) => {
      if (eduExp.id === id) {
        eduExp.schoolName = schoolName;
      }
    })
    this.setState({
      eduExps: eduExps
    })
  }

  setUpdateDegree(degree, id){
    const eduExps = this.state.eduExps;
    // eslint-disable-next-line array-callback-return
    eduExps.map((eduExp) => {
      if (eduExp.id === id) {
        eduExp.degree = degree;
      }
    })
    this.setState({
      eduExps: eduExps
    })
  }

  setUpdateMajor(major, id){
    const eduExps = this.state.eduExps;
    // eslint-disable-next-line array-callback-return
    eduExps.map((eduExp) => {
      if (eduExp.id === id) {
        eduExp.major = major;
      }
    })
    this.setState({
      eduExps: eduExps
    })
  }
  render() {
    const { eduExp, eduExps } = this.state;
      return (
        <div>
          <form onSubmit={this.onSubmitEduExp}>
            <label htmlFor="eduExpSchoolNameInput">School:  </label>
            <input
              onChange={this.handleChangeEduExpSchoolName}
              value={eduExp.schoolName}
              type="text"
              id="eduExpSchoolNameInput"
            />
            <label htmlFor="eduExpDegreeInput">Degree:  </label>
            <input
              onChange={this.handleChangeEduExpDegree}
              value={eduExp.degree}
              type="text"
              id="eduExpDegreeInput"
            />
            <label htmlFor="eduExpMajorInput">Major:  </label>
            <input
              onChange={this.handleChangeEduExpMajor}
              value={eduExp.major}
              type="text"
              id="eduExpMajorInput"
            />
            <button type="submit">Submit</button>
          </form>
          {/* <EducationalExperience eduExps={eduExps} deleteEduExp = {this.deleteEduExp} setUpdateSchoolName = {this.setUpdateSchoolName} setUpdateDegree = {this.setUpdateDegree} setUpdateMajor = {this.setUpdateMajor}/> */}
          <WorkExperienceForm genInfos={this.props.genInfos} deletegenInfo = {this.props.deletegenInfo} setUpdateName = {this.props.setUpdateName} setUpdateEmail = {this.props.setUpdateEmail} setUpdatePhone = {this.props.setUpdatePhone} eduExps={eduExps} deleteEduExp = {this.deleteEduExp} setUpdateSchoolName = {this.setUpdateSchoolName} setUpdateDegree = {this.setUpdateDegree} setUpdateMajor = {this.setUpdateMajor}/>
        </div>
      );
    
  }
}

export default EducationalExperienceForm;