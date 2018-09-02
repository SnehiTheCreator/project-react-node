import React, { Component } from 'react';
var moment = require('moment');

const successContainer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: '60px'
}


const successLabel = {
	fontSize: 30,
	width: '50%',
}

const successValue = {
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

const successRowContainer = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%'
}

const returnLabel = {
	fontSize: 48
}


const Success = (props) => {
	
	let startDate = moment(props.subscription.startDate, 'YYYY-MM-DD');
	let subLength = parseInt(props.subscription.subscriptionLength);
	let returnDate = startDate.add(subLength, 'days');
	
	
	return (
		<div className='step-component'>
			<div style={successContainer}>
				<div style={selectContainer}>
					<div style={successRowContainer}>
						<span style={successLabel}>Make:</span>
						<span style={successValue}>{props.subscription.make}</span>
					</div>
					<div style={successRowContainer}>
						<span style={successLabel}>Model:</span>
						<span style={successValue}>{props.subscription.model}</span>
					</div>
					<div style={successRowContainer}>
						<span style={successLabel}>Year:</span>
						<span style={successValue}>{props.subscription.year}</span>
					</div>
					<div style={successRowContainer}>
						<span style={successLabel}>Mileage:</span>
						<span style={successValue}>{props.subscription.mileage}</span>
					</div>
					<div style={successRowContainer}>
						<span style={successLabel}>Subscription length:</span>
						<span style={successValue}>{props.subscription.subscriptionLength + ' days'}</span>
					</div>
					<div style={successRowContainer}>
						<span style={successLabel}>Start Date:</span>
						<span style={successValue}>{props.subscription.startDate}</span>
					</div>
					<br/>
					<br/>
					<div style={successRowContainer}>
						<span style={successLabel}>Cost:</span>
						<span style={successValue}>{'$' + props.subscription.cost}</span>
					</div>
				</div>
				<div style={{marginTop: '60px'}}>
					<div style={successRowContainer}>
						<span style={returnLabel}>{`Return date:  ${returnDate.format('YYYY-MM-DD')}`}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Success