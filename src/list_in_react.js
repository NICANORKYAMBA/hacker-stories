#!/usr/bin/node

const numbers = [2, 3, 4, 5];

const exponentialNumbers = numbers.map((number) => {
	return number * number;
});

console.log(exponentialNumbers);
