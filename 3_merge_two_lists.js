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
  let listOne = list1
  let listTwo = list2

  let nextOne
  let nextTwo
  
  if (listOne === null) return listTwo
  else if (listTwo === null) return listOne
  else if (listOne === null && listTwo === null) return null

  const mergedListarr = []

  while(listOne && listTwo) {
    const checkArr = []
    
    checkArr.splice(0, 0, listOne, listTwo)
    checkArr.sort((a, b) => a.val - b.val)
    checkArr.map(peack => {
      mergedListarr.push(peack)
    })

    nextOne = listOne.next
    listOne = nextOne

    nextTwo = listTwo.next
    listTwo = nextTwo
  }

  mergedListarr.map((peack, index) => {
    let nextPeack = mergedListarr[index + 1]
    if (index === mergedListarr.length - 1) nextPeack = null
    peack.next = nextPeack
  })

  return mergedListarr[0]
}

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
} 
const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
} 

console.log("quest-3: ", mergeLists(list1, list2)) // 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null 
console.log("quest-3: ", mergeLists(null, list2)) // 1 -> 3 -> 4 -> null 
console.log("quest-3: ", mergeLists(list1, null)) // 1 -> 2 -> 4 -> null
console.log("quest-3: ", mergeLists(null, null)) // null
console.log('')
