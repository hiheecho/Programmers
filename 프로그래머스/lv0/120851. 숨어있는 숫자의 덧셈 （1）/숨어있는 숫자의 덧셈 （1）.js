function solution(my_string) {
    const num_str = my_string.replace(/[^0-9]/g, "");
    const num_array = num_str.split('');
   
    const sum = num_array.reduce((acc,cur)=>{
        return(acc += Number(cur))
    },0)
    return sum;
}