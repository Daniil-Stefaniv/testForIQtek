function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function reverseList(head) {
  return (head === null || head.length === 0) ? null : head.reverse()
}

console.log( 'quest-1: ', reverseList([1, 2, 3, 4, 5, 6]) ) // [6, 5, 4, 3, 2, 1]
console.log( 'quest-1: ', reverseList(null) ) // null
console.log( 'quest-1: ', reverseList([1, 2, 3, 7, 12, 9]) ) // [9, 12, 7, 3, 2, 1]
console.log( 'quest-1: ', reverseList([4, 5, 0, 356, 23]) ) // [23, 356, 0, 5, 4]
console.log( 'quest-1: ', reverseList([]) ) // null
console.log('')