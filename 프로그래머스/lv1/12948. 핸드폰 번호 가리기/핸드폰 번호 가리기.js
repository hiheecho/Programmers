function solution(phone_number) {
    
    const answer = phone_number.slice(0,-4);
    const hide = answer.replace(/[0-9]/gi,'*')
    
    return hide.concat(phone_number.slice(-4));
}