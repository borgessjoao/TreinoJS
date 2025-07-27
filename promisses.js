/*

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.

*/

function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])  // espera as duas promessas
        .then(values => { // executa quando chegar as duas
            const val1 = values[0]     // pega os resultados
            const val2 = values[1]
            return val1 + val2;              // retorna a soma
        });
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
    .then(result => console.log(result)); // 7


console.log(".")
console.log(".")
console.log(".")
console.log(".")
console.log(".")

  
  
  
/*

Given an array of asynchronous functions functions, return a new promise promise.
Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. 
The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. 
The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

*/


function runFunctionsInParallel(functions) {
    return new Promise((resolve, reject) => {
        let resultados = [];
        let contador = 0;
        const tamanho = functions.length;

        if (tamanho === 0) {
            resolve([]); // caso especial: lista vazia
            return;
        }

        for (let i = 0; i < tamanho; i++) {
            functions[i]()
                .then(valor => {
                    resultados[i] = valor;
                    contador++;
                    if (contador === tamanho) resolve(resultados);
                })
                .catch(erro => reject(erro));
        }
    });
}

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(10), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(20), 30)),
    () => new Promise(resolve => setTimeout(() => resolve(30), 10))
];

runFunctionsInParallel(functions)
    .then(resultados => console.log(resultados))
    .catch(erro => console.error(erro));