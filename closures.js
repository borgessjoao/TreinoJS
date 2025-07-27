/*

Given an integer n, return a counter function. 
This counter function initially returns n and then returns 
1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

*/

function createCounter(n){
    let atual = n

    return function(){
        return atual++
    }

}

const counter1 = createCounter(10) 
console.log(counter1())
console.log(counter1()) 
console.log(counter1())

const counter2 = createCounter(-2)
console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log(typeof(counter2))

console.log()

/*

Write a function expect that helps developers test their code.
It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other.
If they are not equal, it should throw an error "Not Equal".

notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".

*/


function expect(val) {
    return {
        toBe: function(other) {
            if (val === other) return true;
            throw new Error("Not equal") //
        },
        notToBe: function(other) {
            if (val !== other) return true;
            throw new Error ("Equal")
        }
    };
}

console.log(expect(5).toBe(5));       // true
console.log(expect(5).notToBe(null)); // true

try{
    console.log(expect(5).toBe(null));    // lança "Not Equal"
} catch(e){
    console.log(e.message)
}

