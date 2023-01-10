const btnIngresar     = document.getElementById("btnIngresar");
let   inputTodo       = document.getElementById("input-item");
const contenedorLista = document.querySelector(".contenedor-lista");
// function agregarALista(){
// }
// btnIngresar.addEventListener("click", agregarALista());

btnIngresar.addEventListener("click",function(){
    if(inputTodo.value!=""){
        contenedorLista.insertAdjacentHTML("afterbegin", "<div class='ingresado'><div class='item' id='00'><h2>"+inputTodo.value+"</h2><div class='botones-item'><button><img src='images/bx-circle.svg' alt='noCheck'></button><button><img src='images/bx-x.svg' alt='borrar'></button><button><img src='images/bx-pencil.svg' alt='editar'></button></div></div>");
    }
    
})

//saber cual es el ultimo elemento agregado para poder cambiar el id