function exemploMensagem() {
    alert("Hello World minha primeira mensagem Angeli")
}

function exemploString(){
    // Criando a variável
    let nome ="Elias";
    let sobrenome = "Otto com Dois T";

    // Alterar o valor da variável sobrenome
    sobrenome = "Otto";

    // Apresentando a variável
    alert(nome);
    alert(sobrenome);
}

function exemploStringConcatenacao(){
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    // Concatenação: Juntar um string(texto) com alguma utra coisa

    // "Sabão em pó" + " " => "Sabão em pó "
    // "Sabão em pó " + "Omo" => "Sabão em pó Omo"
    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro(){
    let produto = "PC Gamer da Xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;
    // "\n" serve para quebrar a linha
    alert(
        "Produto: " + produto +
        "\nQuantidade de PCs: " + quantidadePcs +
        "\nMemória RAM por PC: " + quantidadeMemoriaPorPc +" GB" +
        "\nTotal de GB dos PCs: " + totalGb + " GB");
}

//Tipos de variáveis
// String: Texto, pode armazenar número porém não serve para calcular 
// int = número inteiros = 2
// float = número com vírgula = 2.5
// boolean = verdadeiro ou falso = true ou false

function exemploFloat(){
    let endereco = "Rua XV de Novembro";; // String
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("M² do terreno: " + metroQuadrado);
}

function exemploBoolean(){
    // Quando entra na empresa
    let tenhoFeriasVencidas = false;

    // completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias vencidas? " + tenhoFeriasVencidas);
} 