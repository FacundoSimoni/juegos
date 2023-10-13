let entrada = prompt ("Juegos de PSP/Xbox/Compu");

while (entrada != "ESC") {
    console.log ("Que juego desea buscar?" + entrada); 

    entrada = prompt ("que juego busca?")

    entrada = prompt ("Este juego tiene un valor de $1000, quiere adquirilo?")

    entrada = prompt ("Desea algo mas?")

    entrada = prompt ("Muchas gracias!")

}

let unNumero = 232

if (unNumero == 232){
    console.log("vas a ver este mensaje");
}

if (unNumero == 323){
    console.log ("no vas a ver este mensaje");
}

//Functions
function solicitarDatos() {
    let datosIngresados = prompt("Ingrear dato");
    alert("El dato ingresado es" + datoIngresado);

    solicitarNombre();
    solicitarApellido();
    solicitarGmail();
    solicitarContraseña(); 

}


// OBJETOS

let accion = {
    nombre: 'Call of duty',
    lanzamiento: 'nomviembre de 2015',
    valor: '$2000',
}

let deportes = {
    nombre: 'NBA 2023',
    lanzamiento: 'octubre de 2023',
    valor: '$4000'
}

//OBJETOS VALORES

console.log(accion['nombre'])
console.log(accion['lanzamiento'])
console.log(accion['valor'])

console.log(deportes['nombre'])
console.log(deportes['lanzamiento'])
console.log(deportes['valor'])

let prompt = ('¿Que busca?');
console.log(accion[prop]);
console.log(deportes[prop])

//ARRAYS

let juegos = ['FIFA23', 'NBA2K23', 'Call Of Duty', 'God of War', 'Black'];
console.log(juegos);

//ACCESO A VALORES

console.log(juegos[0])
console.log(juegos[2])
console.log(juegos[4])

//Recorrido

console.log('Recorrido: ');

for(let index = 0; index < 5; index++){
    console.log(juegos[index]);
} 

//Metodos

const videoJuegos = ["God Of War", "Black", "EA24"]

videoJuegos.unshift('NBA2K24')

console.log(videoJuegos)







