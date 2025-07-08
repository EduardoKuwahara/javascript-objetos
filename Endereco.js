export function Endereco(estado, cidade, rua, numero) {

    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

   
    this.getEstado = function() { return this.estado; }
    this.setEstado = function(novo) { this.estado = novo; }
    this.getCidade = function() { return this.cidade; }
    this.setCidade = function(novo) { this.cidade = novo; }
    this.getRua = function() { return this.rua; }
    this.setRua = function(novo) { this.rua = novo; }
    this.getNumero = function() { return this.numero; }
    this.setNumero = function(novo) { this.numero = novo; }

    
    this.getEstadoCaixaAlta = function() {
        return this.estado.toUpperCase();
    }
    this.getCidadeCaixaAlta = function() {
        return this.cidade.toUpperCase();
    }
}