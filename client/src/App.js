import React, { Component } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Subscription from "./components/Subscription";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6580A6'
		}
	}

})

function getSteps() {
	return ["Select a car", "Pick a subscription length", "Review"]
}


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			activeStep: 0
		}
	}
	
	nextStep = () => {
  	let activeStep = this.state.activeStep < 2 ? this.state.activeStep + 1 : this.state.activeStep;
  	this.setState({activeStep});
	}
	
	previousStep = () => {
		let activeStep = this.state.activeStep > 0 ? this.state.activeStep - 1 : this.state.activeStep;
		this.setState({activeStep});
	}
	
	setStep = (step) => {
  	this.setState({activeStep: step})
	}
	
	
  
  render() {
  	const steps = getSteps();
  	const activeStep = this.state.activeStep
    return (
				<div className="App">
					<MuiThemeProvider theme={theme}>
						<header className="App-header">
							<h1 className="App-title">Sign Up for a Subscription!</h1>
						</header>
						<Stepper activeStep={activeStep}>
							{steps.map((label, index) => {
								return (
									<Step color="primary" key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								);
							})}
						</Stepper>
						<Subscription activeStep={activeStep} nextStep={this.nextStep} previousStep={this.previousStep} setStep={this.setStep} />
					</MuiThemeProvider>
				</div>
    )
  }
}

export default App;
