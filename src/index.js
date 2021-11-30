const cities = [
	'cuidad de mexico', 
	'bogota', 
	'lima', 
	'buenos aires', 
	'guadalajara'
];

const randomString = () => {
	const string = cities[Math.floor(Math.random() * cities.length)];
	return string;
};

const reverseString2 = str => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('Error'))
		} else {
			resolve(str.split("").reverse().join(""))
		}
	});
};

module.exports = randomString;