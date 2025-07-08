import { TelefoneCelular } from './telefoneCelular.js';
import { Endereco } from './Endereco.js';
import { Cliente } from './Cliente.js';
import { ordenarClientesPorNome } from './ordenarClientesPorNome.js';

console.log("### TESTE 1: CRIAÇÃO DE CLIENTE E SAÍDA FORMATADA ###\n");

let telefone = new TelefoneCelular('11', '999999999');
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

console.log(cliente.descricao);


console.log("\n\n### TESTE 2: ORDENAÇÃO DE CLIENTES ###\n");

let clienteAna = new Cliente('Ana Silva', new TelefoneCelular('21', '888888888'), 'ana@app.com', new Endereco('RJ', 'Rio de Janeiro', 'Av. Copacabana', '123'));
let clienteZelia = new Cliente('Zélia Duncan', new TelefoneCelular('31', '777777777'), 'zelia@app.com', new Endereco('MG', 'Belo Horizonte', 'Rua das Flores', '456'));
let clienteBruno = new Cliente('Bruno Costa', new TelefoneCelular('51', '666666666'), 'bruno@app.com', new Endereco('RS', 'Porto Alegre', 'Av. Ipiranga', '789'));

const todosClientes = [cliente, clienteAna, clienteZelia, clienteBruno];

console.log("--- Array Original ---");
todosClientes.forEach(c => console.log(c.nome));

const clientesOrdenados = ordenarClientesPorNome(todosClientes);

console.log("\n--- Array Ordenado ---");
clientesOrdenados.forEach(c => console.log(c.nome));