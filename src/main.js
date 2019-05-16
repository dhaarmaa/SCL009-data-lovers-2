const datalol = Object.values(window.LOL.data);
const container = document.getElementById("show_lol");
let result = "";
//Card que muestra todos los pokémones en la pantalla inicial
const show= (datalol)=>{//funcion para mostrar (en las siguientes funciones solo llamo a esta en vez de volver a  crear las tarjetas)
    container.innerHTML= "";
for (let i=0; i< datalol.length; i++){
document.getElementById("show_lol").innerHTML+=
`
<div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" id= "cardlol" align= "middle">
      <img src= "${(datalol[i].img)}" class= "card-img-top" alt= "Card image character" id="photo">
      <div class="card-body text-dark" id= "tesxt_info">
         <p class="card-title">${(datalol[i].id)}</p>
         <p class="card-title"> Number: ${(datalol[i].title)}</p>
         <p class="card-title"> Type: ${(datalol[i].tags)}</p>
        </div>
    </div>
</div>
`
}}

window.onload= show(datalol);

//llamado del orden

document.getElementById("order").addEventListener('change', () => {
    let sortOrder= document.getElementById("order").value;
    result = window.sortlol(datalol, "name", sortOrder);
    console.log(result);
    show(result);
})
//llamado del filtrado
    document.getElementById("filterTags").addEventListener('change', () => {
        let condition = document.getElementById("filterTags").value;
        result= window.filterlol(datalol, condition);
        console.log(result);
        show(result);
        
       /* 
    document.getElementById("percent_tags").innerHTML= ` <div class= "percent-div">
   <p class="percent-p"> Porcentaje de campeones que corresponden a este rol: ${percentTags} % </p>
    </div>
  
    `*/
    let percentTags= window.filterTags(result);
    document.getElementById("percent_tags").innerHTML+=
    `
    <div class= "percentDiv">
    <p class="percent-p"> Porcentaje de campeones que corresponden a este rol: ${percentTags} % </p>
     </div>
    `
    });
    