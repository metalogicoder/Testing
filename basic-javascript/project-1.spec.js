const funcs = require("./project-1");

describe("multiplyByTen function", () => {
	// arrange
	const expected = 50;
	// act
	const multiplyByTen = funcs.multiplyByTen(5);
	// assert
	it("multiply a number by 10", () => {
		expect(multiplyByTen).toBe(expected);
	});
});

describe("subtractFive function", () => {
	// arrange
	const expected = 10;
	// act
	const subtractFive = funcs.subtractFive(15);
	// assert
	it("subtract a number by 5", () => {
		expect(subtractFive).toBe(expected);
	});
});

describe("areSameLength function", () => {
	// arrange
	const expected = true;
	// act
	const areSameLength = funcs.areSameLength("abc", "def");
	// assert
	it("check if strings are the same length", () => {
		expect(areSameLength).toBe(expected);
	});
});

describe("areEqual function", () => {
	// arrange
	const expected = true;
	// act
	const areEqual = funcs.areEqual(10, 10);
	// assert
	it("both both arguments should be equal", () => {
		expect(areEqual).toEqual(expected);
	});
});



