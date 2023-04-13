function solution(array, commands) {
    // commands는 [i,j,k]
    //1. array.slice(i,j+1)
    //2. array.sort
    //3. answer.push(array[k])
    const answer = [];
    for(arr of commands){
        const sliceArray = array.slice(arr[0]-1,arr[1])
        sliceArray.sort(function(a,b){
            return a-b;
        });
        answer.push(sliceArray[arr[2]-1]);
    }
    return answer;
}