class Node {
    constructor(data, left = null, right = null) {
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
        const node = this.node;

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
                        node.left = new node(data);
                        return
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } 
                
                //right sided nodes
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }


            }
        }
    };

    findMin(){ 
        //goes through the tree from the top and because the lower values
        //were put to the left node of the root and previous nodes
        //all we need to do to find the minimum is search all the way to the left
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        //using the same logic as findMin but large numbers to the right
        //meaning that the largest would be farthest to the right
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }


}