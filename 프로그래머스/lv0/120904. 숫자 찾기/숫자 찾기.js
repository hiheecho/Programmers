function solution(num, k) {
    const num_arr = num.toString();
    const index = num_arr.indexOf(k.toString());
    if(index !== -1){
        return index + 1;
    }else{
    return index;
    }
}