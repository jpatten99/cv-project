// import React, { Component } from "react";
// import GeneralInformationForm from "./components/GeneralInformationForm";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <GeneralInformationForm />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import GeneralInformationForm from "./components/GeneralInformationForm";
import EducationalExperienceForm from "./components/EducationalExperienceForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CVDisplay from "./components/CVDisplay";
import uniqid from "uniqid";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      genInfo: {
        CVOwnerName: '',
        email: '',
        phone: '',
        id: uniqid()
      },
      genInfos: [],
      eduExp: {
        schoolName: '',
        degree: '',
        major: '',
        id: uniqid()
      },
      eduExps: [],
      workExp: {
        employer: '',
        position: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      },
      workExps: []
    };
    this.handleChangegenInfoName = this.handleChangegenInfoName.bind(this);
    this.handleChangegenInfoemail = this.handleChangegenInfoemail.bind(this);
    this.handleChangegenInfoPhone = this.handleChangegenInfoPhone.bind(this);
    this.deletegenInfo = this.deletegenInfo.bind(this);
    this.onSubmitgenInfo = this.onSubmitgenInfo.bind(this);
    this.submitWithoutAction = this.submitWithoutAction.bind(this);
    this.setUpdateName = this.setUpdateName.bind(this);
    this.setUpdateEmail = this.setUpdateEmail.bind(this);
    this.setUpdatePhone = this.setUpdatePhone.bind(this);

    this.handleChangeEduExpSchoolName = this.handleChangeEduExpSchoolName.bind(this);
    this.handleChangeEduExpDegree = this.handleChangeEduExpDegree.bind(this);
    this.handleChangeEduExpMajor = this.handleChangeEduExpMajor.bind(this);
    this.deleteEduExp = this.deleteEduExp.bind(this);
    this.onSubmitEduExp = this.onSubmitEduExp.bind(this);
    this.setUpdateSchoolName = this.setUpdateSchoolName.bind(this);
    this.setUpdateDegree = this.setUpdateDegree.bind(this);
    this.setUpdateMajor = this.setUpdateMajor.bind(this);

    this.handleChangeWorkExpEmployer = this.handleChangeWorkExpEmployer.bind(this);
    this.handleChangeWorkExpPosition = this.handleChangeWorkExpPosition.bind(this);
    this.handleChangeWorkExpStartDate = this.handleChangeWorkExpStartDate.bind(this);
    this.handleChangeWorkExpEndDate = this.handleChangeWorkExpEndDate.bind(this);
    this.deleteWorkExp = this.deleteWorkExp.bind(this);
    this.onSubmitWorkExp = this.onSubmitWorkExp.bind(this);
    this.setUpdateEmployer = this.setUpdateEmployer.bind(this);
    this.setUpdatePosition = this.setUpdatePosition.bind(this);
    this.setUpdateStartDate = this.setUpdateStartDate.bind(this);
    this.setUpdateEndDate = this.setUpdateEndDate.bind(this);
  }

  handleChangegenInfoName = (e) => {
    this.setState({
      genInfo: {
        CVOwnerName: e.target.value,
        email: this.state.genInfo.email,
        phone: this.state.genInfo.phone,
        id: this.state.genInfo.id,
      },
    });
  };

  handleChangegenInfoemail = (e) => {
    this.setState({
      genInfo: {
        CVOwnerName: this.state.genInfo.CVOwnerName,
        email: e.target.value,
        phone: this.state.genInfo.phone,
        id: this.state.genInfo.id,
      },
    });
  };

  handleChangegenInfoPhone = (e) => {
    this.setState({
      genInfo: {
        CVOwnerName: this.state.genInfo.CVOwnerName,
        email: this.state.genInfo.email,
        phone: e.target.value,
        id: this.state.genInfo.id,
      },
    });
  };

  deletegenInfo(id) {
    const filteredgenInfos = this.state.genInfos.filter(genInfo => 
      genInfo.id !== id);
    this.setState({
      genInfos: filteredgenInfos
    })  
  }

  onSubmitgenInfo = (e) => {
    e.preventDefault();
    this.setState({
      genInfos: this.state.genInfos.concat(this.state.genInfo),
      genInfo: {
         CVOwnerName: '',
         email: '',
         phone: '', 
         id: uniqid()
     },
    });
  };

  submitWithoutAction = (e) => {
    e.preventDefault();
    this.setState({
      genInfo: {
        CVOwnerName: '',
        email: '',
        phone: '', 
        id: uniqid()
      },
    });
  };

  setUpdateName(CVOwnerName, id){
    const genInfos = this.state.genInfos;
    // eslint-disable-next-line array-callback-return
    genInfos.map((genInfo) => {
      if (genInfo.id === id) {
        genInfo.CVOwnerName = CVOwnerName;
      }
    })
    this.setState({
      genInfos: genInfos
    })
  }

  setUpdateEmail(email, id){
    const genInfos = this.state.genInfos;
    // eslint-disable-next-line array-callback-return
    genInfos.map((genInfo) => {
      if (genInfo.id === id) {
        genInfo.email = email;
      }
    })
    this.setState({
      genInfos: genInfos
    })
  }

  setUpdatePhone(phone, id){
    const genInfos = this.state.genInfos;
    // eslint-disable-next-line array-callback-return
    genInfos.map((genInfo) => {
      if (genInfo.id === id) {
        genInfo.phone = phone;
      }
    })
    this.setState({
      genInfos: genInfos
    })
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
    return (
      <div id="all-content">
        <div id="header">
          <h1 id="header-text">CV Creator</h1>
        </div>
        <div id='below-header'>
          <div id="forms">
            <GeneralInformationForm genInfos = {this.state.genInfos} onSubmitgenInfo = {this.onSubmitgenInfo} handleChangegenInfoName = {this.handleChangegenInfoName} CVOwnerName = {this.state.genInfo.CVOwnerName} handleChangegenInfoemail = {this.handleChangegenInfoemail} email = {this.state.genInfo.email} handleChangegenInfoPhone = {this.handleChangegenInfoPhone} phone = {this.state.genInfo.phone} submitWithoutAction = {this.submitWithoutAction}/>
            <EducationalExperienceForm  onSubmitEduExp = {this.onSubmitEduExp} handleChangeEduExpSchoolName = {this.handleChangeEduExpSchoolName} schoolName = {this.state.eduExp.schoolName} handleChangeEduExpDegree = {this.handleChangeEduExpDegree} degree = {this.state.eduExp.degree} handleChangeEduExpMajor = {this.handleChangeEduExpMajor} major = {this.state.eduExp.major}/>
            <WorkExperienceForm  onSubmitWorkExp = {this.onSubmitWorkExp} handleChangeWorkExpEmployer = {this.handleChangeWorkExpEmployer} employer = {this.state.workExp.employer} handleChangeWorkExpPosition = {this.handleChangeWorkExpPosition} position = {this.state.workExp.position} handleChangeWorkExpStartDate = {this.handleChangeWorkExpStartDate} startDate = {this.state.workExp.startDate} handleChangeWorkExpEndDate = {this.handleChangeWorkExpEndDate} endDate = {this.state.workExp.endDate}/>
          </div>
            <CVDisplay genInfos = {this.state.genInfos} setUpdateName = {this.setUpdateName} setUpdateEmail = {this.setUpdateEmail} setUpdatePhone = {this.setUpdatePhone} eduExps = {this.state.eduExps} setUpdateSchoolName = {this.setUpdateSchoolName} setUpdateDegree = {this.setUpdateDegree}  setUpdateMajor = {this.setUpdateMajor} deleteEduExp = {this.deleteEduExp} workExps = {this.state.workExps} setUpdateEmployer = {this.setUpdateEmployer} setUpdatePosition = {this.setUpdatePosition} setUpdateStartDate = {this.setUpdateStartDate} setUpdateEndDate = {this.setUpdateEndDate} deleteWorkExp = {this.deleteWorkExp}/>
        </div>
      </div>
    );
  }
}

export default App;

