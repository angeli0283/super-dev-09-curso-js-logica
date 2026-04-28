function exemplo01(){
    let carros = [];
    carros.push("BMW m3"); // indice 0, posição Primeira posição

    carros.push("Byd Seal"); // indice 1, posição Segunda posição

    carros.push("Mobi");// indice 2, posição Terceira

    carros.push("Chevet"); // indice 3, posição Quarta posição

    carros[3] = "Chevette";

    carros.splice(2,1); // Apagar o Mobi

    alert("Quantidade de elementos: " + carros.length +
        "\nPrimeiro: " + carros[0] +
        "n\Segundo: " + carros[1] + 
        "n\Terceiro: " + carros[2] // Chevette
    );
}

function exemplo02(){
    let alunos = [];
    let frequencias = [];
    let status = [];

    alunos.push(prompt("Digite o nome do aluno: "));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    alunos.push(prompt("Digite o nome do aluno: "));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    if (frequencias[0] >= 70) {
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    if (frequencias[1] >= 70) {
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    alert("Alunos: " +
        "\nNome: " + alunos[0] +
        "\nFrequencia: " + frequencias[0] +
        "\nStatus: " + status[0] + 
        "\n\nNome: " + alunos[1] +
        "\nFrequencia: " + frequencias[1] +
        "\nStatus: " + status[1]
    );
}
