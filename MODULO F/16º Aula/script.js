// EXEMPLO 1

/* function parimpar(numero) {
    if (numero % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimpar(4)); */



// EXEMPLO 2

/* function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5)); */



// EXEMPLO 3

/* let v = function (x) {
    return x*2
}

console.log(v(5)); */



// EXEMPLO 4
/* function fatorial(numero) {
    let fatorial = 1
    for (let contador = numero; contador > 1; contador--) {
        fatorial *= contador
        
    }
    return fatorial
}

console.log(fatorial(5));

// 5! = 5 x 4 x 3 x 2 x 1 = 120 */



// EXEMPLO 5

// MANEIRA RECURSIVA
/* function fatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero-1)
    }
}

console.log(fatorial(5)); */

// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4

// n! = n x (n-1)!
// 1! = 1

