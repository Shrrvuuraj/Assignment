function secondLargest(array){
    let max =array[0]
    let secondMax = -Infinity
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
        
            secondMax=max
            max =array[i]

        }
        else if(array[i]>secondMax &&array[i]<max){
            secondMax=array[i]
        }
    }
    return secondMax
}
let int =[10,20,30,40,50,60,70,65]
let rv =secondLargest(int)
console.log(rv);


