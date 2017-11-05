/**
 * Created by Dimitris on 11/1/2017.
 */
//OBJECTS
let obj = {
    title: 'hola',
    greet: function (arg) {
        console.log(arg, this.title)
    }
}
obj.greet('hi');
//hi holla

//OBJECTS IN OBJECTS
let collectionOfObjects = {
    name0: {
        do: function () {
            console.log('i am name0')
        }
    },
    name1: {
        do: function () {
            console.log('i am name1')
        }
    },
    name2: {
        do: function () {
            console.log('i am name2')
        }
    },
    name3: {
        do: function () {
            console.log('i am name3')
        }
    }
};

console.log('===========OBJECT IN OBJECT==============');
collectionOfObjects.name0.do();

//DYNAMIC PROPERTY CALL
console.log('============ Dynamic access to object properties==============')
for (let i = 0; i < 4; i++) {
    //προσεξε πως καλεσα παραμετρικα το property του object to οποιο περιεχει μεσα του ενα αλλο object xD
    collectionOfObjects['name' + i].do()
}

/*
 i am name0
 i am name0
 i am name1
 i am name2
 i am name3
 */

