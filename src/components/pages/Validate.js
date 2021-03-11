import React, { Fragment, useState } from 'react';
import DynamicForm from '../organisms/DynamicForm';
import ObjectDisplay from "../atoms/ObjectDisplay";

function Validate({formControls, formValues, FieldValueChanged}) {

    const [jsonData, setJsonData] = useState({});

    const PreviewData = (data) => {
        setJsonData(prevData =>( { ...prevData, ...data }));
    }

    return (
        <Fragment>
            <ObjectDisplay jsonData={jsonData} />
        
            <DynamicForm formControls={formControls} PageMode="Validate" previewData={PreviewData} formValues={formValues} FieldValueChanged={FieldValueChanged}/>
        </Fragment>
    );
}

export default Validate; 