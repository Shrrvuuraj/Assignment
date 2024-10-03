function sortedMergeDuplicate(array1 ,array2){
    let mergeArray=array1.concat(array2);
    // let sortedArray =[];
    for(let i=0;i<mergeArray.length;i++){
        for(let j=i+1; j<mergeArray.length;j++){
            if (mergeArray[i]==mergeArray[j]){
            mergeArray.splice(j,1)
            }
           
        }
        
    }
    for(let i=0;i<mergeArray.length;i++){
        for(let j=i+1; j<mergeArray.length;j++){
            if(mergeArray[i]>mergeArray[j]){
                let temp=mergeArray[i]
                mergeArray[i]=mergeArray[j]
                mergeArray[j]=temp
                

            }
        
        }
    }
    return mergeArray



}
rv =sortedMergeDuplicate([10,20,50,60,7020,30,40,20],[10,66,77,50,7020])
console.log(rv);
