function exemplo01SolicitarDadosMedicos() {
    let nome = "";
    let crm = "";
    let desejaContinuar = true;
    let quantidadeMedicosCadastrados = 0;

    while (desejaContinuar != false) {
        let nome = prompt("Nome do medico: ");
        let crm = prompt("Digite o seu CRM")

        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome inváilido, deve conter no minino 2 caracteres e no maximo 20." +
                "\n digite seu nome: "
            ).trim();
        }
        while ((crm.length < 2) || (crm.length > 20)) {
            crm = prompt("CRM é invalido, deve conter no minino 2 caracteres e no maximo 20." +
                "\n digite seu nome: "
            ).trim();
        }
        
        quantidadeMedicosCadastrados = quantidadeMedicosCadastrados + 1;
        desejaContinuar = confirm("deseja continuar?")
    }
    alert(quantidadeMedicosCadastrados + " " + "quantidades de Médicos cadastrados.")
}

function solicitarDadosPaciente() {
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    while (desejaContinuar != false) {
        let nome = prompt("Digite seu nome: ");
        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome inválido. Digite seu nome: ");
        }

        let idade = parseInt(prompt("Digite sua idade: "));
        while ((idade) < 0 || (idade > 120)) {
            idade = parseInt(prompt("Idade inválida. Digite sua idade: "));
        }
        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;
        desejaContinuar = confirm("Deseja continuar? ")
    }

    alert(quantidadePacientesCadastrados + " " + "é a quantidade de pessoas cadastradas:")

}
function exercicio03SomarIdadesPacientes() {
    indice = 0;
    idade = 0;
    soma = 0;

    while (indice < 6) {
        let idade = parseInt(prompt("Digite sua idade: "));
        while ((idade < 0) || (idade > 120)) {
            idade = prompt("idade invalida. digite sua idade: ");
        }
        soma = soma + idade;
        indice = indice + 1;
    }

    alert("Soma de todas as idades: " + soma)
}
function exercicio04CalcularMediaIdades() {
    let indice = 0;
    let idade = 0;
    let somaIdades = 0;
    let mediaIdades = 0;

    while (indice < 5) {
        idade = parseInt(prompt("Digite sua idade: "));
        while ((idade < 0) || (idade > 120)) {
            idade = prompt("idade invalida. digite sua idade: ");
        }
        somaIdades = somaIdades + idade
        mediaIdades = somaIdades / 5;

        indice = indice + 1
    }

    alert("media das idades" + " " + mediaIdades);
}

