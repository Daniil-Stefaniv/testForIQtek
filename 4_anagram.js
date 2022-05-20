/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false
  
  const review = []

  s.split('').map(letter => {
    review.push(letter)

    if(t.includes(letter)) review.pop(letter)
  })

  return review.length === 0 ? true : false
};


console.log('quest-4: ', isAnagram('rat', 'tar')) // true
console.log('quest-4: ', isAnagram('camelCase', 'Caelecasm')) // true
console.log('quest-4: ', isAnagram('rat', 'tat')) // false
console.log('quest-4: ', isAnagram('camelCase', 'Caelevasm')) // false
console.log('quest-4: ', isAnagram('silent', 'listen')) // true
console.log('quest-4: ', isAnagram('silent', 'listetrf')) // false

