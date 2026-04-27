function exemploBasico() {
    /* 
    // declaração da variável 
    let indice = 0;
    // Condição
    while(indice < 4) {
        alert(indice)
        // Incrementar
        indice = indice + 1
    }*/

        // for (declaração da variavel; condição; incrementar) {
        for (let indice = 0; indice < 4; indice = indice + 1){
            alert(indice)
        }

    // todo while pode virar um for? ✅❌ Depende, é possível converter
    // quando tem repetições definidas (repetirá 10 vezes por)
    // todo for pode virar um while?
    // for => 0..3 => WHILE ✅
    }
function exemploForJogos(){
    let total = 0;

    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o nome do jogo");

        let preco = parseFloat(prompt("Digite o preço"));

        // variável recebe ela mesma mais o que deseja somar
        total = total + preco;
    }

    alert("Total: " + total);
}
function exemploForProdutos(){

    for(let indice = 0; indice < 6; indice = indice + 1){
        let produto = prompt("Digite o nome do produto");
        let categoria = prompt("Digite a categoria do produto");

        // validar que o usuario digitou uma categoria válida
        while ((categoria.toLowerCase() !== "carnes") && 
                (categoria.toLowerCase() !== "padaria") &&
                (categoria.toLowerCase() !== "utensilios")) {
                categoria = prompt(
                        "categoria inválida.\nDigite a categoria do produto [carnes, Padaria , Utensilios ]: ").trim();
                }
        let preco = parseFloat(prompt("Digite o preço do produto"));

        if (categoria.toLowerCase() === "padaria") {
            quantidadePadaria = quantidadePadaria + 1;
        }
        if (categoria.toLowerCase() === "utensilios") {
            quantidadeUtesilios = quantidadePadaria + 1;
        }
        if (categoria.toLowerCase() === "carnes") {
            quantidadeCarnes = quantidadePadaria + 1;
        }
        

    }
    alert("Quantidade Padaria: " + quantidadePadaria);
    alert("Quantidade utensilios: " + quantidadeUtesilios);
    alert("Quantidade Carnes: " + quantidadeCarnes);

}
function exemploContagemRegressiva() {
    // for (variável; condicao; incremento/decremento)
    for(let indice = 10; indice > 0; indice - 1) {
        alert(indice);
    }
}
function exemploDescobrirQuantidadePar(){
    let quantidadePares = 0;

    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a validar"));

    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        let numero = parseInt(prompt("Digite o número"));

        if (numero % 2 == 0){
            quantidadePares = quantidadeNumeros + 1;
        }

        // descobrir ímpar (numero % 2 != 0)
    }

    alert("Quantidade de números pares");
}