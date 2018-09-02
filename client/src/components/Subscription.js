import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PickACar from './PickACar';
import Review from './Review';
import SubscriptionLength from './SubscriptionLength';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {getDateString} from "../util";

class Subscription extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vin: null,
			year: null,
			make: null,
			model: null,
			mileage: null,
			subscriptionLength : null,
			cost: 1,
			startDate: getDateString(new Date())
		}
	}
	
	updateSubscription = (update, next) => {
		const newState = {...this.state, ...update};
		this.setState(newState, () => {if (next) {this.props.nextStep()}})
	}
	
	validSubscription = () => (
		//checking if each field has a value
		Object.keys(this.state).every(field => this.state[field])
	)
	
	render(){
		let currentStepComponent = null
		switch (this.props.activeStep) {
			case 0:
				currentStepComponent = <PickACar key={PickACar.name} update={this.updateSubscription}/>;
				break;
			case 1:
				currentStepComponent = <SubscriptionLength key={SubscriptionLength.name} update={this.updateSubscription}/>
				break;
			case 2:
				currentStepComponent = <Review key={Review.name} update={this.updateSubscription} subscription={{...this.state}} />;
				break;
			default:
				currentStepComponent = <PickACar key={PickACar.name} update={this.updateSubscription}/>;
		}
		
		return(
			<div className='subscription-container'>
				<div className='buttons-container'>
					<div className='nav-buttons'>
						{this.props.activeStep !== 0 ?
							<Button color='primary' onClick={this.props.previousStep}>Previous Step</Button> : null
						}
						{(this.validSubscription() && this.props.activeStep !== 2)  ?
							<Button color='primary' onClick={() => {this.props.setStep(2)}}>Review</Button> : null}
						{(this.props.activeStep < 1 && this.vin) ?
							<Button color='primary' onClick={this.props.nextStep}>Next Step</Button> : null
						}
					</div>
				</div>
				<ReactCSSTransitionGroup
					transitionName="step"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}
				>
					{currentStepComponent}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default Subscription;