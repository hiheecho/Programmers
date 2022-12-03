function solution(strlist) {
    const answer = [];
    for (a of strlist){
        let len = a.length;
        answer.push(len)
    }
    return answer;
}