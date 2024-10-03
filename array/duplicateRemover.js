function duplicateRemover(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if (array[i]==array[j]){
                array.splice(j,1)
            }
        }
    }
    return array
}
let int =[10,20,30,40,50,60,70,10,20,30,40,50,6,0]
let rv =duplicateRemover(int)
console.log(rv);
