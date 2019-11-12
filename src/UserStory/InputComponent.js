import React from 'react';

const InputComponent = (props) => {
    return (
        <div>
            <label for={props.id}>{props.label}</label>
            {props.error && <div style={{color:"red"}}>{props.error}</div>}
            <input placeholder={props.label} id={props.id} type={props.type} className="validate" onInput={props.handleInputChange} value={props.value}/>
        </div>
    )
}

export default InputComponent