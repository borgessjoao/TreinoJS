/*

Given a function fn, return a new function that's identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.

Every subsequent time it is called, it should return undefined.
  
 */

function once(fn){
    let called = false
    let result

     return function(...args) { 
        if (!called) {
            called = true;
            result = fn(...args); 
            return result;
        }
         return undefined // se ja chamou antes
    }    
}


const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined


console.log(".")
console.log(".")
console.log(".")
console.log(".")

/*

Given an array of functions [f1, f2, f3, .., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

*/

function composition(arr){ 

    return function(x) {
        let result = x;
        for (let i = arr.length - 1; i >= 0; i--) {
            result = arr[i](result);
        }
        return result;
    };

}


const functions = [x => x + 1, x => x * x, x => 2 * x]
const fn2 = composition(functions)
let x = 4

console.log(fn2(x))


console.log(".")
console.log(".")
console.log(".")
console.log(".")


/*

Write a function argumentsLength that returns the count of arguments passed to it.

*/

function argumentsLength(...args){ // aceita quantos parametros quiser, e guarda eles num array
    return args.length
}

console.log(argumentsLength())// 0
console.log(argumentsLength(1,2,4)) // 3
console.log(argumentsLength("wallpaper", 9)) // 2