let linkedList = function () {
    let list = {
        head: null,
        last: null,
        length: 0,

        add: function (item) {
            let newNode;

            if (this.length === 0) {
                newNode = {
                    item: item,
                };

                list.head = newNode;

            } else {
                newNode = {
                    item: item,
                };

                this.last.next = newNode;
            }
            list.last = newNode;
            list.length += 1;
        },

        remove: function (index) {
            let node = list.head;
            let previous;
            let i = 0;

            if (index === 0) {
                list.head = this.head.next;
                list.length -= 1;
                return list;
            }
            while (index !== i) {
                previous = node;
                node = node.next;
                i++
            }

            if (i === index) {
                previous.next = node.next;
                if (node.next === undefined) {
                    list.last = previous;
                }
                list.length -= 1;
            }
        },

        get: function (index) {
            let node = this.head;
            let i = 0;
            while (node) {
                if (i === index) {
                    return node;
                }
                i++;
                node = node.next;
            }
            return node;
        }
    };
    return list;
};


let list = linkedList();
list.add(3);
console.log(list);
list.add(5);
console.log(list);
list.add(7);
console.log(list.get());
console.log(list);
list.remove(2);
console.log(list);
