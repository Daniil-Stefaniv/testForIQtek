function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode | null} list1
 * @param {ListNode | null} list2
 * @return {ListNode | null}
 */
function mergeLists(list1, list2) {
  
}


// console.log('quest-3: ', mergeLists([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])) //[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
// console.log('quest-3: ', mergeLists(null, [0])) //[0]
// console.log('quest-3: ', mergeLists([1, 2, 3, 904, 78, 120], null)) //[1, 2, 3, 78, 120, 904]
// console.log('quest-3: ', mergeLists([4, 5, 0, 56, 9], [3])) //[0, 3, 4, 5, 9, 56]
// console.log('quest-3: ', mergeLists([], [])) //null
// console.log('')
