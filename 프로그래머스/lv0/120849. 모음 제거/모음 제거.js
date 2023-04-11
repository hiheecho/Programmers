function solution(my_string) {
    const str = my_string.split('');
    const answer = str.filter((word)=>{
        return word !== 'a' && word !== 'e' &&word !== 'i' &&word !== 'o' && word !== 'u';
    })
    return answer.join('') ;
}