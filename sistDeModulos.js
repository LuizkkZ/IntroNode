//Vamos praticar a importação de módulos, algo que usaremos com frequência.
//
//Seu objetivo será criar 3 variáveis: "moduloNativo", "moduloInstalado" e "moduloProprio", 
//onde cada uma armazenará um módulo distinto. A primeira deve requisitar o módulo http, 
//a segunda o módulo axios e a terceira um módulo local exportado do arquivo minhaFuncao.js. 
//Este arquivo se encontra na mesma pasta que o arquivo index.js.
{
const moduloNativo = require('http');

const moduloInstalado = require('axios');

const moduloProprio = require("./minhaFuncao");
}
//Temos alguns dados do cachorro Scooby armazenados na variável cachorro, o qual queremos usar em outros 
//módulos. Seu trabalho é exportar essa variável, para ser usada em outros pontos do nosso código.
{
let cachorro = {
    nome: 'Scooby',
    idade: 7,
    gostaDeComer: true
}
module.exports = cachorro;
}

//A seguir, temos uma função expressa, que retorna uma String. Mas ela precisa de um nome. Sua tarefa é 
//preencher os espaços com a declaração de variável e dar à ela o nome de exemplo.
{
const exemplo = function () {
    return 'Oi, eu sou uma função expressa';
}
}

//Agora pense nesse exemplo, temos que validar algumas pessoas pelas suas idades. Nosso critério será 
//18 anos como idade miníma e 99 como idade máxima. Ninguém pode mudar essas definições. Para isso acontecer, 
//iremos escrever constantes. Vale dizer que, por questões de boas práticas,  é comum utilizar nome com 
//letras maiúsculas na hora de definir uma constante.﻿﻿
//
//Bom agora, você deve criar um constante chamada IDADE_MINIMA, e outra chamada IDADE_MAXIMA. Que por sua vez, 
//devem ter os valores 18 e 99 respectivamente.

const IDADE_MINIMA = 18
;
const IDADE_MAXIMA = 99
;

//Para este exercício, solicitamos que você declare 4 variáveis ​​usando o let com os nomes: verdadeiro, 
//nada, texto e numero. Para cada um deles, você deve atribuir o tipo de dados que sugere seu nome, 
//conforme apropriado.
{
let verdadeiro = true;
let  nada = null;
let texto = 'Vai Corinthians';
let numero = 13;
}

//Declare uma variável com o nome dado e atribua um valor booleano.
//Então você deve fazer um  if para avaliar essa variável: se for true imprimir "É verdadeiro!", 
//caso contrário "É falso!".
{
var dado = true
if (dado =  true) {console.log ("É verdadeiro!")
}
else {console.log  ("É falso!")
}
}

//Neste exercício te damos uma variável chamada linguagem, que tem uma String atribuída. 
//Seu trabalho agora é construir uma condicional if / else para que, se a variável 
//contém "javascript" imprima no console o texto "Estou aprendendo", se não imprima
//"Vou aprender mais pra frente".
{
let linguagem = "javascript";

if (linguagem === "javascript") {console.log("Estou aprendendo")}
else {console.log("Vou aprender mais pra frente")
}
}

//Vejamos como encontrar elementos dentro de um array.
//
//Para este exercício contamos com o array alunos. Queremos saber onde estão guardados os nomes de 
//"João" e "Francisco". Utilize um dos métodos de array.
//
//Declare as variáveis  indiceJoao, indiceFrancisco e armazene a posição correspondente de cada um.
{
let alunos = ["João", "Pedro", "Jorge", "Francisco"]
var indiceJoao = (0);
var indiceFrancisco = (3);
alunos.indexOf(0);
alunos.indexOf(3);
}

//Sabemos que todo site tem uma URL e precisamos passar sempre o protocolo HTTP antes. 
//Acontece que alguém cadastrou uma lista de sites sem o protocolo e agora precisamos consertar isso.
//
//Para isso, vamos criar uma função chamada dominio. Essa função vai receber um parâmetro 
//URL (pode ser qualquer nome), que é uma string. O retorno dessa função é a própria URL, mas 
//com http:// no começo.
//
//Por exemplo:
//
//Se alguém tentar usar o site twitter.com, a função deve retornar http://twitter.com
//Se alguém tentar usar o site gov.br, a função deve retornar http://gov.br
//Se alguém tentar usar o site digitalhouse.com, a função deve retornar http://digitalhouse.com
{
    function dominio(url)
    {
      if(url)
        return "http://" + url;
      else
        console.log(url+" não informada");
    }
    
    dominio("br.digitalhouse.com");
    dominio("9gag.com");
    
}

//Vamos começar a praticar a sintaxe de uma arrow function que não recebe nenhum parâmetro. 
//Todas as variáveis precisam ser declaradas com let.﻿
//
//Para este exercício vamos dar três funções definidas Seu trabalho será alterá-las para que 
//sejam arrow functions.
{
let cincoNumeros = () => [1,2,3,4,5];

let multiplicarPorDois = () =>  123 * 2 ;

let mostrarNome = () => "Meu nome é Ryan Dahl";
}

//O objetivo deste exercício é imprimir um texto na tela, que será condicionado da seguinte maneira.
//
//Usando "switch" você deve avaliar se a variável "dia" é segunda, quarta ou sexta-feira e, nesse caso, 
//você deve imprimir o texto " você tem aulas!".Para qualquer outro caso, você deve imprimir 
//"você não tem aulas".
{
    let dia = "sabado";

    function fimDeSemana(dia){
        switch(dia){
            case "segunda":
            console.log(" você tem aulas!");
                        break;
                case "quarta":
                console.log(" você tem aulas!");
                        break;
                    case "sexta-feira":
                        console.log(" você tem aulas!");
                        break;
                        default:
                            console.log("você não tem aulas");
        }
    }
    
    fimDeSemana(dia)
}

