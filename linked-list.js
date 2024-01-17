/** Node: node for a singly linked list.
 * 
 * 
 * npx jest linked-list.test.js
 */



class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
     }
     this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
     let newNode = new Node(val);

     if (this.head === null) {
      this.head = newNode;
      this.tail = newNode; 

     } else {

     newNode.next = this.head;
     
    }

    this.head = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {

    if (this.head === null) {
      throw new Error("List empty");
    } else {
    let currentNode = this.head;
    let secondToLastNode = this.head;
    while (currentNode.next){
      secondToLastNode = currentNode;
      currentNode = currentNode.next;
    }

    secondToLastNode.next = null;

    this.tail = secondToLastNode

    this.length -= 1;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
  if (this.head === null) {
    throw new Error("List empty");
  } else {
    let nodeToRemove = this.head
    this.head = this.head.next;

    this.length -= 1;

    if (!this.length) {
      this.tail = null;
    }
    return nodeToRemove.val;
   }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  if (idx < 0 || idx >= this.length) {
    throw new Error ("Invalid index")
   } else {
    let currentNode = this.head;
    let count = 0;

    while (count < idx ) {
      currentNode = currentNode.next;

      count += 1;
    }
    return currentNode.val;
   }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try {
      let currentVal = this.getAt(idx);
      
      if (typeof currentVal === 'number') {
        
        let currentNode = this.head;
        for (let i = 0; i < idx && currentNode !== null; i++) {
          currentNode = currentNode.next;
        }
  
        
        if (currentNode !== null) {
          currentNode.val = val;
          return currentVal;
        }
      }
    } catch (error) {
      
      return null;
    }
  
    return null; 
  }

  

  insertAt(idx, val) {
  if (idx < 0  || idx > this.length) {
    return null;
  } else if (idx === 0) {
    return this.unshift(val);
  } else if (idx == this.length) {
    return this.push(val);
  } else {
    let current = this.head;
    let count = 0;

    while (count < idx - 1) {
      current = current.next;
      count += 1;
    }
    const newNode = new Node(val);

    newNode.next = current.next;

    current.next = newNode;

    this.length += 1;

    return undefined;
   }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
if (idx < 0 || idx > this.length) {
  return null;
} else if (idx === 0) {
  return this.shift();
} else if (idx === this.length - 1) {
  return this.pop();
} else {
  const preTrashNode = this.getAt(idx - 1);

  const trashNode = this.getAt(idx);

  preTrashNode.next = trashNode.next;

  this.length -= 1;
  
  return trashNode;
  }
}

  /** average(): return an average of all values in the list */

average() {
 if (this.length === 0) {
  return 0;
 }

 let current = this.head;
 let sum = 0;

 while (current !== null) {
  sum += current.val;
  current = current.next;
 }
 return sum / this.length;
  }
 /* Reverses the list in place, not by creating a new list or new nodes. */
  reverse(head) {
  if (head === null) {
      return null;
  } else {
      let currNode = head;
      let prevNode = null;
      let nextNode = null;

      while (currNode) {
          nextNode = currNode.next;
          currNode.next = prevNode;
          prevNode = currNode;
          currNode = nextNode;
      }

      return prevNode;
  }
};

/* Combine and sort two sorted linked lists */
sortSorted(l1, l2) {
  let newList = new ListNode(0);
  let headOfNewList = newList;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      newList.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      newList.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    newList = newList.next;
  }

  if (l1 === null) {
    newList.next = l2;
  } else {
    newList.next = l1;
  }

  return headOfNewList.next;
}


}



 




module.exports = LinkedList;
