let HashMap = function () {

    let newHashMap = {
        data: Object.seal(Array(10)),

        put: function (key, value) {

            let id = 0;
            for(let i = 0; i < key.length; i++) {
                let ascii = key.charCodeAt(i);
                id += ascii;
            }

            console.log(id);
        },

        get: function(key) {

            for(let i = 0; i < Array.length; i++) {

            }

        }
    };

    return newHashMap;
};

let map = HashMap();
map.put('E14', 'Javi');
map.get('E14');