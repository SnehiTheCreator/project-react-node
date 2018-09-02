import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import {getVehicles} from "../../services";


class PickACar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicles: []
		}
		
	}
	
	componentDidMount() {
		getVehicles()
			.then(res => res.json())
			.then(res => {
				this.setState({vehicles: res})
			})
			.catch(err => {
				console.log('err: ', err);
			})
	}
	
	updateVin = (vehicle) => {
		return () => {
			this.props.update(
				{
					vin: vehicle.vin,
					make: vehicle.make,
					model: vehicle.model,
					year: vehicle.year,
					mileage: vehicle.mileage
				}, true)
		}
	}
	
	render(){
		
		return (
			<div className='step-component'>
				<GridList cellHeight={220} spacing={30}>
					{this.state.vehicles.map((vehicle, idx) => (
						<GridListTile key={`${vehicle.imageUrl} ${idx}`}>
							<img src={vehicle.imageUrl} style={{height:'100%', width:'100%', objectFit: 'contain'}}alt={vehicle.model} />
							<GridListTileBar
								title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
								subtitle={<span>Mileage: {vehicle.mileage}</span>}
								actionIcon={
									<Button
										color={'primary'}
										style={{marginRight: '15px'}}
										variant={'contained'}
										onClick={this.updateVin(vehicle)}>
										Select
									</Button>
								}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		)
	}
}

export default PickACar;