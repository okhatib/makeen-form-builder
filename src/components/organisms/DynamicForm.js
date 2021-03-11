import React, { Fragment, useState, useEffect } from 'react';
import styled from "styled-components";
import Control from '../atoms/Control';
import FormButton from "../atoms/FormButton";

const ParentForm = styled.div`
    margin-left: 200px;
`;

const Form = styled.form`
    margin: 0.5rem 0.5rem 1.5rem;
    border: 1px solid #ddd;
    background: #fff;
    padding: 0.5rem 0.5rem 0;
    border-radius: 3px;
    text-align: center;
`;

function DynamicForm({formControls, PageMode, previewData, formValues, FieldValueChanged}) {

    

    

    const OnSubmit = (e) => {
        e.preventDefault();
        
        // Mock async call here
    }

    const LogVals = (vals) => {
        console.log(vals);
    } 

    return (
        <ParentForm>
            
            <Form onSubmit={OnSubmit}  className="dynamic-form">
                <h4 style={{fontWeight: 'bold', color: 'grey'}}>Drop & Create</h4>
                {
                    formControls.map(control => {
                        return <Control 
                            key={control.key} 
                            control={control} 
                            fieldValue={formValues[control.key]}
                            fieldValueChanged={FieldValueChanged}
                        />
                    })
                } 
                {PageMode==="Validate" && <FormButton OnClick={previewData} text="Submit" type={formValues} isPrimary={true} />}
            </Form>
        </ParentForm>
    );
}

export default DynamicForm;