const btnIngresar     = document.getElementById("btnIngresar");
let   inputTodo       = document.getElementById("input-item");
const contenedorLista = document.querySelector(".contenedor-lista");
const btnchk =document.querySelector(".botonCHK");


btnIngresar.addEventListener("click",function(){
    if(inputTodo.value!=""){

        var numLista = contenedorLista.childElementCount;
        contenedorLista.insertAdjacentHTML("afterbegin", `<div class='ingresado' id="${numLista}">
            <div class='item'>
                <input type="checkbox">
                <h2>${inputTodo.value}</h2>
                <button><img src='images/bx-x.svg' alt='borrar'></button>
            </div>
        </div>`);
        
    }
   
})

