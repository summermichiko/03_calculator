function Calculator(){
//   this = {};
 
	 var total = 0;
	 
	 this.value = function(){
	   return total;
	 }
	 
	 this.add = function(num){
	   total += num;
	 }
	 
	 this.subtract = function(num){
	   total -= num;
	 }
}

// function Calculator() {
//     this.currentValue = 0;
// };

// Calculator.prototype.value = function() {
// 	return this.currentValue;
// };

// Calculator.prototype.add = function(number) {
// 	this.currentValue += number;
// };

// Calculator.prototype.subtract = function(number) {
// 	this.currentValue -= number;
// };





