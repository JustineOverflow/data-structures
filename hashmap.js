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
                    return node.item;
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

    LinkedList();

    let newHashMap = {
        data: Array(3),

        put: function (key, value) {

            //creating an ID

            let id = 0;
            for (let i = 0; i < key.length; i++) {
                let ascii = key.charCodeAt(i);
                id += ascii;
            }
            let index = id % 10;
            console.log(`${key}: ${id} - ${index}`);

            // adding to the map

            if (this.data[index] !== undefined) {

                let i = 0;
                let item = this.data[index].get(i);
                let thisKey = item.key;

                while (thisKey !== key || item < this.data[index].length) {

                    // case of a same key
                    if (thisKey === key) {
                        item.value = value;
                    } else {
                        this.data[index].add({key: key, value: value})
                    }
                }
            } else if (this.data[index] === undefined) {
                this.data[index] = LinkedList();
                this.data[index].add({key: key, value: value});
            }
        }
    };
    return newHashMap;
};

let map = HashMap();
//map.put('E14', 'Javi');
map.put('E13', 'Justine');
map.put('A12', 'Laurent');
//map.put('A12', 'Jaime');
map.put('A21', 'Claire');
map.put('A21', 'Claire');
console.log(JSON.stringify(map));

