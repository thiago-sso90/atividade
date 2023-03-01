//Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
//encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
//elemento minimax, mostrando também sua posição

let valor = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
[81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
[91, 92, 93, 94, 95, 96, 97, 98, 59, 100]
];
let verificaposi = new Array(100)

let minimax
let posicao

minimax = valor[0];



for (let i = 0; i < valor.length; i++) {
    if (valor[i] >= minimax) {
        minimax = valor[i]
        posicao = [i]

    }
}







console.log('o minimax da matriz é:', minimax);
console.log('e esta na posição', posicao);
