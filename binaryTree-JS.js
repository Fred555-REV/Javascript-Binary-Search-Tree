class Node {
    constructor (data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;

        } else {

            const searchTree = function (node) {
                //recursive function that goes through itself to build new nodes
                //if a value exists then it goes to the next node
                //if a value does not exist then it creates the node and returns

                // left sided nodes
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                }

                //right sided nodes
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }

                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        //goes through the tree from the top and because the lower values
        //were put to the left node of the root and previous nodes
        //all we need to do to find the minimum is search all the way to the left
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        //using the same logic as findMin but large numbers to the right
        //meaning that the largest would be farthest to the right
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    findData(data) {
        //doing this one from combining knowledge of creating tree and find max/min
        //trying without video

        let current = this.root;

        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current == null) {
                return null;
            }
        }
        return current;


    }

}

var myFirstTree = new BST();
myFirstTree.add(25);
myFirstTree.add(14);
myFirstTree.add(12);
myFirstTree.add(5);
myFirstTree.add(19);
myFirstTree.add(37);
myFirstTree.add(29);
myFirstTree.add(7);
myFirstTree.add(40);
myFirstTree.add(69);
myFirstTree.add(1);
myFirstTree.add(15);

//                            My visualization of binary tree                                                
//                                                                             
//                                          25             
//                                     14/      \37                    
//                                   12/ \19   29/ \40                       
//                                  5/  15/         \69                     
//                                1/ \7              max                        
//                              min                                                                                      

console.log(myFirstTree.findData(25));
console.log(myFirstTree.findMax());
console.log(myFirstTree.findMin());
console.log(myFirstTree.findData(19));
console.log(myFirstTree.findData(5));