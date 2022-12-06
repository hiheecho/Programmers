function solution(phone_number) {
    
    const front = phone_number.slice(0,-4);
    const hide_num = front.replace(/[0-9]/gi,'*')
    const show_num = phone_number.slice(-4)
    
    return hide_num.concat(show_num);
}