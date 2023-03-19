function solution(array) {
    array.sort(function(a, b)  {
    return a - b;
    });
    const index = Math.round(array.length / 2) - 1
    return array[index];
}