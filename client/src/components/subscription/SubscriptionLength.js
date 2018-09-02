import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import {getDateString} from "../../util";

const subscriptionLengths = [7, 28];

const selectContainer = {
	display: 'flex',
	flexDirection: 'column'
}

const selectSubcontainer = {
	display: 'flex',
	justifyContent: 'space-around',
	width: '80%'
}

const selectSubLengthContainer = {
	display: 'flex',
	alignItems: 'center',
	marginTop: '60px',
	marginBottom: '60px'
}

const subLengthConatainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}

const subLengthNumStyle = {
	fontSize: 120,
	fontWeight: 'lighter'
}

const subLengthLabel = {
	fontSize: 30,
	fontWeight: 'lighter',
	width: '20%'
}

const daysStyle = {
	fontSize: 22,
	fontWeight: 'lighter'
}

const styles = theme => ({
		dateFieldStyle: {
			width: 400
		},
		dateFieldInput: {
			fontSize: 50,
			lineHeight: 30
		}
	}
)

class SubscriptionLength extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subscriptionLength: null,
			startDate: null
		}
	}
	
	handleSelectSubLength = (e) => {
		let subscriptionLength = parseInt(e.target.value);
		this.setState({subscriptionLength}, this.props.update({subscriptionLength}));
	}
	
	handleStartDateSelect = (e) => {
		let startDate = e.target.value;
		this.setState({startDate}, this.props.update({startDate}));
	}
	
	render(){
		
		const { classes } = this.props;
		
		return (
			<div className='step-component'>
				<div style={selectContainer}>
					<div style={selectSubLengthContainer}>
						<span style={subLengthLabel}>Subscription length: </span>
						<div style={selectSubcontainer}>
							{subscriptionLengths.map(subLength => (
								<div key={subLength} style={subLengthConatainerStyle}>
									<span style={subLengthNumStyle}>{subLength}</span>
									<span style={daysStyle}>days</span>
									<Radio
										checked={this.state.subscriptionLength === subLength}
										onChange={this.handleSelectSubLength}
										color={'primary'}
										value={subLength.toString()}
										name={`subscription-length-${subLength}`}
										aria-label={subLength}
									/>
								</div>
							))}
						</div>
					</div>
					<div style={selectSubLengthContainer}>
						<span style={subLengthLabel}>Start Date: </span>
						<div style={selectSubcontainer}>
							<TextField
								id="startDate"
								type="date"
								defaultValue={getDateString(new Date())}
								InputProps={{
									classes: {
										input: classes.dateFieldInput
									}
								}}
								onChange={this.handleStartDateSelect}
								className={classes.dateFieldStyle}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(SubscriptionLength);