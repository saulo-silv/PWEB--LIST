let tempo_fumante=parseInt(prompt("quantos anos de fumante:"));
let num_cigarros= parseInt(prompt("quantos cigarros fumados por dia:"));
let valor_carteira= parseInt(prompt("valor da carteira de cigarro:"));

let gasto_dia = num_cigarros*valor_carteira;
let gasto_total = (tempo_fumante*365)*gasto_dia;
document.write("valor gasto: "+ gasto_total+ " reais")