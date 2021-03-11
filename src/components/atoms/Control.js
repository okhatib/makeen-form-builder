import React, { Fragment } from 'react';
import FormInput from './FormInput';
import FormSelect from "./FormSelect";
import FormBreak from "./FormBreak";

function Control({control, fieldValue, fieldValueChanged}) {

    const GetControl = () => {
        switch (control.type) {
            case "select":
                return <FormSelect 
                            key={control.key}
                            details={control}
                            htmlProps={control.htmlProps}
                            fieldValue={fieldValue}
                            fieldValueChanged={fieldValueChanged}
                       />
            case "label":
                return <Fragment><label 
                            id={control.key}
                            {...control.htmlProps}
                        >{control.key}</label><FormBreak /></Fragment>
            default:
                return <FormInput 
                            key={control.key}
                            details={control}
                            htmlProps={control.htmlProps}
                            fieldValue={fieldValue}
                            fieldValueChanged={fieldValueChanged}
                        />
        }
    } 

    return (
        <Fragment>
        { GetControl() }
        </Fragment>
    );
}

export default Control;