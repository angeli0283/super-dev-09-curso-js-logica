/*
1. Criar uma função exercicio01
    Criar um vetor de perfumes
    Adicionar 4 perfumes
    Apresentar os 4 perfumes
    Alterar o nome do Segundo perfume 
    Adicionar 1 perfume
    Apagar o primeiro perfume
    Apresentar os perfumes






6. Criar uma função exercicio06
    Criar um vetor de produtos
    Criar um vetor de quantidades
    Criar um vetor de precos
    Criar um vetor de valoresTotais

    Solicitar para o usuário os dados de 3 produtos de supermercado
    Para cada produto solicitar:
        Nome do produto
        Quantidade comprada
        Preço unitário

    Adicionar os dados nos vetores
    Calcular o valor total de cada produto
    Armazenar o valor total no vetor valoresTotais

    Apresentar todos os dados dos produtos, incluindo quantidade, preço unitário e valor total
    Solicitar para o usuário o nome de mais 1 produto
    Solicitar para o usuário a quantidade desse produto
    Solicitar para o usuário o preço unitário desse produto
    Adicionar o novo produto nos vetores
    Calcular o valor total do novo produto
    Armazenar o valor total no vetor valoresTotais

    Solicitar para o usuário um novo preço para o segundo produto
    Alterar o preço do segundo produto
    Calcular novamente o valor total do segundo produto
    Alterar o valor total do segundo produto no vetor valoresTotais

    Apagar o primeiro produto de todos os vetores
    Apresentar todos os dados dos produtos
*/




function exercicio01(){
    let perfumes = [];

    perfumes.push("Malbeck");
    perfumes.push("liz");
    perfumes.push("Egeo");
    perfumes.push("Florata");

    alert("Perfumes: " +
        "\nPrimeiro perfume: " + perfumes[0] +
        "\nSegundo perfume: " + perfumes[1] + 
        "\nTerceiro perfume: " + perfumes[2] + 
        "\nQuarto perfume: " + perfumes[3] 
    );
    
    perfumes[1] = "Accento";
    perfumes.push("La Nuit");

    perfumes.splice(0,1);

    alert("Perfumes: " +
        "\nPrimeiro perfume: " + perfumes[0] +
        "\nSegundo perfume: " + perfumes[1] + 
        "\nTerceiro perfume: " + perfumes[2] + 
        "\nQuarto perfume: " + perfumes[3] 
    );
}

/* 2. Criar uma função exercicio02 (n pedir para usuário)
    Criar um vetor de materias (string)
    Criar um vetor de cargaHoraria (int)
    Criar um vetor de valoresHora (float)

    Adicionar 3 matérias preenchendo para cada matéria os dados de cada vetor
    Ex.: "Geografia", 100, R$ 20.20
    materias.push("Geografia");
    // ..... 

    Apresentar todas os dados dos vetores
    Alterar o nome da segunda Matéria
    Alterar a carga horária da primeira matéria
    Apresentar todas os dados dos vetores

*/

function exercicio02(){
    let materias = [];
    let cargaHoraria = [];
    let valoresHora = [];

    materias.push("Matemática");
    cargaHoraria.push(parseInt(150));
    valoresHora.push(parseFloat(50.5));

    materias.push("Português");
    cargaHoraria.push(parseInt(50));
    valoresHora.push(parseFloat(30.5));

    materias.push("Geografia");
    cargaHoraria.push(parseInt(60));
    valoresHora.push(parseFloat(60.2));

    alert("Aulas: " +
        "\nMatéria: " + materias[0] +
        "\nCarga Horária: " + cargaHoraria[0] + 
        "\nValor por Hora: " + valoresHora[0] + 
        "\n\nMatéria: " + materias[1] +
        "\nCarga Horária: " + cargaHoraria[1] + 
        "\nValor por Hora: " + valoresHora[1] + 
        "\n\nMatéria: " + materias[2] +
        "\nCarga Horária: " + cargaHoraria[2] + 
        "\nValor por Hora: " + valoresHora[2] 
    );

    materias[1] = "Filosofia";
    cargaHoraria[0] = 200;

    alert("Aulas: " +
        "\nMatéria: " + materias[0] +
        "\nCarga Horária: " + cargaHoraria[0] + 
        "\nValor por Hora: " + valoresHora[0] + 
        "\n\nMatéria: " + materias[1] +
        "\nCarga Horária: " + cargaHoraria[1] + 
        "\nValor por Hora: " + valoresHora[1] + 
        "\n\nMatéria: " + materias[2] +
        "\nCarga Horária: " + cargaHoraria[2] + 
        "\nValor por Hora: " + valoresHora[2] 
    );
}

/*3. Criar uma função exercicio03
    Criar um vetor de destinosTuristicos
    Solicitar para o usuário o nome de 4 destinos turísticos
    Adicionar os 4 destinos no vetor
    Apresentar todos os destinos turísticos
    Solicitar para o usuário um novo nome para o segundo destino
    Alterar o segundo destino turístico
    Solicitar para o usuário mais 1 destino turístico
    Adicionar o novo destino no vetor
    Apagar o primeiro destino turístico
    Apresentar todos os destinos turísticos
*/

