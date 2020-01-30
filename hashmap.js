let LinkedList = function () {
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

let HashMap = function () {

    let newHashMap = {
        data: Array(10),

        put: function (key, value) {

            let list;

            //creating an ID

            let id = 0;
            for (let i = 0; i < key.length; i++) {
                let ascii = key.charCodeAt(i);
                id += ascii;
            }
            let index = id % 10;

            // adding to the map
            if (this.data[index] === undefined) {
                this.data[index] = LinkedList();
                this.data[index].add({key, value})

            } else {

                // case of same key

            }
        }
    };
    return newHashMap;
};

let map = HashMap();
map.put('E14', 'Javi');
console.log(map);
