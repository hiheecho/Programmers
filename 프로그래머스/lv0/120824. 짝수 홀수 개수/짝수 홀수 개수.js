function solution(num_list) {
    let count_0 = 0
    let count_1 = 0
    for (i of num_list)
        if (i % 2 === 0){
           count_0 += 1
        } else if(i % 2 === 1){
            count_1 += 1
        }
    return [count_0, count_1]
}