import React, { Component } from "react";
import GeneralInformation from "./GeneralInformation";
import EducationalExperienceForm from "./EducationalExperienceForm";
import uniqid from "uniqid";

class GeneralInformationForm extends Component {
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
  }

  handleChangegenInfoName = (e) => {
    this.setState({
      genInfo: {
        CVOwnerName: e.target.value,
        email: document.getElementById('genInfoemailInput').value !== undefined ? document.getElementById('genInfoemailInput').value : "",
        phone: document.getElementById('genInfoPhoneInput').value !== undefined ? document.getElementById('genInfoPhoneInput').value : "",
        id: this.state.genInfo.id,
      },
    });
  };

  handleChangegenInfoemail = (e) => {
    this.setState({
      genInfo: {
        CVOwnerName: document.getElementById('genInfoNameInput').value !== undefined ? document.getElementById('genInfoNameInput').value : "",
        email: e.target.value,
        phone: document.getElementById('genInfoPhoneInput').value !== undefined ? document.getElementById('genInfoPhoneInput').value : "",
        id: this.state.genInfo.id,
      },
    });
  };

  handleChangegenInfoPhone = (e) => {
    this.setState({
      genInfo: {
        CVOwnerName: document.getElementById('genInfoNameInput').value !== undefined ? document.getElementById('genInfoNameInput').value : "",
        email: document.getElementById('genInfoemailInput').value !== undefined ? document.getElementById('genInfoemailInput').value : "",
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

  render() {
    const { genInfo, genInfos } = this.state;
    if(genInfos.length===0){
      return (
        <div>
          <form onSubmit={this.onSubmitgenInfo}>
            <label htmlFor="genInfoNameInput">Name:  </label>
            <input
              onChange={this.handleChangegenInfoName}
              value={genInfo.CVOwnerName}
              type="text"
              id="genInfoNameInput"
            />
            <label htmlFor="genInfoemailInput">Email:  </label>
            <input
              onChange={this.handleChangegenInfoemail}
              value={genInfo.email}
              type="text"
              id="genInfoemailInput"
            />
            <label htmlFor="genInfoPhoneInput">Phone:  </label>
            <input
              onChange={this.handleChangegenInfoPhone}
              value={genInfo.phone}
              type="text"
              id="genInfoPhoneInput"
            />
            <button type="submit">Submit</button>
          </form>
          {/* <GeneralInformation genInfos={genInfos} deletegenInfo = {this.deletegenInfo} setUpdateName = {this.setUpdateName} setUpdateEmail = {this.setUpdateEmail} setUpdatePhone = {this.setUpdatePhone}/> */}
          <EducationalExperienceForm genInfos={genInfos} setUpdateName = {this.setUpdateName} setUpdateEmail = {this.setUpdateEmail} setUpdatePhone = {this.setUpdatePhone} />
        </div>
      );
    }
    else{
      return (
        <div>
          <form onSubmit={this.submitWithoutAction}>
            <label htmlFor="genInfoNameInput">Name:  </label>
            <input
              onChange={this.handleChangegenInfoName}
              value={genInfo.CVOwnerName}
              type="text"
              id="genInfoNameInput"
              readOnly
            />
            <label htmlFor="genInfoemailInput">Email:  </label>
            <input
              onChange={this.handleChangegenInfoemail}
              value={genInfo.email}
              type="text"
              id="genInfoemailInput"
              readOnly
            />
            <label htmlFor="genInfoPhoneInput">Phone:  </label>
            <input
              onChange={this.handleChangegenInfoPhone}
              value={genInfo.phone}
              type="text"
              id="genInfoPhoneInput"
              readOnly
            />
            <button type="submit">Submit</button>
          </form>
          {/* <GeneralInformation genInfos={genInfos} deletegenInfo = {this.deletegenInfo} setUpdateName = {this.setUpdateName} setUpdateEmail = {this.setUpdateEmail} setUpdatePhone = {this.setUpdatePhone}/> */}
          <EducationalExperienceForm genInfos={genInfos} setUpdateName = {this.setUpdateName} setUpdateEmail = {this.setUpdateEmail} setUpdatePhone = {this.setUpdatePhone} />
        </div>
      );
    }
    
  }
}

export default GeneralInformationForm;