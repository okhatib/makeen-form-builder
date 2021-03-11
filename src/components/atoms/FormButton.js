import React, { Fragment } from 'react';
import styled from "styled-components";

const Button = styled.button`
min-width: 100px;
min-height: 25px;
background: transparent;
border: 1px dashed white;
color: white;
cursor: pointer;
border-radius: 24px;
padding: 0.5rem;
margin: 0 0 0.5rem 0;
line-height: 1.5;
${props => props.isPrimary && 'background-color: #027aff;border: 1px solid #027aff;'}
`;

function FormButton({text, type, OnClick, isPrimary}) {
    return (
    <Button isPrimary={isPrimary} onClick={() => OnClick(type)}>{text}</Button>
    );
}

export default FormButton;