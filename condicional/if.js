import leia from 'readline-sync';

let ingresso;
let idade;

ingresso = leia.keyInYN("Tem ingresso?");
idade = leia.questionInt("Qual a sua idade?");

if (ingresso && idade >= 18) {
    console.log("Pode entrar!");
}