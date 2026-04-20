function exercicio1() {
    let nome = prompt("Digite seu nome: ");
    let idade = parseInt(prompt("Digite sua idade: "));

    if (idade <= 17 ) {
        alert("criança");
    } else {
        alert("adulto");
    }
}

function exercicio2() {
    let num = parseInt(prompt("Digite um número"));

    if (num < 10) {
        alert("Menor que 10");
    } else {
        alert("Maior que 10");
    }
}
function exercicio3() {
    let num = parseInt(prompt("Digite um numero"));

    if (num === 0 ) {
        alert("É zero");
    } else { 
        alert("não é zero")
    }
}

function exercicio4() {
    let num = parseInt(prompt("Digite um numero"));

    if (num === 8001) {
        alert("É 8001");
    } else {
        alert("É diferente de 8001");
    }
}
function exercicio5() {
    let num1 = parseInt(prompt("digite um numero"));
    let num2 = parseInt(prompt("Digite outro numero"));

    let soma = num1 + num2; 

    if (soma < 0 ) {
        alert("Seu numero é negativo");
    } else {
        alert("seu número é positivo")
    }
}

function exercicio6() {
    let compra1 = parseInt(prompt("Digite o valor da primeira compra: "));
    let compra2 = parseInt(prompt("Digite o valor da segunda compra: "));
    let compra3 = parseInt(prompt("Digite o valor da terceita compra: "));

    let total = compra1 + compra2 + compra3;

    if (total <= 100) {
        alert("você pode comprar");
    } else {
        alert("Você não pode")
    }
}
function exercicio7() {
    let idade = parseInt(prompt("digite sua idade: "));

    if (idade < 16) {
        alert("não pode votar") ; 
    } else if ((idade === 16) && (idade === 17)) {
        alert("Voto opcional");
    } else if (idade >= 18) {
        alert("Voto obrigatório")
    } else if ((idade < 0) && (idade >= 115)) {
        alert("Você não é um ser humano")
    }
}

function exercicio8() {
    let num = parseInt(prompt("digite um numero: "));

    if (num < 0) {
        alert("negativo");
    } else if (num > 0) {
        alert("Positivo");
    } else {
        alert("0");
    }
}
function exercicio9() {
    let num1 = parseInt(prompt("digite um numero"));
    let num2 = parseInt(prompt("digite outro numero"));

    if (num1 > num2) {
        alert("numero 1 é maior");
    } else if (num1 < num2) {
        alert("numero 2 é maior");
    } else {
        alert("eles são iguais");
    }
}
function exercicio10() {
    let num = parseInt(prompt("Digite um numero:"));

    if ((num < 10) && (num > 20)) {
        alert("ele não está entre 10 e 20")
    } else {
        alert("ele está")
    }
}
function exercicio11(){
    let num1 = parseInt(prompt("Digite um numero:"));

    if (num1 < 0) {
            alert("Negativo");
    } else {
        alert("positivo")
    }

    let num2 = parseInt(prompt("Digite outro numero:"));

    if (num2 < 0) {
        alert("Negativo");
    } else {
        alert("positivo")
    }

    let num3 = parseInt(prompt("Digite outro numero:"));

    if (num3 < 0) {
        alert("Negativo");
    } else {
        alert("positivo")
    }


}

function exercicio12() {
    let usuario = prompt("Digite seu usuário: ")
    let senha = parseInt(prompt("Digite sua Senha: "))

    if ((usuario === "admin") && (senha === 1234)) {
        alert("login correto");
    } else {
        alert("login incorreto");
    }   
}
function exercicio13() {
    let num = parseInt(prompt("Digite um numero:"));

    if (num % 2 === 1 ) {
        alert("Impar")
    } else {
        alert("Par")
    }
}

function exercicio14() {
    let salario = parseInt(prompt("Qual seu salario"));

    if (salario < 2000) {
        alert("baixo");
    } else if ((salario > 2000) && (salario < 5000)) {
        alert("Medio")
    } else {
        alert("alto")
    }
}
function exercicio15() {
    let temperatura = parseFloat(prompt("qual é a temperatura"))

    if (temperatura < 15 ) {
        alert("frio");
    } else if (( temperatura > 15) && (temperatura < 25)) {
        alert("agradevel")
    } else {
        alert("quente")
    }
}
function exercicio16() {
    let num1 = parseInt(prompt("digite um numero: "));
    let num2 = parseInt(prompt("digite outro numero: "));

    if (num1 / num2 === 0) {
        alert("eles são multiplos")
    } else {
        alert("não é")
    }
}

