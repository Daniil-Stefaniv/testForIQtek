/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if ((1 > s > 5 * 104) || (s.length !== t.length)) return false
  
  s = s.toLowerCase()
  t = t.toLowerCase()
  
  const review = []
  
  const arrT = t.split('')
  const arrS = s.split('')
  
  arrS.map(letter => {
    review.push(letter)
    
    for (let i of arrT) {
      if (letter !== i) continue

      arrT.splice(arrT.indexOf(i), 1)
      break
    }

    review.pop(letter)
  })

  return review.length === arrT.length ? true : false
};


console.log('quest-4: ', isAnagram('aab', 'abb')) // false
console.log('quest-4: ', isAnagram('camelCase', 'Caelecasm')) // true
console.log('quest-4: ', isAnagram('rat', 'tat')) // false
console.log('quest-4: ', isAnagram('camelCase', 'Caelevasm')) // false
console.log('quest-4: ', isAnagram('silent', 'listen')) // true
console.log('quest-4: ', isAnagram('silent', 'listetrf')) // false
console.log('quest-4: ', isAnagram('rt', 'tr')) // true
console.log('quest-4: ', isAnagram('rrrtt', 'rrrrt')) // false
console.log('quest-4: ', isAnagram('ytrewq', 'qwerty')) // true
console.log('quest-4: ', isAnagram('ytrewq', 'qwertj')) // false

