import React from "react";
import '../styles/GeneralInformation.css';

const EducationalExperience = (props) => {
  const { eduExps, deleteEduExp } = props;
  const eduExpList = eduExps.map(eduExp => {
    return <div key={eduExp.id} id={eduExp.id}>
      <p>School: 
        <input
          className="editable"
          type="text"
          id={eduExp.id}
          value={eduExp.schoolName}
          onChange={
            (e) =>{
              props.setUpdateSchoolName(e.target.value, eduExp.id)
            }
          }
        ></input>
      </p>
      <p>Degree:
      <input
          className="editable"
          type="text"
          id={eduExp.id}
          value={eduExp.degree}
          onChange={
            (e) =>{
              props.setUpdateDegree(e.target.value, eduExp.id)
            }
          }
        ></input>
      </p>
      <p>Major:
      <input
          className="editable"
          type="text"
          id={eduExp.id}
          value={eduExp.major}
          onChange={
            (e) =>{
              props.setUpdateMajor(e.target.value, eduExp.id)
            }
          }
        ></input>
      </p>
      <button onClick={ () => deleteEduExp(eduExp.id) }>Delete</button>
      <span></span>
    </div>
  })
  return (
    <div>
      {eduExpList}
    </div>
  );
};

export default EducationalExperience;