export function TelefoneCelular(ddd, numero) {

    this.ddd = ddd;
    this.numero = numero;


    this.getDdd = function() {
        return this.ddd;
    }
    this.setDdd = function(novoDdd) {
        this.ddd = novoDdd;
    }
    this.getNumero = function() {
        return this.numero;
    }
    this.setNumero = function(novoNumero) {
        this.numero = novoNumero;
    }


    this.getNumeroCaixaAlta = function() {
        return String(this.numero).toUpperCase();
    }
    this.getNumeroCaixaBaixa = function() {
        return String(this.numero).toLowerCase();
    }
}