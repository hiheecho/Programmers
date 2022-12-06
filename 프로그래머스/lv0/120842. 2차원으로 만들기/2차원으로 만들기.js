function solution(num_list, n) {
    let newArr = [];
    for (let i = 0; i < num_list.length / n; i++){
        newArr = [...newArr,num_list.slice(n*i , n*i + n)] 
        }
    return newArr;
}