
let myBinarySearchTree;
myBinarySearchTree = {
    root: null,

    insert: function (value) {
        let newNode = {
            data: value,
            right: null,
            left: null
        };

        let pointer = this.root;

        if (this.root === null) {
            this.root = newNode;

        } else {

            let isNull = false;

            while (isNull !== true) {

                if (newNode.data < pointer.data) {
                    if (pointer.left != null) {
                        pointer = pointer.left
                    } else {
                        pointer.left = newNode;
                        isNull = true;
                    }
                } else {
                    if (pointer.right != null) {
                        pointer = pointer.right
                    } else {
                        pointer.right = newNode;
                        isNull = true;
                    }

                }

            }
            }



    },
};

myBinarySearchTree.insert(4);
console.log(myBinarySearchTree);
myBinarySearchTree.insert(2);
console.log(myBinarySearchTree);
myBinarySearchTree.insert(8);
console.log(myBinarySearchTree);
myBinarySearchTree.insert(6);
console.log(myBinarySearchTree);
