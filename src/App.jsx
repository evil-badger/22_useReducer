import './App.css';
import React, { useReducer } from 'react';
import initialState from './Store/initialState'
import reducer from './Store/reducer'
import SizeSelector from './Components/SizeSelector';
import CalculateButton from './Components/CalculateButton';
import Summary from './Components/Summary';
import SelectTopping from './Components/SelectTopping';
import CheckboxSeasoning from './Components/CheckboxSeasoning';
import CheckboxMayonnaise from './Components/CheckboxMayonnaise';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="wrap">
        <SelectTopping state={state} dispatch={dispatch} />
        <SizeSelector state={state} dispatch={dispatch} />
        <CheckboxSeasoning state={state} dispatch={dispatch} />
        <CheckboxMayonnaise state={state} dispatch={dispatch} />
        <CalculateButton dispatch={dispatch} />
        {state.isShow && <Summary state={state} />}
      </div>

    </>

  );
}


export default App;
