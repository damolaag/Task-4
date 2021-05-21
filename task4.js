

function checkYuGiOh(n){
    var output = [];
   if(isNaN(n) === true  || typeof n === 'boolean' || Array.isArray(n)){
        return `Invalid parameter: ${JSON.stringify(n)}`
      } else{
        for (let i = 1; i<= (n); i++){
            if (i%2 ===0 && i%3 === 0 && i%5 === 0){
                output.push("Yu-Gi-Oh")
            } else if (i%2 ===0 && i%3 === 0){
                output.push("Yu-Gi")
            } else if (i%2 === 0 && i%5 === 0){
                output.push("Yu-Oh")
            }else if (i%3 === 0 && i%5 === 0){
                output.push("Gi-Oh")
            }else if (i%2 === 0){
                output.push("Yu")
            }else if (i%3 === 0){
                output.push("Gi")
            }else if (i%5 === 0){
                output.push("Oh")
            }else{
                output.push(i)
            }
        } return output;
    }
}
console.log(checkYuGiOh('fizzbuzz is meh'));