function exercicio17() {
    let nota1 = parseFloat(prompt("Digite 1 nota"))
    let nota2 = parseFloat(prompt("Digite 2 nota"))
    let nota3 = parseFloat(prompt("Digite 3 nota"))

    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        alert("aprovado")
    } else if ((media < 5 ) && (media > 6.9)) {
        alert("recuperação")
    } else {
        alert("reprovado")
    }
}

function exercicio18() {
    let idade = parseInt(prompt("digite sua idade: "));
    let renda = parseFloat(prompt("Digite sua renda "));

    if ((idade >= 18) && (renda >= 2000)) {
        alert("Aprovado para crédito")
    } else {
        alert("Não aprovado")
    }
}
function exercicio19() {
    let horas = parseFloat(prompt("que horas são: "))

    if ((horas > 0) && (horas < 11)){
        alert("Bom dia");
    } else if ((horas > 11) && (horas < 17)) {
        alert("boa tarde");
    } else if ((horas > 17) && (horas < 23)) {
        alert ("boa noite");
    } else ("hora invalidade")
}

//tem fazer bagulho ainda pq né tem que né gurizao 

function exercicio20() {
    let num1 = parseInt(prompt("digite um numero: "));
    let num2 = parseInt(prompt("digite outro numero: "));

    let soma = num1 + num2;
    let menos = num1 - num2;
    let multiplica = num1 * num2;
    let dividir = num1 / num2;

    let operacao = prompt("Oq você deseja?" + "\nSoma:" + "\nSubtração" + "\nMultiplicação:" + "\nDivisão:")

    if (operacao === "Soma" ) {
        alert(soma)
    } else if (operacao === "Subtração") {
        alert(menos)
    } else if (operacao === "Multiplicação") {
        alert(multiplica)
    } else if (operacao === "Divisão") {
        alert(dividir)
    } else {
        alert("operação invalida")
    }
}

function exercicio21() {
    let x = parseInt(prompt("Digite um numero:"))
    let y = parseInt(prompt("Digite outro numero:"))
    let z = parseInt(prompt("Digite outro numero:"))

    let menor = 0
    let meio = 0 
    let maior = 0

    if (x <= y && x <= z) {
        menor = x
    } else if (y <= x && y <= z) {
        menor = y
    } else {
        menor = z
    }

    if (x >= y && x >= z) {
        maior = x
    } else if (y >= x && y >= z){
        maior = y 
    } else {
        maior = z
    }

    meio = x + y + z - menor - maior
        
    alert(menor + ", " + meio + ", " + maior)
}
function exercicio22() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))
    let num3 = parseInt(prompt("Digite outro numero:"))

    let maior = 0

    if (num1 >= num2 && num1 >= num3) {
        maior = num1
    } else if (num2 >= num1 && num2 >= num3 ){
        maior = num2
    } else {
        maior = num3
    }
    alert("O maior numero é: " + maior)
}
function exercicio23() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))
    let num3 = parseInt(prompt("Digite outro numero:"))

    let menor = 0

    if (num1 <= num2 && num1 <= num3) {
        menor = num1
    } else if (num2 <= num1 && num2 <= num3 ){
        menor = num2
    } else {
        menor = num3
    }
    alert("O menor numero é: " + menor)
}
function exercicio24() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))
    let num3 = parseInt(prompt("Digite outro numero:"))

    if (num1 <= num2 && num2 <= num3) {
         alert("Os números estão em ordem crescente: " + num1 + ", " + num2 + ", " + num3)
    } else if (num1 >= num2 && num2 >= num3) {
        alert("Os números estão em ordem decrescente: " + num1 + ", " + num2 + ", " + num3)
    } else {
        alert("Os números estão sem ordem definida: " + num1 + ", " + num2 + ", " + num3)
    }
}

