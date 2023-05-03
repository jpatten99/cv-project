import React from "react";
import '../styles/GeneralInformation.css';

const WorkExperience = (props) => {
  const { genInfos, deletegenInfo, eduExps, deleteEduExp, workExps, deleteWorkExp } = props;
  const genInfoList = genInfos.map(genInfo => {
    return <div key={genInfo.id} id={genInfo.id}>
      <p>Name: 
        <input
          className="editable"
          type="text"
          id={genInfo.id}
          value={genInfo.CVOwnerName}
          onChange={
            (e) =>{
              props.setUpdateName(e.target.value, genInfo.id)
            }
          }
        ></input>
      </p>
      <p>Email:
      <input
          className="editable"
          type="text"
          id={genInfo.id}
          value={genInfo.email}
          onChange={
            (e) =>{
              props.setUpdateEmail(e.target.value, genInfo.id)
            }
          }
        ></input>
      </p>
      <p>Phone:
      <input
          className="editable"
          type="text"
          id={genInfo.id}
          value={genInfo.phone}
          onChange={
            (e) =>{
              props.setUpdatePhone(e.target.value, genInfo.id)
            }
          }
        ></input>
      </p>
      {/* <button onClick={ () => deletegenInfo(genInfo.id) }>Delete</button> */}
      <span></span>
    </div>
  })
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
      {genInfoList}
      {eduExpList}
      {workExpList}
    </div>
  );
};

export default WorkExperience;