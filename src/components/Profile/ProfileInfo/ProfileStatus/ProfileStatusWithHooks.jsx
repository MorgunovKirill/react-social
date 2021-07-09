import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

     let [editMode, setEditMode] = useState(false);
     let [status, setStatus] = useState(props.status);

     useEffect( () => {
        setStatus(props.status);
     }, [props.status]);

     const activateEditMode = () => {
        setEditMode(true)
     }
  
     const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
     }

     const onStatusChange = (evt) => {
        setStatus(evt.currentTarget.value)
    }
  
        return (
            <>
                {!editMode 
                 ? <div>
                        <span onDoubleClick={activateEditMode}> {props.status || '----'} </span>
                    </div>
                 : <div>
                        <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}></input>
                    </div>
                }
            </>
        )
    
}

export default ProfileStatusWithHooks;









