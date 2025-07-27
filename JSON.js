/*

Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

*/


function isEmpty(obj){
    if(Array.isArray(obj)){
        if(obj.length === 0)
            return true
        return false
    }    
    if(Object.keys(obj).length === 0)
        return true
    return false
}

const arr = []

console.log(isEmpty(arr))

const arr2 = [11, 88]

console.log(isEmpty(arr2))

const obj1 = {x: 1, 
              y: 8}

console.log(isEmpty(obj1))


console.log(".")
console.log(".")
console.log(".")
console.log(".")

/*
Given an array arr and a function fn, return a sorted array sortedArr.
You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array
 */


function sort(arr, fn) {
    
    let sortedArray = [...arr]; // copia o array de forma implicita

    // ordena usando o valor de fn
    sortedArray.sort((a, b) => fn(a) - fn(b));

    return sortedArray;
}

const arr1 = [[3, 4], [5, 2], [10, 1]];
const fn = x => x[1];

console.log(sort(arr1, fn)); // [ [10, 1], [5, 2], [3, 4] ]

console.log(".")
console.log(".")
console.log(".")
console.log(".")

/*

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.pars

*/

function lastItem(arr){
    if(arr.length)
        return arr[arr.length - 1]
    return -1
}

const arr11 = []
const arr22 = [3, 6, 7, 8]
const arr33 = [0]

console.log(lastItem(arr11))
console.log(lastItem(arr22))
console.log(lastItem(arr33))