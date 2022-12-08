function solution(age) {
    let result = ''
    const str_age = String(age)
    const age_array =Array.from(str_age); 
    const toNum = (str) => Number(str);
    const newArr = str_age.split('').map(toNum);
    for (let i=0; i< newArr.length; i++){
        let askNumber = newArr[i] + 97
        let alphabet = String.fromCharCode(askNumber);
        result += alphabet;
    }  
    return result
}