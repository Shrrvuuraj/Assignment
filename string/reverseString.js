function reverseString(str){
    array=str.split("");
   let st=0
   let end=array.length-1
   while(st<end){
    let temp=array[end]
    array[end]=array[st]
    array[st]=temp

    st++
    end--
   }
   let reverseStr=array.join("")

return reverseStr
}
rv=reverseString("hello guysss i am shravan")
console.log(rv);
