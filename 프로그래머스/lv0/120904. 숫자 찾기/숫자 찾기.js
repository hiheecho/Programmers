function solution(num, k) {
    const numArr = String(num);
    for(let i = 1; i <= numArr.length; i++){
       if(numArr.includes(k) == true ){
           return numArr.indexOf(k) + 1
       } else {
           return -1
       }
    }
}