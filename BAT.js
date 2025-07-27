/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value.
A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.




*/

function filter(arr, fn) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        // chama a função de teste passando elemento e índice
        if (fn(arr[i], i)) {
            // se deu true, adiciona no resultado
            result.push(arr[i])
        }
    }

    return result;
}

const arr = [0, 10, 20, 30]
const fn = n => n > 10 

console.log(filter(arr, fn)) // [20, 30]


/*

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.

*/


function map(arr, fn){ 

    const resultArray = []

    for(let i = 0; i < arr.length; i++)
            resultArray.push(fn(arr[i]))

    return resultArray
}


const arr2 = [1,2,3,4,5]
const fn2 = n => n + 10

console.log(map(arr2, fn2))