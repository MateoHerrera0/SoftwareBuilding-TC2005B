//Ejercicio 1
//Función que encuentre el primer carácter de un cadena de texto que no se repite. 
function noRepeat(str) {
    let result = "Todo se repite"
    let counter = 0
    let check = true
    for (const i of str) {
        for (const n of str) {
            if (i == n) {
                counter++
            }
        }
        if (counter == 1 && check) {
            result = i
            check = false
        }
        counter = 0
    }
    return result   
}

//Prueba donde "e" es el unico caracter que no se repite
console.log(noRepeat("abacddbec"))
//Prueba donde "z" no se repite y va primero que "e"
console.log(noRepeat("abzacddbec"))
//Prueba donde todo se repite
console.log(noRepeat("abacddbc"))

//Ejercicio 3
//Escribe una función que implemente el algoritmo 'quick-sort' para ordenar una lista de números.

function quicksort(lst){
    quicksortAux(lst, 0, lst.length-1)
}

function quicksortAux(lst, lo, hi) {
    if (lo>=hi) {
        return
    }
    posOrdenado = partition(lst, lo, hi)
    quicksortAux(lst, lo, posOrdenado-1)
    quicksortAux(lst, posOrdenado+1, hi)
}

function partition(lst, lo, hi) {
    let p = lo
    let i = lo + 1
    let j = hi

    while (true) {
        while (lst[i]<=lst[p] && i < hi) {
            i++
        }
        while (lst[j]>lst[p] && j > lo) {
            j--
        }
        if (i < j) {
            intercambiar(lst, i, j)
        } else {
            intercambiar(lst, p, j)
            break
        }
    }
    return j
}

function intercambiar(lst, pos1, pos2) {
    let x = lst[pos1]
    lst[pos1] = lst[pos2]
    lst[pos2] = x
}

//Prueba en desorden al azar
let example = [4,1,2,5,3]
quicksort(example)
console.log(example)

//Prueba al revez
let example2 = [6,5,4,3,2,1]
quicksort(example2)
console.log(example2)

//Prueba en orden
let example3 = [4,5,6,7]
quicksort(example3)
console.log(example3)

//Ejercicio 5
//Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector
//de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario,
//y multiplicar por un escalar.

class Vector{
    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z 
    }

    suma(vector2){
        let sumVector = new Vector(this.x + vector2.x, this.y + vector2.y, this.z + vector2.z)
        return sumVector
    }

    resta(vector2){
        let differenceVector = new Vector(this.x - vector2.x, this.y - vector2.y, this.z - vector2.z)
        return differenceVector
    }

    magnitud(){
        let magnitude = Math.sqrt(this.x**2 + this.y**2 + this.z**2)
        return magnitude
    }

    vectorUnitario(){
        let unitVector = new Vector(this.x/this.magnitud(), this.y/this.magnitud(), this.z/this.magnitud())
        return unitVector
    }

    escalar(scalar){
        let scalarVector = new Vector(this.x*scalar, this.y*scalar, this.z*scalar)
        return scalarVector
    }
}

let vector1 = new Vector(2, 6, 3)
let vector2 = new Vector(-8, -3, 10)
let vector3 = new Vector(2, -2, 1)

//Prueba suma
console.log(vector2.suma(vector3))

//Prueba resta
console.log(vector2.resta(vector3))

//Prueba magnitud
console.log(vector1.magnitud())

//Prueba vector unitario
console.log(vector3.vectorUnitario())

//Prueba vector escalar
console.log(vector1.escalar(2))

//Ejercicio 7
//Usando ojetos de tu clase 'Vector', crea una función que 
//reciba dos vectores, y que indique si esos vectores son ortogonales o no.

function ortogonal(vector1, vector2) {
    let pointProduct = vector1.x*vector2.x + vector1.y*vector2.y + vector1.z*vector2.z
    if (pointProduct === 0) {
        console.log("Los vectores son ortogonales")
    } else {
        console.log("Los vectores no son ortogonales")
    }
}

//Prueba vectores no ortogonales
ortogonal(vector1, vector2)

//Prueba vectores no ortogonales
ortogonal(vector1, vector3)

//Prueba vectores ortogonales
ortogonal(vector2, vector3)

//Ejercicio 9
//Escribe una función que reciba un número, y regrese una lista con todos sus factores.

function factorial(n) {
    let factores = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factores.push(i)
        }
    }
    console.log(factores)
}

//Prueba con numero 12
factorial(12)

//Prueba con numero 11
factorial(11)

//Prueba con numero 120
factorial(120)