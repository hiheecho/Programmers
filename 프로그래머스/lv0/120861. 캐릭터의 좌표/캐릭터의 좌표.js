function solution(keyinput, board) {
    let x = 0
    let y = 0
    for ( let i = 0; i < keyinput.length; i++){
    switch(keyinput[i]){
        case "up":
            if(y < (Math.floor(board[1]/2))){
                y++;  
            } break;
        case "down":
            if(y > - (Math.floor(board[1]/2))){
                y--;  
            } break;
        case "right":
            if(x < (Math.floor(board[0]/2))){
                x++; 
            } break;
        case "left": 
            if(x > - (Math.floor(board[0]/2))){
                x--;
            }break;
    }}
    const answer = [x,y]
    return answer
}