function exercicio05ContarMaioresIdade() {
    let indice = 0;
    let nome = "";
    let idade = 0;
    let maioresIdade = 0;

    while (indice < 7) {
        nome = prompt("Digite seu nome: ").trim();
        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome invalido. Digite seu nome: ");
        }
        idade = parseInt(prompt("digite sua idade")).trim();
        if (idade >= 18) {
            maioresIdade = maioresIdade + 1;
        }
        indice = indice + 1;
    }
    alert(maioresIdade + "" + "são maiores de idade");
}
function exercicio06ValidarCRM() {
    let indice = 0;
    let crm = "";
    let nome = "";

    while (indice < 5) {
        nome = prompt("Digite o nome do Médico: ").trim();
        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("nome invalido");
        }
        let crm = prompt("Digite seu CRM").trim();
        while ((crm.length < 6) || ( crm.length > 15)) {
            crm = prompt("CRM invalido, digite seu CRM: ")
        }
    }
    alert("Cadastro dos médicos finalizado");

}
function exercicio07SolicitarPressaoArterial() { // FALAR COM O PROFESSOR
    let indice = 0; 
    let pressaoArtirial = 0;
    let contadorPacientesMaior = 0;
    
    while (indice < 6) {
        pressaoArtirial = prompt("Qual é sua pressao arterial: ").trim();  
        
        let partes = pressaoArtirial.split("/")
        if ((partes[0] > 14) || (partes[1]) > 9) {
            contadorPacientesMaior = contadorPacientesMaior + 1;
            
        }
    indice = indice + 1
    }
    console.log(contadorPacientesMaior);
}
function exercicio08MenuContinuarCadastro() {
    let nome = "";
    let resposta = true;
    let quantidadePacientesCadastrados = 0;

    while (resposta != false) {
        nome = prompt("Digite o nome do paciente: ").trim();
        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("nome invalido");
        }

        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1

        resposta = confirm("Deseja continuar");
    }
    alert("Quantidade pacientes cadastrados " + quantidadePacientesCadastrados)
}
function exercicio09SomarFrequenciaCardiaca() {
    let frequenciaCardiaca = parseInt(prompt("digite sua frequencia cardiaca"));
    let soma = 0;

    while (frequenciaCardiaca !== 0 ) {
        soma = soma + frequenciaCardiaca;
        frequenciaCardiaca = prompt("Digite sua frequencia cardiaca");
    }
}
function exercicio10MaiorTemperatura() {
    let indice = 0;
    let maiorTemperatura = 0;
    let temperatura = 0;

    while (indice < 5) {
        let temperatura = parseInt(prompt("Digite sua temperatura"));
        
        if (temperatura > maiorTemperatura) {
            maiorTemperatura = temperatura;
        }
    indice = indice + 1;
    }
    alert("Maior temperatura é: " + maiorTemperatura);
}
function exercicio11MenorTemperatura() {
    let indice = 0;
    let menorTemperatura = Infinity;
    let temperatura = 0;

    while (indice < 5) {
        let temperatura = parseInt(prompt("Digite sua temperatura"));

        if (temperatura < menorTemperatura) {
            menorTemperatura = temperatura;
        }
    indice = indice + 1; 
    }
    alert("Menor temperatura é: " + menorTemperatura);
}
function exercicio12ContarSintomasFebre() {
    let indice = 0;
    let perguntarFebre = ""
    let contadorFebre = 0;

    while (indice < 5) {
        let perguntarFebre = prompt("Voce está com febre?").trim().toLowerCase();

        if (perguntarFebre === "sim") {
            contadorFebre = contadorFebre + 1;
        }
        indice = indice + 1
    }
    alert("Quantidade de pessoas com febre: " + contadorFebre)
}
function exercicio13SepararPacientesPorIdade() {
    let indice = 0;
    let contadorCrianca = 0;
    let contadorAdolecente = 0;
    let contadorAdulto = 0;

    while (indice < 8) {
        let nome = prompt("Qual seu nome: ").trim()
        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome invalido> digite seu nome: ")
        }

        let idade = parseInt(prompt("Qual sua idade: "));
        while ((idade < 0) || (idade > 120)) {
            idade = prompt("Idade invalida. digite sua idade: ")
        }

        if (idade < 12) {
            contadorCrianca = contadorCrianca + 1;
        } else if ((idade >= 12) && (idade <= 17)) {
            contadorAdolecente = contadorAdolecente + 1;
        } else {
            contadorAdulto = contadorAdulto + 1;
        }
    indice = indice + 1
    }
    alert(
        "Crianças (0-11): " + contadorCrianca + "\n" +
        "Adolescentes (12-17): " + contadorAdolecente + "\n" +
        "Adultos (18+): " + contadorAdulto
    );
} //  , 
function exercicio14ValidarOpcaoMenu() {
    let opcao = 0;

    while (opcao !== 3) {
        opcao = parseInt(prompt(
            "=== MENU ===\n" +
            "1 - Cadastrar paciente\n" +
            "2 - Cadastrar médico\n" +
            "3 - Sair\n\n" +
            "Digite sua opção: "
        ));

        if (opcao === 1) {
            solicitarDadosPaciente()
        } else if (opcao === 2) {
            exemplo01SolicitarDadosMedicos()
        } else if (opcao === 3) {
            alert("Sistema encerrado.");
        } else {
            alert("Opção inválida! Digite 1, 2 ou 3.");
        }
    }
}
function exercicio15RelatorioPacientes() {
    let nome = "";
    let idade = 0;
    let quantidadePacientesCadastrados = 0;
    let contadorMaioresDeSessenta = 0;
    let maiorTemperatura = 0;
    let temperatura = 0;
    let menorTemperatura = Infinity;
    let somaIdades = 0;

        while (quantidadePacientesCadastrados < 3) {
            let nome = prompt("Nome do Paciente: ") ;
            while ((nome.length < 2) || (nome.length > 20)) { // NOME
                let nome = prompt("Nome inváilido, deve conter no minino 2 caracteres e no maximo 20." +
                    "\n digite seu nome: "
                ).trim();
            }

            let idade = parseInt(prompt("Digite a idade: ")) // IDADE
            while ((idade < 0) || (idade > 120)) {
                idade = parseInt(prompt("Idade invalida.Digite sua idade: "))
                }

            if (idade >= 60) { // IDADE CONTADOR
                contadorMaioresDeSessenta = contadorMaioresDeSessenta + 1;
            }
            somaIdades = somaIdades + idade;
        
            let temperatura = parseInt(prompt("Digite a temperatura")); 
                
            while ((temperatura < 30) || (temperatura > 45)) {
                temperatura = prompt("Temperatura invalida. Digite a temperatura");
            } 
            if (temperatura > maiorTemperatura) { // VERIFICADOR DE TEMPERATURA
                maiorTemperatura = temperatura;
            } else if (temperatura < menorTemperatura) {
                menorTemperatura = temperatura;
            } else if ((temperatura < 30) || (temperatura > 45)) {
                temperatura = prompt("Temperatura invalida. Digite a temperatura");
            } 

            quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;
            
        }

        let mediaIdades = somaIdades / quantidadePacientesCadastrados;

        alert(
            "===== RELATÓRIO DE MÉDICOS =====\n" +
            "Pacientes cadastrados: " + quantidadePacientesCadastrados + "\n" +
            "Média de idades: " + mediaIdades + " anos\n" +
            "Maiores de 60 anos: " + contadorMaioresDeSessenta + "\n" +
            "Maior temperatura: " + maiorTemperatura + "°C\n" +
            "Menor temperatura: " + menorTemperatura + "°C\n" +
            "================================"
        );
    }
