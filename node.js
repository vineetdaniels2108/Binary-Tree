//Front

class Node {
     // constructor, other methods, removed for brevity
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    front(){
        if(this.head == null){
            return null
        }
        return this.head.val
    }
    
    addFront(value) {
        let newNode  = new SLL(value);
        newNode.next = this.head;
        this.head = newNode;
        console.log(this.head)
        return this
    }

    removeFront(){
        if (this.head == null){
            return null
        }
        else{
            this.head = this.head.next;
            return this.head
        }

    }
}



list = new SLL()
node1 = new Node(13)

list.head = node1

node2 = new Node(10)

node1.next = node2

console.log (list.front())

list.removeFront()

console.log(list.head)


list.addFront(20);
list.addFront(30);
list.addFront(40);
list.addFront(50);