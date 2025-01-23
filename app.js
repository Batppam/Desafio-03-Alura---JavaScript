alert('Bem vindo!');

//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10 ){
    alert(`Contador = ${contador}`);
    contador++;
}

while (contador >= 0 ){
    alert(`Contador = ${contador}`);
    contador--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero = prompt('Contagem regressiva de:');

while(numero >= 0){
    alert(`Contagem =${numero}`);
    numero--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero2 = prompt('Contagem progressiva de:');
let zero = 0;

while(numero2 >= zero){
    alert(`Contagem = ${zero}`);
    zero++;
}
