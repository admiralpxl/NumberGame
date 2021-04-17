const btn = document.getElementById("empezar");
const a = document.getElementsByName("opcion1");
const PUNTOS = document.getElementById("puntos");
const NIVEL = document.getElementById("nivel");
const TIEMPO = document.getElementById("tiempo");
const parrafo = document.getElementById("par");
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Una forma de insertar texto en html desde javascript //parrafo.innerHTML = "Texto Ejemplo"
//Otra forma de inserta texto en html desde javascript //parrafo.textContent = "texto Ejemplo"
//alert(`Hay ${a.length} con el nombre opcion1`)
PUNTOS.innerHTML = 1
NIVEL.innerHTML = 2
TIEMPO.innerHTML = 3
/*
for (let i = 0; i< a.length; i++) {
        a[i].innerHTML = i + 1
    }*/

    //const Aleatorio = () => Math.floor(Math.random() * 9 + 1 )
    const Escribir = (lugar, texto) => lugar.innerHTML = texto

   // Escribir(a[1], "Hola")

   
    
    //numeros = numeros.sort( () => Math.random() -0.5) 
   
    function revolver(num) {
      num.sort( () => Math.random() -0.5)
   } 
 
    function asignar(){

       for (let i = 0; i < a.length; i++) {
       console.log(`Numeros ${numeros[i]}`)
       Escribir(a[i], numeros[i])
         }
       }
    


function esconder(){
    for(var i = 0; i < a.length; i++){
        a[i].classList.add("esconder")
    }
    btn.classList.add("hide")

}

function iniciar(){
    esconder();
    revolver(numeros)
    asignar()
}