function exercicio25() {
    let idade = parseInt(prompt("Digite a sua idade:"))

    if (idade < 0) {
        alert("Idade inválida!")
    } else if (idade <= 12) {
        alert("Você é uma criança.")
    } else if (idade <= 17) {
        alert("Você é um adolescente.")
    } else if (idade <= 59) {
        alert("Você é um adulto.")
    } else {
        alert("Você é um idoso.")
    }
}
function exercicio26() {
    let valor = parseFloat(prompt("Digite o valor da compra: "))
    let pagamento = prompt("Forma de pagamento: " + "\nCartão" + "\nPix" )

    if (pagamento === "Cartão") {
        let acresmimo = 0.15
        let valoracresimo = valor * acresmimo
        let valorFinal = valor + valoracresimo 
         alert("Forma de pagamento: Cartão\nAcréscimo de 15%" + "\nValor final: R$ " + valorFinal.toFixed(2))
    } else if (pagamento === "Pix") {
        let desconto = 0.15;
        let valordesconto = valor * desconto
        let valorFinal2 = valor - valordesconto
        alert("Forma de pagamento: Pix\nDesconto de 15%: R$ " + "\nValor final: R$ " + valorFinal2.toFixed(2))
    } else {
        alert("Forma de pagamento inválida!")
    }
}
function exercicio27() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))

    if (num1 > 0 && num2 > 0) {
        alert("Os dois são positivos")
    } else if (num1 < 0 && num2 < 0) {
        alert("Os dois negativos")
    } else if (num1 < 0 || num2 < 0) {
        alert("Um número é negativo e outro e positivo")
    }
}
function exercicio28() {
    let nota1 = parseInt(prompt("Digite a 1 nota"))
    let nota2 = parseInt(prompt("Digite a 2 nota"))
    let nota3 = parseInt(prompt("Digite a 3 nota"))

    let faltas = parseInt(prompt("Quantas faltas você tem?"))
    
    let media = (nota1 + nota2 + nota3) / 3;
    let percentualFaltas = 0.75 * 200;

    if (media < 6 || faltas > percentualFaltas) {
        alert("Reprovado")
    } else {
        alert("Aprovado")
    }
}

function exercicio29() {
    let num = parseInt(prompt("Digite um numero:"))

    if (num % 2 == 0 && num % 3 == 0) {
        alert("ele é divisivel por ambos")
    } else if (num % 2 == 0) {
        alert(" é divisivel por dois")
    } else if (num % 3 == 0) {
        alert(" é divisivel por três")
    } else {
        alert("não é por nenhum")
    }
}

function exercicio30() {
    let ano = parseInt(prompt("Digite um ano:"))

    if (ano % 4 == 0 && ano % 100 != 0) {
        alert(ano + " é bissexto!")
    } else if (ano % 400 == 0) {
        alert(ano + " é bissexto!")
    } else {
        alert(ano + " não é bissexto.")
    }
}
// 31 não entendi

function exercicio32() {
    let num = parseInt(prompt("Digite um numero:"));

    if (num > 50 && num < 100 ){
        alert("Ele está dentro");
    } else {
        alert("não");
    }
}
function exercicio33() {
    let num1 = parseInt(prompt("Digite um numero:"));
    let num2 = parseInt(prompt("Digite outro numero:"));

    let diferenca = num1 - num2 

    if (num < 0) {
        alert("Negativo")
    } else if (num > 0 ) {
        alert("Positivo")
    } else {
        alert("Zero")
    }
}
function exercicio34() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    let media = (num1 + num2 + num3) / 3
    let referencia = 7

    if (media >= referencia) {
        alert("Média: " + media.toFixed(2) + "\nA média está acima ou igual à referência (" + referencia + ")")
    } else {
        alert("Média: " + media.toFixed(2) + "\nA média está abaixo da referência (" + referencia + ")")
    }
}
function exercicio35() {
    let num = parseInt(prompt("Digite um numero:"));

    if (num < 9 && num > -9) {
        alert("Um digito")
    } else if (num >= -99 && num <= 99) {
        alert(" Dois digitos")
    } else {
        alert("zero")
    }
}

function exercicio36() {
    let num = parseInt(prompt("Digite um numero:"))

    if (num == 5 || num == 10 || num == 15 || num == 20) {
        alert(num + " pertence ao conjunto {5, 10, 15, 20}!")
    } else {
        alert(num + " não pertence ao conjunto {5, 10, 15, 20}.")
    }
}
function exercicio37() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))

    if (num1 == num2) {
        alert("Os números são iguais!")
    } else if (num1 > num2) {
        alert("Os números são diferentes!\nO maior é: " + num1)
    } else {
        alert("Os números são diferentes!\nO maior é: " + num2)
    }
}
function exercicio38() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 < 0 || num2 < 0 || num3 < 0) {
        alert("Pelo menos um dos números é negativo!")
    } else {
        alert("Nenhum dos números é negativo.")
    }
}

