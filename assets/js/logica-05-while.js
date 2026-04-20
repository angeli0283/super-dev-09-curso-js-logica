function exemplo01() {
    debugger
    // mostrar uma mensagem 4 vezes
    let indice = 0; // Indece é um contador

    while (indice < 4) {
        console.log("Oie");
        indice = indice + 1
    }
}

function exemploSolicitarNumeros() {
    // MODO PRÉ-HISTORICO, sem while
    // let numero1 = parseInt(prompt("Digite o número: "))
    // let numero2 = parseInt(prompt("Digite o número: "))
    // let numero3 = parseInt(prompt("Digite o número: "))

    debugger
    //solicitar 3 números
    let indice = 0;

    // while: utilizamos para repetir código
    //while(indice < 3) {

    while (indice = 0) {
        let numero = parseInt(prompt("Digite o número"));
        indice = indice + 1;
    }

    alert("Muito obrigado");
}

function solicitarDadosPaciente() {
    // solicitar os dados de 3 pacientes, nome e idade
    let indice = 0;

    while (indice < 3) {
        let nome = prompt("Digite o seu nome").trim();
        let idade = parseInt(prompt("Digite sua idade: "));

        let anoNascimento = 2026 - idade;

        alert(nome + " nasceu em " + anoNascimento);

        // incrementar
        indice = indice + 1;
    }
}

function contagemRegressiva() {
    let indice = 10;

    while (indice >= 0) {
        alert(indice);
        indice = indice - 1;
    }
}
function calcularPrecoJogos() {
    let indice = 0;

    let total = 0;

    // solicitar preço de 3 jogos
    while (indice <= 2) {
        let nome = prompt("Nome do jogo");
        let preco = parseFloat(prompt("Digite o preço"));

        // Somando: total recebe ele mesmo, ou seja, o valor inicia da variável total
        // mais o preço do jogo
        // tota = 0 + preco; 
        total = total + preco;

        indice = indice + 1;
    }
    alert("Total dos jogos: " + total)
}

function descobrirQuantidade() {
    // solicitar nome, idade de 3 pessoas e apresentar a quantidade de menores de idade
    let indice = 0
    let quantidadeMenoresIdade = 0;

    while (indice < 3) {
        let nome = prompt("digite o nome: ");
        let idade = parseInt(prompt("Digite a idade"));

        if (idade <= 17) {
            // Incrementar a variavel quantidadeMenoresIdade em 1
            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }

        indice = indice + 1;
    }

    alert("Quantidade de pessoas menores de 18 anos: " + quantidadeMenoresIdade);
}

function descobrirMaiorAltura() {
    // descobrir maior altura
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 4) {
        let altura = parseFloat(prompt("digite a altura").replace(",", ".")); //2

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1
    }
    alert("maior Altura" + maiorAltura);
}

function descobrirMenorVitorias() {
    let indice = 0;
    let menorQuantidadeVitorias = 9999999;

    while (indice < 3) {
        let personagem = prompt("digite o nick")
        let quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias"));

        if (quantidadeVitorias < menorQuantidadeVitorias) {
            menorQuantidadeVitorias = quantidadeVitorias;
        }
        indice = indice + 1;
    }
    alert("Menor quantidade de vitórias: " + menorQuantidadeVitorias);
}

function descobrirColaboradorComBonificacaoSalario() {
    let indice = 0;
    let maiorBonificacao = 0;
    let colaborarMaiorBonificacao = "";

    while (indice < 3) {
        let colaborador = prompt("Digite o nome do colab");
        let bonificacao = parseFloat(prompt("digite o valorar da bonificação "));

        if (bonificacao > maiorBonificacao) {
            maiorBonificacao = bonificacao;
        }

        colaborarMaiorBonificacao = colaborador;
        indice = indice + 1
    }

    alert(colaborarMaiorBonificacao + " tem a maior bonificação " + maiorBonificacao);
}
function descobrirMenorNome() {
    let indice = 0;
    let menorNome = "wertyuikjhgvcdswertyuikjbvcdrtyuikmnbvfrtyumnbvcxsdfghjkjhgfdsdfghjkl"

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada para cadastrar"));

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome").trim();

        if (nome.length < menorNome.length) {
            menorNome = nome;
        }

        indice = indice + 1;
    }

    alert("Menor nome: " + menorNome + "\nQuantidade de caracteres: " + menorNome.length);
}

function repetirEnquantoUsuarioDesejaContinuar() {
    let desejaContinuar = "";

    alert("Bem vindo ao sistema de cadastro de fila de atendimento do sos")

    while (desejaContinuar != "não") {
        let nomePaciente = prompt("digite o nome do paciente");

        desejaContinuar = prompt("Deseja continuar? [sim/não]").toLocaleLowerCase();
    }
}

function repetirEnquantoUsuarioDesejaContinuarComComfirm() {
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    alert("Bem vindo ao sistema de cadastro de fila de atendimento do sos");

    while (desejaContinuar != false) {
        let nomePaciente = prompt("digite o nome do paciente");

        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;

        desejaContinuar = confirm("Deseja continuar?")
    }
    alert("Quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados)
}
function exemploValidacao() {
    let indice = 0;

    while(indice < 3) {
        let nome = prompt("Digite o nome ").trim();
        // o nome é valido quando 2 caracteres e no maximo 20
        while ((nome.length < 2 ) || (nome.length > 20)) {
            nome = prompt("Nome inváilido, deve conter no minino 2 caracteres e no maximo 20 caracteres.\nDigite o nome").trim();
        }

        let idade = parseInt(prompt("digite a idade"));
        // idade minima de 16 para ir no show e maximo 100
        while ((idade < 16 ) || ( idade > 100)){
            idade = parseInt(prompt(
                "idade invalida, deve ser entre 16 e 100 anos"
            ))
        }
        indice = indice + 1;
    }
}