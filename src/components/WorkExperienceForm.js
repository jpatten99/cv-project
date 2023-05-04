import React, { Component } from "react";

class WorkExperienceForm extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { onSubmitWorkExp, handleChangeWorkExpEmployer, employer, handleChangeWorkExpPosition, position, handleChangeWorkExpStartDate, startDate, handleChangeWorkExpEndDate, endDate} = this.props;
      return (
        <div>
          <form onSubmit={onSubmitWorkExp}>
            <label htmlFor="workExpEmployerInput">Employer:  </label>
            <input
              onChange={handleChangeWorkExpEmployer}
              value={employer}
              type="text"
              id="workExpEmployerInput"
            />
            <label htmlFor="workExpPositionInput">Position:  </label>
            <input
              onChange={handleChangeWorkExpPosition}
              value={position}
              type="text"
              id="workExpPositionInput"
            />
            <label htmlFor="workExpStartDateInput">Start Date:  </label>
            <input
              onChange={handleChangeWorkExpStartDate}
              value={startDate}
              type="text"
              id="workExpStartDateInput"
            />
            <label htmlFor="workExpEndDateInput">End Date:  </label>
            <input
              onChange={handleChangeWorkExpEndDate}
              value={endDate}
              type="text"
              id="workExpEndDateInput"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    
  }
}

export default WorkExperienceForm;