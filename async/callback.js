function hola(nombre, micallback){
    setTimeout(function(){ 
        console.log("Hola, " + nombre);
        micallback();
    }, 1000);
}
function adios(nombre, otrocallback){
    setTimeout(function(){ 
        console.log("Adios, " + nombre);
        otrocallback();
    }, 1000);
}
console.log("Iniciando proceso ...");
hola('Juan', function(){
    adios('Juan', function(){
        console.log("Terminar proceso proceso ...");
    },);
});