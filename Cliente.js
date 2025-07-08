export function Cliente(nome, telefoneCelular, email, endereco) { 
   
    this.nome = nome; 
    this.telefoneCelular = telefoneCelular; 
    this.email = email; 
    this.endereco = endereco; 

    
    this.getNome = function() { return this.nome; }
    this.setNome = function(novo) { this.nome = novo; }
    this.getEmail = function() { return this.email; }
    this.setEmail = function(novo) { this.email = novo; }

    this.getNomeCaixaAlta = function() {
        return this.nome.toUpperCase();
    }
    this.getEmailCaixaBaixa = function() {
        return this.email.toLowerCase();
    }
    
    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `Informações do Cliente:
${this.nome}
Telefone:
DDD: ${this.telefoneCelular.ddd}
Número: ${this.telefoneCelular.numero}
Endereço:
Rua: ${this.endereco.rua}
Número: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}`;
        }
    });
}