function exercicio03(){
    let destinosTuristicos = [];

    destinosTuristicos.push(prompt("Escreva um destino turístico: "));
    destinosTuristicos.push(prompt("Escreva mais um destino turístico: "));
    destinosTuristicos.push(prompt("Escreva outro destino turístico: "));
    destinosTuristicos.push(prompt("Escreva o ultimo destino turístico: "));

    alert("Destinos turísticos: " +
        "\n" + destinosTuristicos[0] + 
        "\n" + destinosTuristicos[1] + 
        "\n" + destinosTuristicos[2] +
        "\n" + destinosTuristicos[3] 
    );

    destinosTuristicos[1] = prompt("Escreva um novo nome para o segundo ponto turistico: ");
    destinosTuristicos.push(prompt("Escreva mais um destino turistico: "));
    destinosTuristicos.splice(0,1);

    alert("Destinos turísticos: " +
        "\nPrimeiro ponto turístico" + destinosTuristicos[0] + 
        "\nSegundo ponto turístico" + destinosTuristicos[1] + 
        "\nTerceiro ponto turístico" + destinosTuristicos[2] +
        "\nQuarto ponto turístico" + destinosTuristicos[3] 
    );
}
/*
4. Criar uma função exercicio04
    Criar um vetor de restaurantes
    Criar um vetor de cidades
    Criar um vetor de valoresMedios

    Solicitar para o usuário os dados de 3 restaurantes
    Para cada restaurante solicitar:
        Nome do restaurante
        Cidade onde fica localizado
        Valor médio gasto por pessoa

    Adicionar os dados nos vetores
    Apresentar todos os dados dos restaurantes
    Solicitar para o usuário um novo nome para o primeiro restaurante
    Alterar o nome do primeiro restaurante
    Solicitar para o usuário um novo valor médio para o terceiro restaurante
    Alterar o valor médio do terceiro restaurante
    Apresentar todos os dados dos restaurantes
*/

function exercicio04(){
    let restaurantes = [];
    let cidades = [];
    let valoresMedios = [];

    restaurantes.push(prompt("Escreva o nome do  primeiro restaurante: "));
    cidades.push(prompt("Escreva o nome da cidade do restaurante: "));
    valoresMedios.push(parseInt(prompt("Escreva o valor médio gasto por pesssoa: ")));

    restaurantes.push(prompt("Escreva o nome do segundo restaurante: "));
    cidades.push(prompt("Escreva o nome da cidade do restaurante: "));
    valoresMedios.push(parseInt(prompt("Escreva o valor médio gasto por pesssoa: ")));

    restaurantes.push(prompt("Escreva o nome do terceiro restaurante: "));
    cidades.push(prompt("Escreva o nome da cidade do restaurante: "));
    valoresMedios.push(parseInt(prompt("Escreva o valor médio gasto por pesssoa: ")));

    alert("Restaurantes: " + 
        "\nPrimeiro restaurante: " + restaurantes[0] + 
        "\nCidade: " + cidades[0] +
        "\nMedia de valor: " + valoresMedios[0] +
        "\n\nSegundo restaurante: " + restaurantes[1] + 
        "\nCidade: " + cidades[1] +
        "\nMedia de valor: " + valoresMedios[1] +
        "\n\nTerceiro restaurante: " + restaurantes[2] + 
        "\nCidade: " + cidades[2] +
        "\nMedia de valor: " + valoresMedios[2] 
    );

    restaurantes[0] = prompt("Escreva um novo nome para o primeiro restaurante: ");
    valoresMedios[2] = prompt("Quala a nova média de valor do terceiro restaurante: ");

    alert("Restaurantes: " + 
        "\nPrimeiro restaurante: " + restaurantes[0] + 
        "\nCidade: " + cidades[0] +
        "\nMedia de valor: " + valoresMedios[0] +
        "\n\nSegundo restaurante: " + restaurantes[1] + 
        "\nCidade: " + cidades[1] +
        "\nMedia de valor: " + valoresMedios[1] +
        "\n\nTerceiro restaurante: " + restaurantes[2] + 
        "\nCidade: " + cidades[2] +
        "\nMedia de valor: " + valoresMedios[2] 
    );

}
/*
5. Criar uma função exercicio05
    Criar um vetor de filmes
    Criar um vetor de generos
    Criar um vetor de duracoes
    Criar um vetor de duracoesHoras

    Solicitar para o usuário os dados de 4 filmes
    Para cada filme solicitar:
        Nome do filme
        Gênero do filme
        Duração em minutos

    Adicionar os dados nos vetores
    Calcular a duração do filme em horas
    Armazenar a duração em horas no vetor duracoesHoras

    Apresentar todos os dados dos filmes, incluindo a duração em minutos e em horas
    Solicitar para o usuário um novo gênero para o segundo filme
    Alterar o gênero do segundo filme
    Solicitar para o usuário uma nova duração para o primeiro filme
    Alterar a duração do primeiro filme
    Calcular novamente a duração em horas do primeiro filme
    Alterar a duração em horas do primeiro filme no vetor duracoesHoras
    Apagar o último filme de todos os vetores
    Apresentar todos os dados dos filmes
*/
function exercicio05(){
    let filmes = [];
    let genero = [];
    let duracoes = [];
    let duracoesHoras = [];

    filmes.push(prompt("Escreva o nome do primeiro filme: "));
    genero.push(prompt("Escreva o genero do primeiro filme: "));
    duracoes.push(prompt(parseFloat("Escreva a duração do filme em minutos: ")));

    filmes.push(prompt("Escreva o nome do segundo filme: "));
    genero.push(prompt("Escreva o genero do filme: "));
    duracoes.push(prompt(parseFloat("escreva a duração em minutos do filme: ")));

    filmes.push(prompt(("Escreva o genero do terceiro filme: ")));
    genero.push(prompt("Escreva o genero do filme: "));
    duracoes.push(prompt(parseFloat("escreva a duração em minutos do filme: ")));

    filmes.push(prompt("Escreva o nome do quarto filme: "));
    genero.push(prompt("Escreva o genero do filme: "));
    duracoes.push(prompt(parseFloat("escreva a duração em minutos do filme: ")));

}