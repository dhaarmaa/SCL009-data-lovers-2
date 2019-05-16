/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const sortlol= (datalol, sortBy, sortOrder) => {
    const dataSort= datalol;
    if(sortBy==="name" && sortOrder === "a-z" ){
      dataSort.sort((a,b)=>{
          if(a.name>b.name){
            return 1;
          }
          if(a.name<b.name){
            return -1;
          }
            return 0;
        });
    }
//     else if ()
}
    window.sortlol= sortlol
  
  //funcion de filtrado
  const filterlol = (datalol, condition) =>{
    let lolTags = datalol.filter(element=> {
    return element.tags.includes(condition);
    })
    
    return lolTags;
    }
    window.filterlol = filterlol;
  
  //funcion de estadistica

  /*const counterCharacter = (datalol, condition) =>{
    let countCahracter = datalol.reduce((count,data) =>{
      if(data[condition]){
      return count + 1;}
    },0)
    return countCahracter;
  };*/
  
  //window.counterCharacter = counterCharacter ;
  
  //Función de calculo, porcentaje de pokémones según hora
  const filterTags = (datalol =>{
  let dataLolPercent = Math.round((datalol*100)/135);
  
  return dataLolPercent;
  });
  
    window.filterTags = filterTag;
