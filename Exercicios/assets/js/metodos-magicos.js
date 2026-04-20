function contarLetrasNome() {
    let nome = prompt("Digite seu nome:")
    let letrasQtd = nome.length;

    console.log(letrasQtd);
}
function converterParaMaiusculas() {
    let frase = prompt("Digite um frase");
    let fraseM = frase.toUpperCase();

    console.log(fraseM);
}
function converterParaMinusculas() {
    let frase = prompt("Digite um frase");
    let fraseMinu = frase.toLowerCase();

    console.log(fraseMinu);
    
}
function mostrarPrimeiraLetra() {
    let digitarPalavra = prompt("Digite uma palavra: ");

    digitarPalavra = digitarPalavra.trim();

    let primeiraLetra = digitarPalavra[0];

    console.log(primeiraLetra);
}
function mostrarUltimaLetra() {
    let digitarPalavra = prompt("Digite uma palavra: ");

    digitarPalavra = digitarPalavra.trim();

    let ultimaLetra = digitarPalavra[5];

    console.log(ultimaLetra);
}
function verificarPalavraNaFrase() {
    let frase = prompt("Digite um frase");
    let palavra = prompt("digite uma palavra");

    if (frase.includes(palavra) === true) {
        console.log("Essa palavra ta na frase");
    } else {
        console.log("não ta nao chocolate branco");
    }
}
function substituirCorNaFrase() {
    let frase = prompt("Digite um frase");
    let substituirPalavra = prompt("Digite a palavra que quer substituir: ")
    let palavraNova = prompt("Digite a palavra que você quer colocar no lugar: ")

    if (frase.includes(substituirPalavra) === true) {
        let fraseFinal = frase.replace(substituirPalavra , palavraNova)
        console.log(fraseFinal);
    } else {
        console.log("Não existe essa palavra");
    }
}

function trocarEstacao() {
    let frase = "Eu gosto de verão";

    let fraseFinal = frase.replace("verão" , "inverno" );

    console.log(fraseFinal);
}

function mostrarQuatroPrimeirosCaracteres() {
    let palavra = prompt("Digite uma palavra");

    let quatroCarac = palavra.trim().slice(0, 4);


    console.log(quatroCarac);
}
function separarNomeCompleto() {
    let nomeCompleto = prompt("Digite seu nome completo: ");
    
    let partes = nomeCompleto.trim().split(" ");

    let nome = partes[0];
    let sobreNome = partes[1];
    let sobreNome2 = partes[2];

    console.log(nome + "\n" + sobreNome + " \n" + sobreNome2);
}
function removerEspacosExtras() {
    let texto = "   JavaScript   "

    texto = texto.trim();

    console.log(texto);
}
function repetirPalavraTresVezes() {
    let palavra = prompt("Digite uma palavra:");
    let resultado = palavra.repeat(3);
    
    console.log(resultado);
}
function encontrarPosicaoPalavra() {
    let frase = "Eu estudo JavaScript todos os dias"

    let encontrarPalavra = frase.split(" ")

    let javaScript = encontrarPalavra[2]

    console.log(javaScript);
    
}
function verificarInicioEFim() {
    let palavra = prompt("Digite uma palavra");

    if (palavra.startsWith("a")){
         alert("A palavra começa com a letra A");
    } else if (palavra.endsWith("o") === true) {
        alert("A palavra termina com a letra O")
    }
}
function trocarDominioEmail() {
    let email = prompt("Digite seu e-mail");
    let final = email.replace("@gmail.com" , "@hotmail.com")
    
    
    console.log("Seu email alterado: " +final);
}



    