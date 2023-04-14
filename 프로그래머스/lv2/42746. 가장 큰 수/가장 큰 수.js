function solution(numbers) {
  const array = numbers.map(num => num + '')
  array.sort((a,b)=> (b+a) - (a+b))
  const result = array.join('');
  return array[0]==="0" ? "0" : result;  
}
