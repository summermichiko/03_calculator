function Calculator() {
    this.currentValue = 0;
};

Calculator.prototype.value = function() {
	return currentValue;
};

Calculator.prototype.add = function(number) {
	return this.currentValue += number;
};

Calculator.prototype.subtract = function(number) {
	return this.currentValue -= number;
};





