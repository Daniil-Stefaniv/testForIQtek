/**
 * @param {number} n
 * @return {number}
 */
function count(n) {
  if (1 > n > 45) return 'Некорректное число в параметре n'

  let prevValueOne = 1
  let prevValueTwo = 2
  let currentValue

  if(n === 1) return 1
  
  else if(n === 2) return 2
  
  for (let i = 3; i <= n; i++) {
    currentValue = prevValueOne + prevValueTwo // 
    prevValueOne = prevValueTwo
    prevValueTwo = currentValue
  }
  return currentValue
};


console.log('quest-2: ', count(5)); // 8
console.log('quest-2: ', count(3)); // 3
console.log('quest-2: ', count(7)); // 21
console.log('quest-2: ', count(2)); // 2
console.log('quest-2: ', count(10)); // 89
console.log('')