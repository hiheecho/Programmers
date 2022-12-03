function solution(numbers, direction) {
    if( direction === "right" ){
        const right_num = numbers.pop(); 
        numbers.unshift(right_num);
        return numbers
    } else if (direction === "left"){
        const left_num = numbers.shift(); 
        numbers.push(left_num);
        return numbers
    }
}