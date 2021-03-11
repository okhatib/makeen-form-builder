import React, { Fragment } from 'react';
import styled from "styled-components";
import FormBreak from "./FormBreak";

const Select = styled.select`
border: 1px solid grey;
border-radius: 5px;
padding: 5px;
`;

function FormSelect({details, htmlProps, fieldValue, fieldValueChanged}) {
    return (
        <Fragment>
            <label id={`label-${details.key}`}>{fieldValue}</label>
            <Select 
                id={details.key}
                type={details.type || "text"}
                value={fieldValue}
                onChange={e => { fieldValueChanged(details.key, e.target.value) }}
                {...htmlProps}
            >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <FormBreak />
        </Fragment>
    )
}

export default FormSelect;