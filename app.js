const btnIngresar     = document.getElementById("btnIngresar");
let   inputTodo       = document.getElementById("input-item");
const contenedorLista = document.querySelector(".contenedor-lista");
const isCheck=document.querySelectorAll('.check');

btnIngresar.addEventListener("click",function(){
    if(inputTodo.value!=""){
        var numLista = contenedorLista.childElementCount;
        contenedorLista.insertAdjacentHTML("afterbegin", `<div class='ingresado' id="${numLista}">
            <input id="check${numLista}" class="check" type="checkbox">
            <h2  id="tarea${numLista}">${inputTodo.value}</h2>
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

document.addEventListener('change', (event) => {
    if (event.target.classList.contains('check')) {
        if (event.target.checked) {
            let idTarea=event.target.parentNode.id;
            let Tarea= document.getElementById('tarea'+idTarea)
            let nombreTarea= document.getElementById('tarea'+idTarea).textContent;
            Tarea.style.color="gray";
            Tarea.innerHTML=`<s>${nombreTarea}</s>`;
        } else {
            let idTarea=event.target.parentNode.id;
            let Tarea= document.getElementById('tarea'+idTarea)
            let nombreTarea= document.getElementById('tarea'+idTarea).textContent;
            Tarea.style.color="white";
            Tarea.innerHTML=`${nombreTarea}`;
        }
    }
});
