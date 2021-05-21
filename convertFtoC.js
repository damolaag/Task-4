




    function  fahrToCel(fahr){
      var cel = parseInt((fahr - 32)) * 5/9

      if(Array.isArray(fahr)) {
        return `${JSON.stringify(fahr)}`+ ' is not a valid number but a/an Array';
      }
      else if(typeof(fahr) === 'object'){
        return `${JSON.stringify(fahr)}` +  ' is not a valid number but a/an object';
      }
      else if(isNaN(fahr)){
        return `${JSON.stringify(fahr)}` + ' is not a valid number';
      }
      else if(typeof n === 'boolean'){
        return `${JSON.stringify(fahr)}`+  ' is not a valid number';
      }
      return  cel.toFixed(4);
    }
  
  console.log( fahrToCel({temp:0}))

  
  