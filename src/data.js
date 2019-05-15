/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//const data= window.LOL.data;//llamo a mi array
//console.log(data)
//funcion del orden
/*data: array
sortBy: lo que quero ordenar
sortorder: como lo quiero ordenar */
/*const orderlol= (datalol, sortBy, sortOrder)=>{
   // let  ascLol= datalol;
    let resultLol = []
    if(sortOrder === "a-z"){
      ascLol.sort((a, b)=>{
        if(a[sortBy]< b[sortBy]){
          return -1;}
        if(a[sortBy]> b[sortBy]){
          return 1;}
        return 0;
      })
    } 
  
  }
  window.orderlol= orderlol;*/
  
  //funcion de filtrado
  const filterlol = (datalol, condition) =>{
    let lolTags = datalol.filter(element=> {
    return element.tags.includes(condition);
    })
    
    return lolTags;
    }
    window.filterlol = filterlol;
  
  //funcion de estadistica
  
  
  