// Add Front

// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

//  class SLL {
//      // constructor, other methods, removed for brevity
//      addFront(value) {
    	
//     }
//  }
// copy
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }


// Remove Front

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

//  class SLL {
//     // constructor, other methods, removed for brevity
//      removeFront() {
//     }
//  }
// copy
// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

// Front

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

//  class SLL {
//     // constructor, other methods, removed for brevity
//      front() {
    	
//     }
//  }
// copy
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

class Node { 
  constructor(data) {
    this.data = data; 
    this.next = null;
  }
}
class SLL { 
  constructor() { 
    this.head = null;
  }
  addFront(val){
    let newNode = new Node(val); 
    if(!this.head) { 
      this.head = newNode;
      return this
    }
    newNode.next = this.head
    this.head = newNode; 
    return this
  }
  removeFront() { 
    if (this.head === null){ 
      return null;
    }
    let nodeToRemove = this.head;
    this.head = nodeToRemove.next; 
    nodeToRemove.next=null;
    return this
  }
  front () { 
    if (!this.head) { 
      return null
    }
    console.log(this.head.data)
    return this
  }
}
let SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
console.log(SLL1)
SLL1.removeFront()
console.log(SLL1)
SLL1.removeFront()
console.log(SLL1)
SLL1.front()
SLL1.removeFront()
SLL1.front()