//O objetivo deste exercício é imprimir no console um texto que varia de acordo com o dia que contém 
//na variável dia. Para isso, já apresentamos um código feito com if / else que você precisará modificá-lo 
//para testar as diferentes mensagem.
{
    let dia = "segunda-feira";

function fimDeSemana(dia){
    	switch(dia){
        case "sexta-feira":
		console.log("Bom fim de semana!");
                    break;
            case "segunda-feira":
			console.log("Boa semana!");
                    break;     
                    default:
                        console.log("Bom dia!");
    }
}

fimDeSemana(dia)
}

//Vamos programar uma função que se comporte como um papagaio. Sim, Tudo o que "ouve", repete!
//
//A função se chama papagaio e deve receber como parâmetro um texto e repetir 5 vezes no console.
//
//Você só precisa declarar a função. Não há necessidade de chamar após a declaração, pois isso vai 
//causar um erro!
{
function papagaio(ouve){

    
    for (let i=0; i<=4; i++){
        console.log(ouve)
    }
}}

//Vamos criar três funções e ver como iniciar a trabalhar com os callbacks.
//
//A primeira função se chamará dobro que receberá um número e retornará o dobro.
//
//A segunda função se chamará triplo que recebera um número e retornará o triplo.
//
//A terceira função será chamada de aplicar e receberá um valor e o nome de uma função como parâmetro. 
//Ela retornará o valor da aplicação da referida função ao valor recebido.

{
    function dobro(numero) {
        return numero * 2;
    }
    function triplo(numero) {
        return numero * 3;
    }
    function aplicar(numero, funcao) {
        return    funcao(numero)
    }
}

//Agora vamos ver como podemos criar uma função que funcione como uma calculadora. Começaremos com algo 
//simples.
//
//Criaremos quatro funções que executarão as principais operações de uma calculadora: seu trabalho será 
//definir as funções somar, subtrair, multiplicar e dividir. Cada uma delas receberá dois parâmetros e 
//deve executar a operação matemática correspondente. Por exemplo, a função somar deve retornar a soma
// de ambos os parâmetros, a função subtrair a subtração de ambos os parâmetros e assim por diante
//Agora, com as funções já definidas, criaremos a função calculadora. Esta função receberá dois parâmetros
// numéricos e o nome de uma função, que será nosso callback.

{
    function somar(numero1, numero2) {
        return numero1 + numero2;
    }
    function subtrair(numero1, numero2) {
        return numero1 - numero2;
    }
    function multiplicar(numero1, numero2) {
        return numero1 * numero2;
    }
    function dividir(numero1, numero2) {
        return numero1 / numero2;
    }
    
    function calculadora(numero1, numero2, funcao) {
        return    funcao(numero1, numero2)
    }
}

//Sua tarefa agora é criar duas funções.
//
//A primeira função deverá se chamar adicionarHttp , a mesma, receberá por parâmetro uma URL que será 
//concatenada com a String "http://" no começo da URL e em seguida retornará esse valor. A segunda função 
//se chamará processar  e receberá uma lista de sites web e uma função. A função processar  retornará um 
//array contendo todos os resultados aplicando a função que foi passada.

{
    function processar(array, funcao){
        let resultado = [];
    
        for (let i=0;i<array.length;i++){
            resultado[i]=funcao(array[i]);
        }
    
        return resultado
    }
    
    function adicionarHttp(url) {
        return "http://" + url
    }
}

//Vamos começar com um mais simples.
//
//Temos um array com numeros definidos e queremos filtrar aqueles que são maiores de 18.
//
//Seu trabalho será definir a variável maiores e armazenar nela os números que cumpram com essa condição, 
//utilizando o método filter.
{
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numeros.filter(function(maior){
    return maior > 18;
});
}

//Considere os valores.
//
//Para este exercício considere a variável bart, que armazena um objeto literal com diferentes 
//propriedades e valores. Queremos que, utilizando um for in, imprima no console os valores de 
//cada propriedade desse objeto.
{
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}
for (let dados in bart) {
console.log(bart[dados]);
};
}

//Da horizontal para a vertical.
//
//Temos uma frase declarada e queremos experimentar um pouco.
//
//Imprima no console cada letra para que a frase seja escrita na vertical.
//
//Já sabe qual sentença você vai usar desta vez?
{
let frase = "Essa semana vou no colearning";
for(let valor of frase){
console.log(valor)
}
}

//Date: uma classe para lidar com o tempo.
//
//Você vai criar agora a sua primeira data com  Date... a que você quiser!
//
//Para começar, você deve criar uma variável data e armazenar nela uma instancia de Date.
//
//Depois, você terá que configurar a data utilizando os métodos setFullYear, setMonth e setDate, 
//passando a eles os argumentos correspondentes a cada um.

{
    let data = new Date()
data.setFullYear(1991);
data.setMonth(2);
data.setDate(10);

console.log(data);
}

//Desestruturando..
//Para este exercício, já temos uma array de destinos mundiais.
//
//Queremos que, usando a desestruturação, você defina as variáveis ​​bariloche e china e extraia 
//apenas os destinos "Bariloche" e "China" da array.

{
    let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [marrocos, bariloche, barcelona, china, grecia] = destinosIncriveis

console.log(bariloche, china);
}

