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
        var newNode  = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        console.log(this.head)
        return this.head;
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

    contains(value){
        var runner = this.head;
        while (runner != null){
            if (runner.val == value){
                return true;
                runner = runner.next;
            }
            else{
                return false
            }
        }
    }

    length(value){
        var runner = this.head;
        var count = 0
        while (runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }

    display(){
        var runner = this.head;
        while (runner != null){
            console.log(runner.val);
            runner = runner.next;
        }
    }

    max(){
        var max = 0;
        var runner = this.head;
        while (runner !=null){
            if (runner.val > max){
                max = runner.val;
                runner = runner.next;
            }
        }
        return max;
    }

    min(){
        var min = 0;
        var runner = this.head;
        while (runner !=null){
            if (runner.val < min){
                min = runner.val;
                runner = runner.next;
            }
        }
        return min;
    }

    avg(){
        var sum = 0; 
        var count = 0; 
        var runner = this.head;
        while (runner != null){
            sum = sum + runner.val;
            count++;
            runner = runner.next;
        }
        var avg = sum/count
        return avg;
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