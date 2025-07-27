/*

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. 
For example, [1,2,3].
 
*/

class ArrayWrapper{

    constructor(nums){
        this.nums = nums
    }

     // Chamado quando tentamos converter o objeto em número (ex: obj1 + obj2)
    valueOf() {
        return this.nums.reduce((acc, val) => acc + val, 0);
    }
       
    // Chamado quando usamos String(obj)
    toString() {
        return `[${this.nums.join(",")}]`;
    }

}


const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);   // 10
console.log(String(obj1));  // "[1,2]"
console.log(String(obj2));  // "[3,4]"

const obj3 = new ArrayWrapper([]);
const obj4 = new ArrayWrapper([]);
console.log(obj3 + obj4);   // 0


console.log(".")
console.log(".")
console.log(".")
console.log(".")
console.log(".")

/* 

Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. 
It should also allow consecutive operations to be performed using method chaining. 
The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result.
Solutions within 10-5 of the actual result are considered correct.
*/

class Calculator{

    constructor(result){
        this.result = result;
    }

    add(num){
        this.result += num;
        return this.result;
    }

    subtract(num){
        this.result -= num;
        return this.result;
    }

    multiply(num){
        this.result *= num;
        return this.result;
    }

    divide(num){
        this.result /= num;
        return this.result;
    }

    power(num){
        this.result = this.result ** num;
        return this.result;
    }

    getResult(){
        return this.result;
    }

}

let num = new Calculator(1);

console.log(num.add(4)) // 5
console.log(num.subtract(3)) // 2
console.log(num.multiply(5)) // 10
console.log(num.divide(1)) // 10
console.log(num.power(3)) // 1000
