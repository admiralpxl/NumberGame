const btn = document.getElementById("empezar");
const a = document.getElementsByName("opcion1");
const PUNTOS = document.getElementById("puntos");
const NIVEL = document.getElementById("nivel");
const TIEMPO = document.getElementById("tiempo");
const parrafo = document.getElementById("par");

//Una forma de insertar texto en html desde javascript //parrafo.innerHTML = "Texto Ejemplo"
//Otra forma de inserta texto en html desde javascript //parrafo.textContent = "texto Ejemplo"
//alert(`Hay ${a.length} con el nombre opcion1`)
PUNTOS.innerHTML = 1
NIVEL.innerHTML = 2
TIEMPO.innerHTML = 3

for (let i = 0; i< a.length; i++) {
        a[i].innerHTML = i + 1
    }



function esconder(){
    for(var i = 0; i < a.length; i++){
        a[i].classList.add("esconder")
    }
    btn.classList.add("hide")

}

function iniciar(){
    esconder();
}


