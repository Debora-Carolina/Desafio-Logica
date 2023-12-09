console.log ("1° DESAFIO DE LÓGICA")

//Crie uma variável para guardar a data de nascimento da Mariah Carey (Simples, é só pegar o ano atual e subtrair pela a idade dela 😉)
let anoAtual = 2023;
let idade = 54;

//Mostre no console a data de nascimento da Mariah Carey

const anoDeNascimento = anoAtual -= idade;
console.log (`O ano de nascimento da Mariah Carey é ${anoDeNascimento}`);

//Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log;
let quartaFeira = false;
console.log (quartaFeira);

//Exiba no console o tipo de dado da váriavel quartaFeira;
console.log (typeof quartaFeira);

//Crie uma condição  SE você for maior ou igual 18 retornará  a mensagem:  Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey. SENÃO for maior ou igual a 18,  retorne a seguinte mensagem:  "Sinto muito, mas assistirá da tv globo"

let _idade = 40;

if (_idade >= 18) { 
    console.log ("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.")
} else {
console.log ("Sinto muito, mas assistirá da tv globo.")
}

//Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO. Caso seja verdadeira a informação, retorne essa mensagem: Uma ou mais opções estão corretas. O mês escolhido foi o mês tal. Caso a informação seja falsa, retorne a seguinte mensagem:  Algo de errado não está certo, o mês digitado foi o mês tal.

let mesAniversario = "Maio";

if (mesAniversario == "Agosto" || mesAniversario =="Dezembro" || mesAniversario == "Junho") {
    console.log (`Uma ou mais opções estão corretas. O mês escolhido foi o mês ${mesAniversario}`);
} else {
    console.log (`Algo de errado não está certo, o mês digitado foi o mês ${mesAniversario}`);
}
 

let fim = "Fim do primeiro Desafio de Lógica uhuhuhuh!!!!!!"
console.log (fim);



