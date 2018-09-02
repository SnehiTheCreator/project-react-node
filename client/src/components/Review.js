import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const reviewContainer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: '60px'
}


const reviewLabel = {
	fontSize: 30,
	width: '50%',
}

const reviewValue = {
	fontSize: 30,
	width: '50%',
	display: 'flex',
	justifyContent: 'flex-end',
	fontWeight: 'lighter'
}

const selectContainer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '50%'
}

const reviewRowContainer = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%'
}

const submitContainer = {
	width: '400px',
	height: '120px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	fontSize: 50,
	marginTop: '60px'
}

class Review extends Component {
	constructor(props) {
		super(props);
	}
	
	render(){
		
		return (
			<div className='step-component'>
				<div style={reviewContainer}>
					<div style={selectContainer}>
						<div style={reviewRowContainer}>
							<span style={reviewLabel}>Make:</span>
							<span style={reviewValue}>{this.props.subscription.make}</span>
						</div>
						<div style={reviewRowContainer}>
							<span style={reviewLabel}>Model:</span>
							<span style={reviewValue}>{this.props.subscription.model}</span>
						</div>
						<div style={reviewRowContainer}>
							<span style={reviewLabel}>Year:</span>
							<span style={reviewValue}>{this.props.subscription.year}</span>
						</div>
						<div style={reviewRowContainer}>
							<span style={reviewLabel}>Mileage:</span>
							<span style={reviewValue}>{this.props.subscription.mileage}</span>
						</div>
						<div style={reviewRowContainer}>
							<span style={reviewLabel}>Subscription length:</span>
							<span style={reviewValue}>{this.props.subscription.subscriptionLength + ' days'}</span>
						</div>
						<div style={reviewRowContainer}>
							<span style={reviewLabel}>Start Date:</span>
							<span style={reviewValue}>{this.props.subscription.startDate}</span>
						</div>
						<br/>
						<br/>
						<div style={reviewRowContainer}>
							<span style={reviewLabel}>Cost:</span>
							<span style={reviewValue}>{this.props.subscription.cost}</span>
						</div>
					</div>
					<Button
						color='primary' children={(
						<div style={submitContainer}>Submit</div>
					)}/>
				</div>
			</div>
			
		)
	}
}

export default Review;