function exercicio16SenhaAcessoSistema() { // FALAR COM PROFESSOR SOBRE LET DIGITAR SENHA: 
    let senhaSistema = "hospital123";
    let digitarSenha = prompt("Digite sua senha: ");

    while (digitarSenha != senhaSistema) {
        let digitarSenha = prompt("senha invalida. Digite sua senha: ")
    }
    alert("Acesso liberado ao sistema hospitalar.");
}
function exercicio17CadastroComValidacaoCompleta() {
    let indice = 0;
    let contadorIncorreto = 0;
    let contadorNomeIncorreto = 0;
    let contadorCrmIncorreto = 0;
    let calculoIncorretos = 0;
    let contadorIncorretoCerto = 0;

    while (indice < 5) {
        let nomeMedico = prompt("digite o nome do médico: ");
        let crmMedico = prompt("Digite seu CRM: ");

        while (nomeMedico.length < 2) {
            alert("Nome: " + nomeMedico)
            nomeMedico = prompt("Nome invalido. digite  o nome do médico: ").trim();
            contadorNomeIncorreto = contadorNomeIncorreto + 1;
        } 
        if (crmMedico.length < 3) {
            alert("CRM: " + crmMedico)
            crmMedico = prompt("CRM invalido. Digite o CRM correto: ").trim();
            contadorCrmIncorreto = contadorCrmIncorreto + 1;
        }
        
        if ((nomeMedico.length > 2 === true) && (crmMedico.length > 3 === true)) {
            calculoIncorretos = contadorCrmIncorreto + contadorNomeIncorreto ;
            contadorIncorreto = calculoIncorretos;
        } 
        if (contadorIncorreto % 2 === 0) {
            contadorIncorretoCerto = contadorIncorreto / 2;
        }
    indice = indice + 1;
    }
    alert("Cadastros incorretos: " + contadorIncorretoCerto)
}
function exercicio18RelatorioFinalInternacoes() {
    let indice = 0;
    let nomeMaiorInternacao = 0;
    let quantidadeDiasInternado = 0;

    while (indice < 3) {
        let nome = prompt("Digite o nome: ");
        while ((nome.length < 2) || (nome.length > 20)) { 
                let nome = prompt("Nome inváilido, deve conter no minino 2 caracteres e no maximo 20." +
                    "\n digite seu nome: "
                ).trim();   
        }
        let quantidadeDiasInternado = parseInt(prompt("Quantos dias internado; "));
    
    }
}





