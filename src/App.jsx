
import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header.jsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Revenue from './component/Revenue.jsx';
import Expenses from './component/Expenses.jsx';
import Compare from './component/Compare.jsx';

/* App */
function App() {

  // initialization
	const steps = ['Revenues', 'Expenses', 'Compare'];
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

    return (
			<div>
				<Header />

				<Stepper style= {{backgroundColor: "#2e2e2e"}} className = "progressBar" activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
						<Step  style = {{color: "white"}} key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<Revenue hide = {activeStep !== 0} />
				<Expenses hide = {activeStep !== 1} />
				<Compare className = "revenue" hide = {activeStep !== 2} />
				<Compare className = "expenses" hide = {activeStep !== 3} />


				<div>	
				<button className = {activeStep === 1 ? "" : "hide"} onClick = {handleBack}> Previous </button>
				<button className = {activeStep !== steps.length ? "" : "hide"}  onClick = {handleNext}> {activeStep === steps.length - 2 ? 'Compare' : 'Next'} </button>
				<button className = {activeStep >= steps.length ? "" : "hide"}onClick = {handleReset}> Restart </button>
				</div>

			</div>
    )
}

export default App;