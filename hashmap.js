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
                    while (i < this.data[index].length && this.data[index].get(i).key !== key) i += 1;

                    if (i === this.data[index].length) {
                        this.data[index].add({key: key, value: value});
                    } else {
                        if (this.data[index].get(i).key === key) {
                            this.data[index].get(i).value = value;
                        }
                    }
                } else if (this.data[index] === undefined) {
                    this.data[index] = LinkedList();
                    this.data[index].add({key: key, value: value});
                }
            },

            delete: function (key) {

                let id = 0;
                for (let i = 0; i < key.length; i++) {
                    let ascii = key.charCodeAt(i);
                    id += ascii;
                }
                let index = id % 10;

                if (this.data[index] === undefined) {
                    return 'Unexisting key!'
                } else {

                    let idx = 0;
                    while (key !== this.data[index].get(idx).key && idx < this.data[index].length) idx += 1;

                    if (idx < this.data[index].length) {
                        return 'Unexisting key!'
                    } else {
                        this.data[index].remove(idx);
                    }
                }
            }
        };
        return newHashMap;
    }
;

let map = HashMap();
map.put('E13', 'Javascript');
map.put('A12', 'Data Structure');
map.put('A21', 'Coding');
map.put('A21', 'Coding');
map.delete('A12');
map.delete('A12');
console.log(JSON.stringify(map));