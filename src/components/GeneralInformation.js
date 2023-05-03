// GeneralInformation.js

import React from "react";
import '../styles/GeneralInformation.css';

const GeneralInformation = (props) => {
  const { genInfos, deletegenInfo } = props;
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
      <button onClick={ () => deletegenInfo(genInfo.id) }>Delete</button>
      <span></span>
    </div>
  })
  return (
    <div>
      {genInfoList}
    </div>
  );
};

export default GeneralInformation;