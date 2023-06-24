const  { celular } = require('./celular.js');





const descripcionCelular = `El celular ${celular.marca} ${celular.modelo} es un celular del año ${celular.ano},
                             color   ${celular.color} y su memoria es de ${celular.memoria}. 
                             Registro con fecha: ${celular.fecha} ` ;

console.log(descripcionCelular);

const celularActualizado = { ...celular, marca:'iphone', modelo:'11'};
console.log(celularActualizado);

//Escribe un ejemplo de función de callback,pero esta vez utilizando la sintaxis de función de flecha.
app.get('/', function(req,res){
    res.send('status code 200');
});

app.get('/', (req,res) =>{
    res.send('satus code 200');
});