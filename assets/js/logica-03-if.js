function exemploBasico(){
    let numero = 2;

    // se o número é igual 1 faço alguma coisa
    if (numero === 1){
        // Fazer alguma coisa
        alert("Um")
    } else { //else é o se não
        alert("Outro número");
    }
}

function exemploBasico02(){
    let idade = parseInt(prompt("Informe a idade"));
    
    if (idade < 18) { //se a idade é menor que 18 anos 
        alert("menor de idade");
    } else if (idade < 60) { // se a idade é menor que 60 anos 
        alert("Adulto");
    } else { // se não eu sei que é maior que 59
        alert("Idoso");
    }
}

function exemploBasico03(){
    let numero = parseInt(prompt("Informe um número"));

    // if (numero <= -1){
    if (numero < 0) {
        alert("Número negativo");
    } else if (numero > 0) {
        alert("Número positivo");
    } else {
        alert("Número neutro");
    }
}

function exemploProduto(){
    // Produtos: Maçã .....
    // Senão for nenhuma das opções encerra a execução
    let produto = prompt('Digite o nome do produto: ');
    let quantidade = parseInt(prompt('Digite a quantidade: '));

    let precoUntario = 0;

    if (produto === "Maçã"){
        precoUnitario = 0.80;
    } else if(produto === "Pera"){
        precoUntario = 1.50;
    } else if (produto == "Laranja"){
        precoUnitario = 2.50;
    } else if(produto === "Banana"){
        precoUntario = 2.0;
    } else{ // caso o produto não seja um produto válido
        // apresentar uma mensagem de feedback
        alert("Produto não cadastrado");
        //encerrar a execução da função
        return;
    }

    let total = quantidade * precoUntario;

    alert("Produto: " + produto +
        "\nQuantidade: " + quantidade +
        "\nPreço Unitário: R$" + precoUntario.toFixed(2) +
        "\nTotal: R$" + total.toFixed(2));
}

//escopo da variável é global
let regular = 0; // 1 => 2
let bom = 0;
let otimo = 0;

function avaliarRegular(){
    //Incrementando a variável regular em 1 
    regular = regular + 1;
}

function avaliarBom(){
    bom = bom + 1;
}

function avaliarOtimo(){
    otimo = otimo + 1;
}

function finalizarAvaliacao(){
    alert("Avaliações: \n   Regular: " + regular + "\n    Bom: " + bom + "\n   Ótimo: " + otimo);

    regular = 0;
    bom = 0;
    otimo = 0;
}