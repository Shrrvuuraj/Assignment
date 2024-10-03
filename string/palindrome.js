function palindromeString(str) {
  array = str.split("");
  let st = 0;
  let end = array.length - 1;
  while (st < end) {
    let temp = array[end];
    array[end] = array[st];
    array[st] = temp;

    st++;
    end--;
  }
  let reverseStr;
  reverseStr = array.join("");

    return  reverseStr===str
  
}
rv = palindromeString("Madam");
console.log(rv);
