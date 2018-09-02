

const serviceUrls = {
	vehicles: 'http://localhost:3003/vehicles',
	pricing: 'http://localhost:3001/',
	postSubscription: 'http://localhost:3002/'
}

export const getVehicles = () => {
	return fetch(serviceUrls.vehicles)
};

export const getPricing = (vin, subscriptionLength) => {
	let queryString = `?vin=${encodeURIComponent(vin)}&subscriptionLength=${encodeURIComponent(subscriptionLength)}`;
	return fetch(serviceUrls.pricing + queryString);
}

export const postSubscription = (subscription) => {
	return fetch(serviceUrls.postSubscription, {
		method: 'POST',
		body: JSON.stringify(subscription)
	})
}