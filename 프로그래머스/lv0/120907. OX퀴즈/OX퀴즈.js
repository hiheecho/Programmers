function solution(quiz) {
    var answer = [];
    let number = 0;
    for (i=0;i<quiz.length;i++){
        const test = quiz[i].split(' ')
        const result = Number(test[4])
        if(test[1] === "-"){
            number = Number(test[0]) - Number(test[2])
            if(number === result ){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }else{
            number = Number(test[0]) + Number(test[2])
            if(number === result ){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }
  
    }
    return answer;
}