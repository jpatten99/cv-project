import React, { Component } from "react";
import WorkExperience from "./WorkExperience";
import uniqid from "uniqid";

class WorkExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExp: {
        employer: '',
        position: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      },
      workExps: []
    };
    this.handleChangeWorkExpEmployer = this.handleChangeWorkExpEmployer.bind(this);
    this.handleChangeWorkExpPosition = this.handleChangeWorkExpPosition.bind(this);
    this.handleChangeWorkExpStartDate = this.handleChangeWorkExpStartDate.bind(this);
    this.handleChangeWorkExpEndDate = this.handleChangeWorkExpEndDate.bind(this);
    this.deleteWorkExp = this.deleteWorkExp.bind(this);
    this.onSubmitWorkExp = this.onSubmitWorkExp.bind(this);
    this.setUpdateEmployer = this.setUpdateEmployer.bind(this);
    this.setUpdatePosition = this.setUpdatePosition.bind(this);
    this.setUpdateStartDate = this.setUpdateStartDate.bind(this);
  }

  handleChangeWorkExpEmployer = (e) => {
    this.setState({
      workExp: {
        employer: e.target.value,
        position: this.state.workExp.position,
        startDate: this.state.workExp.startDate,
        endDate: this.state.workExp.endDate,
        id: this.state.workExp.id,
      },
    });
  };

  handleChangeWorkExpPosition = (e) => {
    this.setState({
      workExp: {
        employer: this.state.workExp.employer,
        position: e.target.value,
        startDate: this.state.workExp.startDate,
        endDate: this.state.workExp.endDate,
        id: this.state.workExp.id,
      },
    });
  };

  handleChangeWorkExpStartDate = (e) => {
    this.setState({
      workExp: {
        employer: this.state.workExp.employer,
        position: this.state.workExp.position,
        startDate: e.target.value,
        endDate: this.state.workExp.endDate,
        id: this.state.workExp.id,
      },
    });
  };

  handleChangeWorkExpEndDate = (e) => {
    this.setState({
      workExp: {
        employer: this.state.workExp.employer,
        position: this.state.workExp.position,
        startDate: this.state.workExp.startDate,
        endDate: e.target.value,
        id: this.state.workExp.id,
      },
    });
  };

  deleteWorkExp(id) {
    const filteredWorkExps = this.state.workExps.filter(workExp => 
      workExp.id !== id);
    this.setState({
      workExps: filteredWorkExps
    })  
  }

  onSubmitWorkExp = (e) => {
    e.preventDefault();
    this.setState({
      workExps: this.state.workExps.concat(this.state.workExp),
      workExp: {
        employer: '',
        position: '',
        startDate: '', 
        endDate: '',
        id: uniqid()
      },
    });
  };

  setUpdateEmployer(employer, id){
    const workExps = this.state.workExps;
    // eslint-disable-next-line array-callback-return
    workExps.map((workExp) => {
      if (workExp.id === id) {
        workExp.employer = employer;
      }
    })
    this.setState({
      workExps: workExps
    })
  }

  setUpdatePosition(position, id){
    const workExps = this.state.workExps;
    // eslint-disable-next-line array-callback-return
    workExps.map((workExp) => {
      if (workExp.id === id) {
        workExp.position = position;
      }
    })
    this.setState({
      workExps: workExps
    })
  }

  setUpdateStartDate(startDate, id){
    const workExps = this.state.workExps;
    // eslint-disable-next-line array-callback-return
    workExps.map((workExp) => {
      if (workExp.id === id) {
        workExp.startDate = startDate;
      }
    })
    this.setState({
      workExps: workExps
    })
  }

  setUpdateEndDate(endDate, id){
    const workExps = this.state.workExps;
    // eslint-disable-next-line array-callback-return
    workExps.map((workExp) => {
      if (workExp.id === id) {
        workExp.endDate = endDate;
      }
    })
    this.setState({
      workExps: workExps
    })
  }
  render() {
    const { workExp, workExps } = this.state;
      return (
        <div>
          <form onSubmit={this.onSubmitWorkExp}>
            <label htmlFor="workExpEmployerInput">Employer:  </label>
            <input
              onChange={this.handleChangeWorkExpEmployer}
              value={workExp.employer}
              type="text"
              id="workExpEmployerInput"
            />
            <label htmlFor="workExpPositionInput">Position:  </label>
            <input
              onChange={this.handleChangeWorkExpPosition}
              value={workExp.position}
              type="text"
              id="workExpPositionInput"
            />
            <label htmlFor="workExpStartDateInput">Start Date:  </label>
            <input
              onChange={this.handleChangeWorkExpStartDate}
              value={workExp.startDate}
              type="text"
              id="workExpStartDateInput"
            />
            <label htmlFor="workExpEndDateInput">End Date:  </label>
            <input
              onChange={this.handleChangeWorkExpEndDate}
              value={workExp.endDate}
              type="text"
              id="workExpEndDateInput"
            />
            <button type="submit">Submit</button>
          </form>
          <WorkExperience genInfos={this.props.genInfos} deletegenInfo = {this.props.deletegenInfo} setUpdateName = {this.props.setUpdateName} setUpdateEmail = {this.props.setUpdateEmail} setUpdatePhone = {this.props.setUpdatePhone}
          eduExps={this.props.eduExps} deleteEduExp = {this.props.deleteEduExp} setUpdateSchoolName = {this.props.setUpdateSchoolName} setUpdateDegree = {this.props.setUpdateDegree} setUpdateMajor = {this.props.setUpdateMajor} 
          workExps={workExps} deleteWorkExp = {this.deleteWorkExp} setUpdateEmployer = {this.setUpdateEmployer} setUpdatePosition = {this.setUpdatePosition} setUpdateStartDate = {this.setUpdateStartDate} setUpdateEndDate = {this.setUpdateEndDate}/>
        </div>
      );
    
  }
}

export default WorkExperienceForm;