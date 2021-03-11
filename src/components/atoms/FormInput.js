import React, { Fragment } from 'react';
import styled from "styled-components";
import FormBreak from "./FormBreak";

const Input = styled.input`
border: 1px solid grey;
border-radius: 5px;
padding: 5px;
`;

function FormInput({details, htmlProps, fieldValue, fieldValueChanged}) {
    return (
        <Fragment>
            <label id={`label-${details.key}`}>{fieldValue}</label>
            <Input 
                id={details.key}
                type={details.type || "text"}
                value={fieldValue}
                onChange={e => { fieldValueChanged(details.key, e.target.value) }}
                {...htmlProps}
            />
            <FormBreak />
        </Fragment>
    )
}

export default FormInput;