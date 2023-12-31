// Create an IIFE that returns an object with fields:
// method setValue(),
// method showValue()
// and method reverseValue().
// Calling showValue should log the value, or if there is no value
// - tell us about that.
// Calling setValue will set given number or string in closure,
// if the argument is other type - throw an error.
// Value can be type string or number.
// reverseValue(): If number do (*(-1)), if string reverse it.  Closure pattern.

const myObject = (() => {
	let value;

	return {
		setValue(newValue) {
			if (typeof newValue === 'number' || typeof newValue === 'string') {
				value = newValue;
			} else {
				throw new Error('Error');
			}
		},

		showValue() {
			if (value !== undefined || value !== null) {
				console.log(value);
			}
			console.log('No value.');
		},

		reverseValue() {
			if (typeof value === 'number') {
				value *= -1;
			} else if (typeof value === 'string') {
				value = value.split('').reverse().join('');
			}
		},
	};
})();

myObject.setValue(5);
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
myObject.setValue('hello');
myObject.showValue();
myObject.reverseValue();
myObject.showValue();
