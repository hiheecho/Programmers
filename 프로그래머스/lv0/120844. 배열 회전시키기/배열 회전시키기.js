function solution(numbers, direction) {
    if( direction == "right" ){
        const right_num = numbers.pop(); 
        const right_arr = numbers.unshift(right_num)
        return numbers
    } else if (direction=="left"){
        const left_num = numbers.shift(); 
        const left_arr = numbers.push(left_num)
        return numbers
    }
}