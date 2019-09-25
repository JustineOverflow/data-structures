let mystack = {
    length: 0,
    top: null,

    push: function (newItem) {
        let newNode = {
            next: this.top,
            data: newItem,
        };
        this.top = newNode;
        this.length += 1;
    },

    pop: function () {
        this.top = this.top.next;
        this.length -=1;
    },

    peek: function () {
     return this.top.data;
    },
};

mystack.push(3);
console.log(mystack);
mystack.push(4);
console.log(mystack);
mystack.pop();
console.log(mystack);
console.log(mystack.peek());
