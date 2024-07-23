import React, { useState } from 'react'

const Folder = ({explorer}) => {
  const[expand,setexpand]=useState(false);
  if(explorer.isFolder){
    return (
      <div>
        <div className="folder" onClick={()=>setexpand(!expand)}>
          <span>📁{explorer.name}</span>
        </div>
        <div style={{display:expand?"block":"none",paddingLeft:25}}>
          {explorer.children.map((exp)=>{
            return <Folder explorer={exp} />
          })}
        </div>
      </div>
    )
  }
  else{
    return <span className='file'>📄{explorer.name}</span>
  }
}
export default Folder;
