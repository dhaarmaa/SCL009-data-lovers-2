/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//Función de filtrado por tipo de pokémon
const filterData = (data, condition) =>{
const Poketype = data.filter(view => {
return (view.type.includes(condition));
}); 

return Poketype;
}
window.filterData = filterData;

//Función de orden por número de pókemon
const filterOrder = (data, valueOrder, conditionOrder) =>{

  let dataOrder;
  
    if (conditionOrder === "decreasing"){
     dataOrder = data.sort((a,b) =>{
        return (b[valueOrder] - a[valueOrder]);
      });
    }

    else if(conditionOrder === "growing"){
      dataOrder = data.sort((a,b) =>{
        return (a[valueOrder] - b[valueOrder]);
      });
    } 
    
  return dataOrder;
 
}  
window.filterOrder = filterOrder;

//Función de filtrar por hora de salida de los pókemones, para luego hacer el cálculo
const filterHour = (data, valueHour, conditionHour) =>{
  
  let dataHour;

  if(conditionHour === "N/A"){
    dataHour = data.filter(time => {
      return (time[valueHour].includes(conditionHour));
    });

  }

    else if(conditionHour === "morning"){
      dataHour = data.filter(time => {
        
        let valueNew = time[valueHour];
        let valueSlice =  valueNew.slice(0, 2);
        let valueNum = parseInt(valueSlice);

        if(valueNum >= 0 && valueNum < 12){
          return (valueNew);
        }
    });
  
    }

    else if(conditionHour === "late"){
      dataHour = data.filter(time => {
        
        let valueNew = time[valueHour];
        let valueSlice =  valueNew.slice(0, 2);
        let valueNum = parseInt(valueSlice);
        
        if(valueNum >= 12 && valueNum < 19){  
          return (valueNew);
        }
    });
    
    }

    else if (conditionHour === "night"){
      dataHour = data.filter(time => {
        
        let valueNew = time[valueHour];
        let valueSlice =  valueNew.slice(0, 2);
        let valueNum = parseInt(valueSlice);
        
        if(valueNum >= 19 && valueNum <= 23){
          return (valueNew);
        }
    });
    
    }
    
    return dataHour;
    }
  
    window.filterHour = filterHour;

//Función de calculo, porcentaje de pokémones según hora
const filterCal = (data =>{
let dataPercent = Math.round((data.length*100)/151);

return dataPercent;
});

  window.filterCal = filterCal;