import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Validate from "./components/pages/Validate";
import DynamicForm from './components/organisms/DynamicForm';
import ControlsPanel from './components/organisms/ControlsPanel'

import './App.css';
import staticData from './staticData'


const MainApp = styled.div`
`;
 
function App() {

  const [formControls, setFormControls] = useState(staticData);
  const [formValues, setFormValues] = useState({});

  const FieldValueChanged = (id, value) => {
    setFormValues(prevFormValues => ({
        ...prevFormValues,
        [id]: value
    }));
}

  useEffect(() => {
    document.title = `We have ${formControls.length} inputs`;
  }, [formControls]); 

  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Create</Link>
          </li>
          <li>
            <Link to="/validate">Validate</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <MainApp>
              <ControlsPanel
                formControls={formControls}
                setFormControls={setFormControls}
              />
              <DynamicForm formControls={formControls} formValues={formValues} FieldValueChanged={FieldValueChanged} />
            </MainApp>
          </Route>
          <Route path="/validate">
            <Validate formControls={formControls} formValues={formValues} FieldValueChanged={FieldValueChanged} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
