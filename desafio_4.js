const Veiculo ={
    acelerar: function(){
        console.log("Acelerando...");
    }
}, 
Carro = Object.create(Veiculo);
Carro.marca = "Ferrari";
Carro.acelerar(); 

console.log("Marca:", Carro.marca);
