const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",

    sexo: "F",
    salario: 3350.25,
  },
];
// 1. Imprima no console a quantidade de pessoas Total.
console.log("Total de pessoas: " + data.length);
// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
let feminino = data.filter((fem) => fem.sexo == "F");
console.log("Total de pessoas do sexo feminino: " + feminino.length);
// 3. Imprima no console a soma do salário de todas as pessoas.
let salario = data.reduce((conta, pessoa) => conta + pessoa.salario, 0);
console.log("Total dos salarios somados: R$" + salario.toFixed(2));
// 4. Imprima no console a média do salário de todas as pessoas.
console.log("A media dos salarios é: R$" + (salario / data.length).toFixed(2));
// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
let masc = data.filter((mas) => mas.sexo == "M");
let salarioMasc = masc.reduce((conta, pessoa) => conta + pessoa.salario, 0);
console.log("A soma dos salarios Masculinos é: R$" + salarioMasc);
// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
console.log(
  "A media dos salarios é: R$" + (salarioMasc / data.length).toFixed(2)
);
// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
let salarioMaior = data.some((pessoa) => pessoa.salario > 7000);
console.log("Existe uma pessoa com salario maior? " + salarioMaior);
// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
console.log(
  "A posição da Eva Trindade é: " +
    data.findIndex((x) => x.nome == "Eva Trindade")
);
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
let silvas = data.filter((x) => x.nome.includes("Silva"));
console.log(silvas);
// 10. Imprima os nomes utilizando o MAP
let nomes = data.map((x) => x.nome);
console.log(nomes);
