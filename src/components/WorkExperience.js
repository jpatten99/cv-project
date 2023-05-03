import React from "react";
import '../styles/GeneralInformation.css';

const WorkExperience = (props) => {
  const { workExps, deleteWorkExp } = props;
  const workExpList = workExps.map(workExp => {
    return <div key={workExp.id} id={workExp.id}>
      <p>Employer: 
        <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.employer}
          onChange={
            (e) =>{
              props.setUpdateEmployer(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <p>Position:
      <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.position}
          onChange={
            (e) =>{
              props.setUpdatePosition(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <p>Start Date:
      <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.startDate}
          onChange={
            (e) =>{
              props.setUpdateStartDate(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <p>End Date:
      <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.endDate}
          onChange={
            (e) =>{
              props.setUpdateEndDate(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <button onClick={ () => deleteWorkExp(workExp.id) }>Delete</button>
      <span></span>
    </div>
  })
  return (
    <div>
      {workExpList}
    </div>
  );
};

export default WorkExperience;