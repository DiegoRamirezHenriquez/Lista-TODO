const btnIngresar     = document.getElementById("btnIngresar");
let   inputTodo       = document.getElementById("input-item");
const contenedorLista = document.querySelector(".contenedor-lista");

btnIngresar.addEventListener("click",function(){
    if(inputTodo.value!=""){
        var numLista = contenedorLista.childElementCount;
        contenedorLista.insertAdjacentHTML("afterbegin", `<div class='ingresado' id="${numLista}">
            <input type="checkbox">
            <h2>${inputTodo.value}</h2>
            <img src='images/bx-x.svg' alt='borrar' class="borrarItem">
            
            </div>`);
            
        }
        inputTodo.value="";
   
})

contenedorLista.addEventListener("click",(event)=>{
    if(event.target.nodeName=='IMG'){
        borrar(event.target.parentNode.id);
    }
    
})

let borrar= (id)=>{
    let borrarTarea =document.getElementById(id)
    contenedorLista.removeChild(borrarTarea);
}

