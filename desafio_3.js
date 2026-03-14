const ContaBancaria = {
    _saldo: 100,

    get saldo() {
        return this._saldo;
    },

    set saldo(valor) {
        if (valor < 0) {
            console.error("Saldo não pode ser negativo");
        } else {
            this._saldo = valor;
        }
    }
};

// Object.seal()
Object.seal(ContaBancaria);
ContaBancaria.saldo = 200; // permitido
ContaBancaria.titular = "Pedro"; // não adiciona

console.log("Com seal:", ContaBancaria);

// Object.freeze()
Object.freeze(ContaBancaria);
ContaBancaria.saldo = 300; // não altera

console.log("Com freeze:", ContaBancaria);