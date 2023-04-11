function solution(hp) {
    let count = 0;
    const ants = [5,3,1]
    for(let i=0; i < ants.length; i++ ) {
       count = count + Math.floor(hp / ants[i])
        hp = hp - ants[i] * Math.floor(hp / ants[i]) 
    }
    return count;
}