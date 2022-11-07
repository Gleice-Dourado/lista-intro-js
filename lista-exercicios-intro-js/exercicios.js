// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
 
  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo()
 {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura do retangulo.")
  const largura = prompt("Digite a largura do retangulo.")
  const area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Informe o ano atual.")
  const anoNasc = prompt("Informe o ano em que você nasceu.")
  const idade =  anoAtual - anoNasc
   
  console.log(idade)
}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc  = peso / (altura * altura)
return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome  = prompt('Informe seu nome.')
  const idade  = prompt('Informe sua idade.')
  const email  = prompt('Informe seu email.')
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFav1 = prompt("comida favorita numero 1.")
  const corFav2 = prompt("comida favorita numero 2.")
  const corFav3 = prompt("comida favorita numero 3.")
  const coresFav = [corFav1, corFav2, corFav3]
  console.log(coresFav)
}
    
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiusc = string.toUpperCase()
  return stringMaiusc
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosVend = custo / valorIngresso
  return ingressosVend

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const checmMesmoTam = string1.length === string2.length
  return checmMesmoTam

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array [0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length-1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]

  array[0] = ultimoElemento
  array[array.length-1] = primeiroElemento
 
  return array    
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const novaString1 = string1.toUpperCase()
  const novaString2 = string2.toUpperCase()
  return novaString1 === novaString2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Informe o ano atual"))
const anoNasc = Number(prompt("Informe o ano de nascimento"))
const anoDeEmissao = Number(prompt("Informe o ano de emissão do RG"))
const idade = anoAtual - anoNasc
const idadeRG = anoAtual - anoDeEmissao
const precisaRenovar = (idade <= 20 && idadeRG >= 5) || (idade > 20 && idade <= 50 && idadeRG >= 10) || (idade > 50 && idadeRG >= 15)

console.log(precisaRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  // calculo para identificar se ano é multiplo de 400. 
  // Se o resto da divisão for 0 é multiplo
  const bisexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
  return bisexto


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const perg1 = prompt('Você tem mais de 18 anos?("sim" ou "nao")')
  const resp1 = perg1
  const perg2 = prompt('Você possui ensino médio completo?("sim" ou "nao"')
  const resp2 = perg2
  const perg3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso?("sim" ou "nao")')
  const resp3 = perg3
  const inscValida = resp1 === "sim" && resp2 === "sim" && resp3 === "sim"
  console.log(inscValida)

}
