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
  front () { 
    if (!this.head) { 
      return null
    }
    console.log(this.head.data)
    return this
  }
  display () { 
    let thisNode=this.head
    let myList1=""
    while (thisNode!=null){ 
      myList1=[...myList1,thisNode.data]
      thisNode=thisNode.next
    } let myList = myList1.toString() 
    console.log(myList)
    }
}
SLL1 = new SLL()
SLL1.addFront(76)
SLL1.addFront(2)
SLL1.display()
SLL1.addFront(11.41)
SLL1.display()

