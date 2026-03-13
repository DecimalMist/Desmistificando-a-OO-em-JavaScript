const Mouse = {
   nome : "G-pro Wireless",
   marca : "Logitech",
   tipo : "Mouse Gamer", 
}
// adicionando uma propriedade ao objeto Mouse 
Mouse.preco = "699,99";

// alterando uma propriedade do objeto Mouse
 Mouse.tipo = "Mouse sem fio";

 //apagando uma propriedade do objeto Mouse
 //delete Mouse.tipo;

 // verificando se a propriedade tipo existe no objeto Mouse
 if (Mouse.tipo) {
    console.log("   O mouse é da marca " + Mouse.marca + " e o modelo é " + Mouse.nome + ". Ele é um " + Mouse.tipo + " e ele custa " + Mouse.preco + ".");
 } else {
    console.log("   O mouse é da marca " + Mouse.marca + " e o modelo é " + Mouse.nome + ". Ele custa " + Mouse.preco + ".");
 }

 //desatribuição do objeto Mouse
 // Mouse = {marca: "Logitech"}; 