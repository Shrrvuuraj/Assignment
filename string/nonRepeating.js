function nonRepeating(str){

     let array=str.split("")
     for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]!==array[j]){
                return array[i]
                

            }
        }
     }

}
let rv = nonRepeating("hellohuopuu")