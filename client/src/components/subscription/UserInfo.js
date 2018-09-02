import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const fieldsContainer = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: '60px'
}

const styles = theme => ({
		fieldStyle: {
			width: 400
		},
		fieldInput: {
			fontSize: 30,
			fontWeight: 'lighter',
			lineHeight: 1
		}
	}
)

class UserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			email: this.props.email,
			dob: this.props.dob
		}
	}
	
	handleChange = (field) => (
		(e) => {
			let value = e.target.value;
			// might cause latency due to frequent re-rendering of parent but since there a small amount of fields
			// it should be okay for this case
			this.setState({[field]: value}, this.props.update({[field]: value}))
		}
	)
	
	render() {
		
		const { classes } = this.props;
		
		return (
			<div className='step-component'>
				<div style={fieldsContainer}>
					<TextField
						id="firstName"
						label="First name"
						value={this.state.firstName}
						onChange={this.handleChange('firstName')}
						margin="normal"
						InputProps={{
							classes: {
								input: classes.fieldInput
							}
						}}
						className={classes.fieldStyle}
					/>
					<TextField
						id="lastName"
						label="Last name"
						value={this.state.lastName}
						onChange={this.handleChange('lastName')}
						margin="normal"
						InputProps={{
							classes: {
								input: classes.fieldInput
							}
						}}
						className={classes.fieldStyle}
					/>
					<TextField
						id="email"
						label="Email"
						error={this.props.emailError}
						value={this.state.email}
						helperText={this.props.emailError ? "Enter valid email" : null}
						onChange={this.handleChange('email')}
						margin="normal"
						InputProps={{
							classes: {
								input: classes.fieldInput
							}
						}}
						className={classes.fieldStyle}
					/>
					<TextField
						id="dob"
						type="date"
						label="Date of birth"
						value={this.state.dob}
						onChange={this.handleChange('dob')}
						margin="normal"
						InputProps={{
							classes: {
								input: classes.fieldInput,
							}
						}}
						InputLabelProps={{
							shrink: true
						}}
						className={classes.fieldStyle}
					/>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(UserInfo);