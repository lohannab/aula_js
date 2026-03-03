import leia from 'readline-sync';
 
let ingresso;
let idade;
let nome;
let acompanhante;
 
ingresso = leia.keyInYN("Tem ingresso?");
idade = leia.questionInt("Qual a idade?");

 
if(ingresso && idade >= 18){
   console.log("Bem vindo!");
   nome = leia.question ("Qual o seu nome?");
   console.log("Olá " + nome);  

}else if(ingresso && idade >= 14){
    console.log("Bem vindo!");
    acompanhante = leia.keyInYN("Está acompanhado?");
    if(acompanhante){
        console.log("Pode entrar!");
    }else{
        console.log("Não pode entrar");
    }
}else{
   console.log("Não pode entrar");
}