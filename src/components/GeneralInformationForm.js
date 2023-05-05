import React, { Component } from "react";
import '../App.css';


class GeneralInformationForm extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    const { genInfos, onSubmitgenInfo, handleChangegenInfoName, CVOwnerName, handleChangegenInfoemail, email, handleChangegenInfoPhone, phone, submitWithoutAction} = this.props;
    if(genInfos.length===0){
      return (
        <div id="generalInfo-div">
          <h2>Add General Information:</h2>
          <form onSubmit={onSubmitgenInfo} className="top-form">
            <label htmlFor="genInfoNameInput">Name:  </label>
            <input
              onChange={handleChangegenInfoName}
              value={CVOwnerName}
              type="text"
              id="genInfoNameInput"
            />
            <label htmlFor="genInfoemailInput">Email:  </label>
            <input
              onChange={handleChangegenInfoemail}
              value={email}
              type="text"
              id="genInfoemailInput"
            />
            <label htmlFor="genInfoPhoneInput">Phone:  </label>
            <input
              onChange={handleChangegenInfoPhone}
              value={phone}
              type="text"
              id="genInfoPhoneInput"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
    else{
      return (
        <div id="generalInfo-div">
          <h2>Add General Information:</h2>
          <form onSubmit={submitWithoutAction} className="top-form">
            <label htmlFor="genInfoNameInput">Name:  </label>
            <input
              onChange={handleChangegenInfoName}
              value={CVOwnerName}
              type="text"
              id="genInfoNameInput"
              readOnly
            />
            <label htmlFor="genInfoemailInput">Email:  </label>
            <input
              onChange={handleChangegenInfoemail}
              value={email}
              type="text"
              id="genInfoemailInput"
              readOnly
            />
            <label htmlFor="genInfoPhoneInput">Phone:  </label>
            <input
              onChange={handleChangegenInfoPhone}
              value={phone}
              type="text"
              id="genInfoPhoneInput"
              readOnly
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}

export default GeneralInformationForm;