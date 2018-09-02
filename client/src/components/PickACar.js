import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';=
import Button from '@material-ui/core/Button';

const vehicleFactory = (vin, make, model, year, mileage, imageUrl) => ({vin, make, model, year, mileage, imageUrl});


const vehicles = [
	vehicleFactory("0001", "Lamborghini", "Countach", "1985", 25000, 'http://twinrev.com/img/cars/-9223372036852422073/3b0d7288f8af6e0da735321bd7df2907-1329-713'),
	vehicleFactory("0002", "Mercedes-Benz", "SLS AMG", "2015", 50000, 'https://st.motortrend.com/uploads/sites/10/2017/11/2014-mercedes-benz-sls-amg-coupe-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png'),
	vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png')
];

class PickACar extends Component {
	constructor(props) {
		super(props);
		
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
					{vehicles.map((vehicle, idx) => (
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