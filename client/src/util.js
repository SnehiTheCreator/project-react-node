
export const getDateString = (date) => {
	const month = date.getMonth().toString().length === 1 ? ('0' + date.getMonth()) : date.getMonth();
	const day = date.getDate().toString().length === 1 ? ('0' + date.getDate()) : date.getDate();
	return `${date.getFullYear()}-${month}-${day}`;
}