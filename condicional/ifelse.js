import leia from 'readline-sync';
 
let ingresso;
let idade;
let nome;
 
ingresso = leia.keyInYN("Tem ingresso?");
idade = leia.questionInt("Qual a idade?");
 
if(ingresso && idade >= 18){
   console.log("Bem vindo!");
   nome = leia.question ("Qual o seu nome?");
   console.log("Olá " + nome);  

}else{
   console.log("Não pode entrar");
}