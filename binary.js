class BTNode {
     // constructor, other methods, removed for brevity
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add (value){
        if (this.root == null){
            this.root == new Node(value);
            return
        }
        var runner = this.root;
        while (runner != null){
            if(value < runner.val){
                if (runner.left != null){
                    runner = runner.left;
                }
                else{
                    var newNode = new Node(value);
                    runner.left = newNode;
                    return this;
                }
            }
            else {
                if (runner.right != null){
                    runner = runner.right;
                }
                else{
                    var newNode = new Node(value);
                    runner.right = newNode;
                    return this;
                }
            }
        
        }
    }

    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.value) {
                return true;
            }
            if (value < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }

    min() {
        var runner = this.root;
        var min = this.root.value;
        while(runner.left) {
            if(runner.left.value < min) {
                min = runner.left.value;
            }
            runner = runner.left;
        }
        return min
    }

    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;
            }
            runner = runner.right;
        }
        return max
    }

    size() {
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
        }
        return sizeHelp(this.root);
    }
    
    isEmpty() {
        if(this.root) {
            return false
        }
        return true
    }
}