import React from "react";
import '../App.css';

const CVDisplay = (props) => {
  const { genInfos, setUpdateName, setUpdateEmail, setUpdatePhone, eduExps, setUpdateSchoolName, setUpdateDegree, setUpdateMajor, deleteEduExp, workExps, setUpdateEmployer, setUpdatePosition, setUpdateStartDate, setUpdateEndDate, deleteWorkExp} = props;
  const genInfoList = genInfos.map(genInfo => {
    return (
      <div key={genInfo.id} id="grid-genInfo">
        <p id="CV-name-display"> 
          <input
            style = {{fontSize: "22px"}}
            className="editable"
            type="text"
            id={genInfo.id}
            value={genInfo.CVOwnerName}
            onChange={
              (e) =>{
                setUpdateName(e.target.value, genInfo.id)
              }
            }
          ></input>
        </p>
        <p id="CV-email-display">
        <input
            style = {{fontSize: "16px"}}
            className="editable"
            type="text"
            id={genInfo.id}
            value={genInfo.email}
            onChange={
              (e) =>{
                setUpdateEmail(e.target.value, genInfo.id)
              }
            }
          ></input>
        </p>
        <p id="CV-phone-display">
        <input
            style = {{fontSize: "16px"}}
            className="editable"
            type="text"
            id={genInfo.id}
            value={genInfo.phone}
            onChange={
              (e) =>{
                setUpdatePhone(e.target.value, genInfo.id)
              }
            }
          ></input>
        </p>
        {/* <button onClick={ () => deletegenInfo(genInfo.id) }>Delete</button> */}
      </div>
    )
  })
  const eduExpList = eduExps.map(eduExp => {
    return <div key={eduExp.id} className="grid-eduExp">
      <p id="CV-school-display"> 
        <input
          className="editable"
          type="text"
          id={eduExp.id}
          value={eduExp.schoolName}
          onChange={
            (e) =>{
              setUpdateSchoolName(e.target.value, eduExp.id)
            }
          }
        ></input>
      </p>
      <p className="CV-degree-and-major-display">
      <input
          className="editable"
          type="text"
          id={eduExp.id}
          value={eduExp.degree}
          onChange={
            (e) =>{
              setUpdateDegree(e.target.value, eduExp.id)
            }
          }
        ></input>
      </p>
      <p className="CV-degree-and-major-display">
      <input
          className="editable"
          type="text"
          id={eduExp.id}
          value={eduExp.major}
          onChange={
            (e) =>{
              setUpdateMajor(e.target.value, eduExp.id)
            }
          }
        ></input>
      </p>
      <button onClick={ () => deleteEduExp(eduExp.id) } className = "deleteButton">Delete</button>
    </div>
  })
  const workExpList = workExps.map(workExp => {
    return <div key={workExp.id} className="grid-workExp">
      <p className="CV-degree-and-major-display">
        <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.employer}
          onChange={
            (e) =>{
              setUpdateEmployer(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <p className="CV-degree-and-major-display">
      <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.position}
          onChange={
            (e) =>{
              setUpdatePosition(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <p className="CV-degree-and-major-display">
      <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.startDate}
          onChange={
            (e) =>{
              setUpdateStartDate(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <p className="CV-degree-and-major-display">
      <input
          className="editable"
          type="text"
          id={workExp.id}
          value={workExp.endDate}
          onChange={
            (e) =>{
              setUpdateEndDate(e.target.value, workExp.id)
            }
          }
        ></input>
      </p>
      <button onClick={ () => deleteWorkExp(workExp.id) } className = "deleteButton">Delete</button>
    </div>
  })
  return (
    <div className="display-CV">
      {genInfoList}
      <div id="eduExpList-display">{eduExpList}</div>
      <div id="workExp-display">{workExpList}</div>
    </div>
  );
};

export default CVDisplay;