function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function reverseList(head) {
  if(head === null || head.length === 0 || head[0] === null) return null
  else if(head.length === 1 && head[0] !== null) return head

  const result = []

  let peak = {
    value: head[head.length - 1]
  }

  for (let i = head.length - 2; i >= 0; i--) {
    // peak = { value: head[i] }
    result.push(peak.value)
    // if (i === 0) {
    //   peak.next = null
    // } 
    
    peak.next = {
      value: head[i]
    }

    peak = peak.next
    
    if(i === 0) result.push(peak.value)
  }

  return result
}


console.log( 'quest-1: ', reverseList([1, 2]) ) // [2, 1]
console.log( 'quest-1: ', reverseList([1, 2, 3, 4, 5, 6, 7, 8, 9]) ) // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log( 'quest-1: ', reverseList([1, 2, 3, 4, 5, 6]) ) // [6, 5, 4, 3, 2, 1]
console.log( 'quest-1: ', reverseList(null) ) // null
console.log( 'quest-1: ', reverseList([]) ) // null
console.log( 'quest-1: ', reverseList([1]) ) // [1]
console.log( 'quest-1: ', reverseList([null]) ) // [null]
console.log('')
