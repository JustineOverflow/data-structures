let myQueue;
myQueue = {

    length: 0,
    first: null,
    last: null,

    enqueue: function (newItem) {
        let newNode = {
            data: newItem,
            next: null,
        };

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length += 1;
    },

    dequeue: function () {
        this.first = this.first.next;
        this.length -= 1;
    },

    peek: function () {
        return this.first.data;
    }

};

myQueue.enqueue(4);
console.log(myQueue);
myQueue.enqueue(8);
console.log(myQueue);
myQueue.enqueue(16);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.peek());
myQueue.enqueue(14);
console.log(myQueue);
console.log(myQueue.peek());