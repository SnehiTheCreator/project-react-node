const { send, json } = require('micro')
const { router, get } = require('microrouter')

const vehicleFactory = (vin, make, model, year, mileage, imageUrl) => ({vin, make, model, year, mileage, imageUrl});

module.exports = router(
  get('/vehicles', (req, res) => {
    const vehicles = [
      vehicleFactory("0001", "Lamborghini", "Countach", "1985", 25000, 'http://twinrev.com/img/cars/-9223372036852422073/3b0d7288f8af6e0da735321bd7df2907-1329-713'),
      vehicleFactory("0002", "Mercedes-Benz", "SLS AMG", "2015", 50000, 'https://st.motortrend.com/uploads/sites/10/2017/11/2014-mercedes-benz-sls-amg-coupe-angular-front.png'),
      vehicleFactory("0002", "Land Rover", "Range Rover Sport", "2017", 40000, 'https://st.motortrend.com/uploads/sites/10/2015/11/2011-land-rover-range-rover-hse-4wd-suv-angular-front.png')
    ];
    
    
    return vehicles;
  })
)
