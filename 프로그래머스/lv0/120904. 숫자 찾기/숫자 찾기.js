function solution(num, k) {
    let num_arr = String(num)
    for (let i = 0; i <= num_arr.length; i++){
        if(Number(num_arr[i]) === k){
            answer = i + 1;
            break;
        } else{
            answer =  -1 
        }
    }
    return answer
}