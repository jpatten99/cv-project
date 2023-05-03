// App.js

import React, { Component } from "react";
import EducationalExperienceForm from "./components/EducationalExperienceForm";
import GeneralInformationForm from "./components/GeneralInformationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";

class App extends Component {
  constructor() {
    super();

  }
  render() {
    

    return (
      <div>
        <GeneralInformationForm />
        {/* <EducationalExperienceForm />
        <WorkExperienceForm /> */}
      </div>
    );
  }
}

export default App;