function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for(let i = 0; i < nums.length; i++){
        numbers = numbers.split(nums[i]).join(i)
    }
    return Number(numbers)
}