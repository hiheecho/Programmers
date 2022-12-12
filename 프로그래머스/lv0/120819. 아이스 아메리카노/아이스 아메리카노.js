function solution(money) {
    const coffee = parseInt(money/5500)
    const cash = money -  (coffee * 5500)
    var answer = [coffee, cash];
    return answer;
}