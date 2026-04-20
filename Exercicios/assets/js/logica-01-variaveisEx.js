function exercicio01(){
    let personagem = "Cruella";
    alert("Nome do personagem: " + personagem);


    let anoNascimento = 1956;
    alert("Ano de nascimento: " + anoNascimento);


    let anoAtual = 2026
    let idade = anoAtual - anoNascimento;
    alert("Idade: " + idade);


    let altura = 1.68;
    alert("Altura: " + altura);


    let peso = 52;
    alert("Peso: " + peso + "kg");


    let IMC = peso / (altura * altura);
    alert("IMC: " + IMC);


    let categoria = "Vilão";
    alert("Categoria: " + categoria);


    let jobs = 15;
    let valorJob = 100.00;
    let salario = jobs * valorJob;
    alert("Quantidade de Jobs: " + jobs);
    alert("Valor por job: " + "R$ " + valorJob);
    alert("Salário: " + "R$ " + salario);
}


function exercicio02(){
    let nome = "Angeli";
    alert("Nome do aluno: " + nome);


    let nota1 = 8;
    let nota2 = 10;
    let nota3 = 9;
    let nota4 = 6.5;
    alert("Primeira nota: " + nota1);
    alert("Segunda nota: " + nota2);
    alert("Terceira nota: " + nota3);
    alert("Quarta nota: " + nota4);
   
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    alert("A media é: " + media);
}


function exercicio03(){
    let nome = "celular";
    alert("Nome do produto: " + nome);


    let preco = 1500.00
    alert("Preço do prduto: " + "R$ " + preco);


    let quantidade = 50
    alert("Quantidade de produtos: " + quantidade);


    let valorTotal = preco * quantidade;
    alert("Valor total: " + valorTotal);


    let desconto = 10;
    let vDesconto = valorTotal * (desconto / 100);
    let valorDesconto = valorTotal - vDesconto;
    alert("Valor com desconto: " + valorDesconto);
}


function exercicio04(){
    let nome = "McLaren Senna";
    alert("Nome do carro: " + nome);


    let ano = 2018;
    alert("Ano de lançamento do Carro: " + ano);


    let velocidade = 335;
    alert("Velocidade máxima: " + velocidade + "km/h");


    let tempo = 2;
    let distancia = velocidade * tempo;
    alert("Distancia: " + distancia + "km");
}


function exercicio05() {
    let cidade = "Blumenau";
    alert("Nome da cidade: " + cidade);


    let população =  361261 ;
    alert("População: " + população);


    let area = 518.619;
    alert("área da cidade: " + area + "km²");


    let densidade = população / area;
    alert("Densidade demográfica da cidade: " + densidade);
}


function exercicio06(){
    let filme = "Harry Potter";
    alert(filme);


    let duracao = "2 horas e 32 minutos";
    alert("Duração de filme: " + duracao);


    let classificacao = "Livre";
    alert("Classificação do filme: " + classificacao);


    let quantidade = 10;
    alert("Quantidade de vezes assistidas: " + quantidade);
}


function exercicio07(){
    let nome = "Francisco";
    alert("Nome do Funcionário: " + nome);


    let salario = 2000.00;
    alert("Salário base: " + "R$" + salario);


    let hora = 5;
    let valorHoraE = 1000.00;
    let valorTotalE = valorHoraE * hora;
    alert("Valor pelas horas extras: " + "R$" + valorTotalE);


    let valorTotal = salario + valorTotalE ;
    alert("Salário final: " + "R$" +  valorTotal);


}

