function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function reverseList(head) {
  if (head === null) return null

  let tmp = head
  let next = tmp.next
  const peacks = []
  while (tmp !== null) {
    peacks.push(tmp)
    tmp = next
    next = tmp.next
    if (next === null) {
      peacks.push(tmp)
      break
    }
  }

  peacks.reverse()

  let result

  peacks.map((peack, index) => {
    nextPeack = peacks[index + 1]
    if (index === peacks.length - 1) nextPeack = null
    peack.next = nextPeack
  })

  return peacks[0]
}

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

const listTwo = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}

const listThree = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 26,
        next: {
          val: 145,
          next: null
        }
      }
    }
  }
}

console.log('quest-1: ', reverseList(list)) // 5 -> 4 -> 3 -> 2 -> 1 -> null
console.log('quest-1: ', reverseList(listTwo)) // 2 -> 1 -> null
console.log('quest-1: ', reverseList(listThree)) // 145 -> 26 -> 3 -> 2 -> 1 -> null
console.log('quest-1: ', reverseList(null)) // null
console.log('')
