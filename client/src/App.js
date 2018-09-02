import React, { Component } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Subscription from "./components/subscription/Subscription";
import Success from "./components/Success";
import {postSubscription} from "./services";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6580A6'
		}
	}

})

function getSteps() {
	return ["Information", "Select a car", "Pick a subscription length", "Review"]
}


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			activeStep: 0,
			subscription: null
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
	
	goToReview = () => {
  	this.setState({activeStep: 3})
	}
	
	submitSubscription = (subscription) => (
		() => {
			let sub = {...subscription};
			postSubscription(sub)
				.then(res => res.json())
				.then(subscription => {
					this.setState({subscription})
				})
				.catch(err => {
					console.log('err: ', err);
				})
		}
	)
	
	
  
  render() {
  	const steps = getSteps();
  	const activeStep = this.state.activeStep
    return (
				<div className="App">
					<MuiThemeProvider theme={theme}>
						<header className="App-header">
							<h1 className="App-title">
								{this.state.subscription ? "Success!" : "Sign Up for a Subscription!"}
							</h1>
						</header>

						{this.state.subscription ?
							<Success subscription={this.state.subscription}/> :
							<div>
								<Stepper activeStep={activeStep}>
									{steps.map((label, index) => {
										return (
											<Step color="primary" key={label}>
												<StepLabel>{label}</StepLabel>
											</Step>
										);
									})}
								</Stepper>
								<Subscription
									activeStep={activeStep}
									nextStep={this.nextStep}
									previousStep={this.previousStep}
									goToReview={this.goToReview}
									submitSubscription={this.submitSubscription}/>
							</div>
						}
					</MuiThemeProvider>
				</div>
    )
  }
}

export default App;