function exercicio39() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 > 0 || num2 > 0 || num3 > 0) {
        alert("Pelo menos um dos números é Positivo!")
    } else {
        alert("Nenhum dos números é Positivo.")
    }
}
function exercicio40() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))

    if (num1 % num2 == 0) {
        alert("É multiplo")
    } else {
        alert("Não é")
    }
}
function exercicio41() {
    let num = parseInt(prompt("Digite um numero:"));

    let intervano1 = [1,50]
    let intervano2 = [51,100]

    if (num >= intervano1[0] && num <= intervano1[1]){
        alert(num + " está no intervalo 1: [1 a 50]")
    } else if (num >= intervano2[0] && num <= intervano2[1]) {
        alert(num + " está no intervalo 2: [100 a 200]")
    } else {
        alert(num + " não está em nenhum dos intervalos.")
    }      
}
function exercicio42() {
    let num = parseInt(prompt("Digite um numero:"));

    let intervalo = [1,100]

    if (num >= intervalo[0] && num <= intervalo[1]) {
        alert(num + " está dentro do intervalo [1 a 100]!")
    } else {
        alert(num + " está fora do intervalo [1 a 100].")
    }
}
function exercicio43() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 == num2 || num1 == num3 || num2 == num1 || num2 == num3 || num3 == num1 || num3 == num2){
        alert("Tem iguais ai")
    } else {
        alert("são todos diferentes")
    }

}
function exercicio44() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 == num2 || num1 == num3 || num2 == num1 || num2 == num3 || num3 == num1 || num3 == num2){
        alert("tem São iguais, congratulations")
    } else {
        alert("tem diferentes ai cumprade")
    }

}
function exercicio45() {
    let valor = parseFloat(prompt("Digite o valor da sua compra: "))
    let minino = 500 
    let desconto = 0.15

    if (valor >= minino) {
        valordesconto = desconto * valor
        valordesconto - valor
        alert("Você ganhou um desconto de R$ " + valorDesconto.toFixed(2))
        alert("Valor final da compra: R$ " + valorFinal.toFixed(2))
    } else {
        alert("Sem desconto. Valor da compra: R$ " + valor.toFixed(2))
    }
}
function exercicio46() {
    let idade = parseInt(prompt("Digite sua idade: "))

    if (idade >= 18) {
        alert("Acesso permitido!")
    } else {
        alert("Acesso negado! Você precisa ter 18 anos ou mais.")
    }
}
function exercicio47() {
    let numero = parseInt(prompt("Digite um número: "))

    if (numero % 10 === 0) {
        alert("O número é divisível por 10!")
    } else if (numero % 5 === 0) {
        alert("O número é divisível por 5!")
    } else {
        alert("O número não é divisível por 5 nem por 10.")
    }
}
function exercicio48() {
    let num1 = parseInt(prompt("Digite um número: "));
    let num2 = parseInt(prompt("Digite outro número: "));

    let intervalo1 = [1,50]

    if (num1 < intervalo1[0] && num2 < intervalo1[1]) {
        alert("Eles estão")
    } else {
        alert("Não estão")
    }
}


function exercicio49() {
    let num1 = parseFloat(prompt("Digite o primeiro número: "))
    let num2 = parseFloat(prompt("Digite o segundo número: "))
    let num3 = parseFloat(prompt("Digite o terceiro número: "))

    if (num1 + num2 > num3) {
        alert("A soma de " + num1 + " e " + num2 + " é maior que " + num3)
    } else if (num1 + num3 > num2) {
        alert("A soma de " + num1 + " e " + num3 + " é maior que " + num2)
    } else if (num2 + num3 > num1) {
        alert("A soma de " + num2 + " e " + num3 + " é maior que " + num1)
    } else {
        alert("Nenhuma combinação de dois números é maior que o terceiro.")
    }
    // da pra melhorar PELAMOR
}
function exercicio50() {
  let numero = parseInt(prompt("Digite um número:"));

  if (numero > 0 && numero % 2 === 0) {
    alert(numero + " é POSITIVO e PAR.");
  } else {
    alert(numero + " NÃO atende às duas condições.");
  }
}

// console.log(`${numero} é POSITIVO e PAR.`);
 