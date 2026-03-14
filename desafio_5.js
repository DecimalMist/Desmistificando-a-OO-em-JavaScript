const obj = {
    texto: "Salve Seres Humanos!",
    numero: 69,
    funcao: function() {
        return "Salve!";
    }
};

const jsonString = JSON.stringify(obj);

console.log(jsonString); 