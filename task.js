//TASK 1

// convertFahrToCelsius

const fahrToCelsius = (input) => {
	let toCelsius = (input - 32) * 5/9;
	let toFourDecimalPlaces = toCelsius.toFixed(4)
 	console.log(toFourDecimalPlaces);

 	return toFourDecimalPlaces;
}

const convertFahrToCelsius = (input) => {
	let convertInputToNumber;
	(Array.isArray(input) && input.length > 0) ? convertInputToNumber = Number(input) : convertInputToNumber = parseInt(input)
	return isNaN(convertInputToNumber) ? errorHandler(input) : fahrToCelsius(input)
}

const errorHandler = (input) => {
		let errorMessage = ''; 
		(Array.isArray(input)) ?
			errorMessage = `${JSON.stringify(input)} is not a valid number but a/an array.` 
			:
			errorMessage = `${JSON.stringify(input)} is not a valid number but a/an object.`

		console.log(errorMessage);

	return errorMessage;
}



//TASK 2

// checkYuGiOh

const createArray = (n) => {
	let array = [];
	for(let i = 1; i <= n; i++) {
		if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
			array.push('yu-gi-oh')
		} else if(i % 2 === 0 && i % 3 === 0) {
			array.push('yu-gi')
		} else if(i % 2 === 0 && i % 5 === 0) {
			array.push('yu-oh')
		} else if(i % 3 === 0 && i % 5 === 0) {
			array.push('gi-oh')
		} else if(i % 2 === 0) {
			array.push('yu')
		} else if(i % 3 === 0) {
			array.push('gi')
		} else if(i % 5 === 0) {
			array.push('oh')
		} else {
			array.push(i)
		}
	}

	console.log(array);

	return array;
}

const checkYuGiOh = (n) => {
	let inputToNumber = '';
	(Array.isArray(n) && n.length > 0) ? inputToNumber = Number(n) : inputToNumber = parseInt(n);
	return isNaN(inputToNumber) ? errorHandlerFunc(n) : createArray(n);
}

const errorHandlerFunc = (n) => {
	let errorMessage = `Invalid parameter: ${JSON.stringify(n)}`;
	console.log(errorMessage);
	return errorMessage;
}