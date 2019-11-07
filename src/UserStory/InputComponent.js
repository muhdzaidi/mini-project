import React from 'react';

let labelValue = ""
let fieldErrorsValue = ""
let storyFieldsKey = ""

const InputComponent = (props) => {
    const entriesList = Object.keys(props.fields).map((entry) => {
        return(
                <div>
                    {
                        Object.entries(props.fields[entry]).map((k) => {
                            if(entry === "label") {
                                labelValue = k[1]
                            } else if(entry === "storyFields") {
                                storyFieldsKey = k[0]
                            } else if (entry === "fieldErrors") {
                                fieldErrorsValue = k[1]
                            }

                            return (
                                <div>
                                    <label for="date">{labelValue}</label>
                                    {fieldErrorsValue && <div style={{color:"red"}}>{fieldErrorsValue}</div>}
                                    <input placeholder={labelValue} id={storyFieldsKey} type="text" className="validate" onInput={props.handleInputChange} value={storyFieldsKey}/>
                                </div>
                            )
                        })
                    }
                </div>        
            )
    })

    return(
        <div>
            {entriesList}
        </div>
    )
}

export default InputComponent