const datalol = Object.values(window.LOL.data);

//Card que muestra todos los pokémones en la pantalla inicial
const show= (datalol)=>{//funcion para mostrar (en las siguientes funciones solo llamo a esta en vez de volver a  crear las tarjetas)
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


/*const container = document.getElementById("show_lol");// llamdo del container en donde van LAS TARJETAS
const nameOrder = document.getElementById("order");//llamo a mi select de orden
nameOrder.addEventListener('change', () => {//escucha el cambio (change)
    let sortOrder = document.getElementById("order").value;//de doy valor a mis opciones del select
    sortOrder.forEach(element => {
        show(window.data.orderlol(datalol, element.getAtribute("name"), element.getAtribute("value")));
        
    });
})*/

const container = document.getElementById("show_lol");
  
    document.getElementById("filterTags").addEventListener('change', () => {
        let condition = document.getElementById("filterTags").value;
        let resultFilter= window.filterlol(datalol, condition);
        container.innerHTML = "";
        resultFilter.forEach(element => {
            container.innerHTML+=
            `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
                <div class="card bg-light mb-3" id= "cardlol" align= "middle">
                  <img src= "${element.img}" class= "card-img-top" alt= "Card image character" id="photo">
                  <div class="card-body text-dark" id= "tesxt_info">
                     <p class="card-title">${element.id}</p>
                     <p class="card-title"> Number: ${element.title}</p>
                     <p class="card-title"> Type: ${element.tags}</p>
                    </div>
                </div>
            </div>
            `
    });
    });

/*llamado del index (selec para orden)
llamado del data.js (funcion del orden)*/
/*const container = document.getElementById("show_lol")//llamo al container
const nameOrder= document.getElementById("order")//llamo a mi select
nameOrder.addEventListener("change",() =>{ //hago que escucher ese y haga el cambio
    let sortOrder = document.getElementById("Order").value//le doy valor al select
    let sortBy= document.getElementsByTagName("value").value//tomo el valor
    let dataOrder= window.orderlol(data, sortBy, sortOrder)//paramertros

    dataOrder.forEach(element => {//lo mismo que el for pero reducido,recorre todo ... uno a uno 
      container.innerHTML +=
      //targetas
      `
     <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
         <div class="card bg-light mb-3" id= "cardlol" align= "middle">
             <img src= "${element.img}" class= "card-img-top" alt= "Card image character" id="photo">
           <div class="card-body text-dark" id= "tesxt_info">
             <p class="card-title">${element.id}</p>
             <p class="card-title"> Number: ${element.title}</p>
             <p class="card-title"> Type: ${element.tags}</p>
           </div>
          </div>
     </div>
    `
  })*/


/*llmaado del index(selec de filtrado) 
llamado de data.js(funcion de filtrado)*/
/*const container= docuement.getElementById("show_lol")//llame a mi container 
document.getElementById("filterTags").addEventListener("change", ()=> {//llame a mi select y lo hice escuchar los cambiios
  document.getElementById("show_lol").innerHTML="";
  let condition = document.getElementById("filterTags").value;
  let dataType = window.filterData(data,condition);
  
  //for (let i=0; i< dataType.length; i++){
dataType.forEach(element=>{
  show_lol.innerHTML+=
  `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
      <div class="card bg-light mb-3" id= "cardlol" align= "middle">
         <img src= "${element.img}" class= "card-img-top" alt= "Card image character" id="photo">
         <div class="card-body text-dark" id= "tesxt_info">
             <p class="card-title">${element.id}</p>
             <p class="card-title"> Number: ${element.title}</p>
             <p class="card-title"> Type: ${element.tags}</p>
          </div>
      </div>
   </div>
 `
  });
});  
*/