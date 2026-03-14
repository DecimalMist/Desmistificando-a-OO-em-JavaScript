//utilizando função construtora para criar objetos de produtos

function Produto(nome, preco,quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;

    this.exibirProduto = function() {
        console.log("   O produto é " + this.nome + ", custa " + this.preco + " e tem " + this.quantidade + " unidades em estoque.");
    }
}

const produto1 = new Produto("Teclado Mecânico", "499,99", 10);
const produto2 = new Produto("Monitor Gamer", "1999,99", 5);
produto1.exibirProduto();   
produto2.exibirProduto();   

console.log("\nSeparação entre os exemplos utilizando função construtora e função fábrica\n");

// utilizando funçao fabrica para criar objetos de produtos

function criarProduto(nome, preco, quantidade) {
    return {
        nome: nome,
        preco: preco, 
        quantidade: quantidade,
        exibirProduto: function() {
            console.log("   O produto é " + this.nome + ", custa " + this.preco + " e tem " + this.quantidade + " unidades em estoque.");
        }
    }   
}   

const produto3 = criarProduto("Headset Gamer", "299,99", 15);
const produto4 = criarProduto("Placa de Vídeo", "3999,99", 3);
produto3.exibirProduto();   
produto4.exibirProduto();   
