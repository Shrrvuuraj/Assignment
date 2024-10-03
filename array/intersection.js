function intersection(array1,array2){
    let intersectedArray=[];
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array1[i]==array2[j]){
                intersectedArray.push(array1[i]);
            }
        }
    }
    return intersectedArray
}

let rv =intersection([10,20,30,40,50],[40,50,60,70])
console.log(rv);
