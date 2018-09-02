import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import UserInfo from './UserInfo';
import PickACar from './PickACar';
import Review from './Review';
import SubscriptionLength from './SubscriptionLength';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {getDateString} from "../../util";
import { getPricing } from "../../services";

class Subscription extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			dob: null,
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
	
	componentWillReceiveProps(nextProps){
		if (nextProps.activeStep === 3 && (this.state.vin && this.state.subscriptionLength)) {
			getPricing(this.state.vin, this.state.subscriptionLength)
				.then(res => res.json())
				.then(res => {
					this.setState({cost: res.price})
				})
				.catch(err => {
					console.log('err: ', err);
				})
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
	
	validEmail = () => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(this.state.email);
	}
	
	render(){
		let currentStepComponent = null;
		let nextCondition = false;
		switch (this.props.activeStep) {
			case 0:
				let emailError = (this.state.email && !this.validEmail());
	
				currentStepComponent = (
					<UserInfo
						key={UserInfo.name}
						emailError={emailError}
						update={this.updateSubscription}
						firstName={this.state.firstName}
						lastName={this.state.lastName}
						email={this.state.email}
						dob={this.state.dob}/>
				)
				//make sure all user info is gathered and the email is a valid format
				nextCondition = (this.state.firstName && this.state.lastName && this.state.email && this.state.dob) && !emailError;
				break;
			case 1:
				currentStepComponent = (
					<PickACar
						key={PickACar.name}
						update={this.updateSubscription}
						vin={this.state.vin}
						make={this.state.make}
						model={this.state.model}
						year={this.state.year}
						mileage={this.state.mileage}/>
				);
				
				//automatically move forward on car selection
				nextCondition = false;
				break;
			case 2:
				currentStepComponent = (
					<SubscriptionLength
						key={SubscriptionLength.name}
						update={this.updateSubscription}
						subscriptionLength={this.state.subscriptionLength}
						startDate={this.state.startDate}/>
				);
				
				//make sure subLength and start date have been selected
				nextCondition = !!(this.state.subscriptionLength && this.state.startDate);
				break;
			case 3:
				currentStepComponent = (
					<Review
						key={Review.name}
						update={this.updateSubscription}
						subscription={{...this.state}}
						submitSubscription={this.props.submitSubscription(this.state)} />
				);
				
				//no next button on review page
				nextCondition = false;
				break;
			default:
				currentStepComponent = (
					<PickACar
						key={PickACar.name}
						update={this.updateSubscription}/>
				);
		}
		
		return(
			<div className='subscription-container'>
				<div className='buttons-container'>
					<div className='nav-buttons'>
						{this.props.activeStep !== 0 ?
							<Button color='primary' onClick={this.props.previousStep}>Previous Step</Button> : null
						}
						{(this.validSubscription() && this.props.activeStep !== 3)  ?
							<Button color='primary' onClick={this.props.goToReview}>Review</Button> : null}
						{(this.props.activeStep < 1 && nextCondition) ?
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