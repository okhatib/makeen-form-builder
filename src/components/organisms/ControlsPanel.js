import React, { Children, Fragment } from 'react';
import styled from "styled-components";
import FormButton from "../atoms/FormButton";

const Panel = styled.div`
    padding: 0.5rem 0.5rem 0;
    flex: 0 0 150px;
    position: absolute;
    top: 10%;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #027aff;
    text-align: center;

    > h1 {
        font-size: large;
        font-weight: bold;
        color: white;
    }
`;

function ControlsPanel({formControls, setFormControls, children}) {

    const AddNewControl = (type) => {
        setFormControls(prevFormControls => (
          [
            ...prevFormControls, 
            {
              key: `${type}${formControls.length+1}`,
              value: '',
              type: type,
              htmlProps: {
                  placeholder: `${type}${formControls.length+1}`
              }
            }
          ]
        ))
    }

    return (
        <Fragment>
            {children}
            <Panel>
                <h1>Form Components</h1>
                <FormButton OnClick={AddNewControl} text="Input" type="text" />
                <FormButton OnClick={AddNewControl} text="Label" type="label" />
                <FormButton OnClick={AddNewControl} text="Select" type="select" />
            </Panel>
        </Fragment>
    );
}

export default ControlsPanel;