/**
 * Created by Dimitris on 11/5/2017.
 */

//arrays are basically fancy objects.
let fruitsNames = [
    'bananas',
    'apples',
    'pears',
    'berries',
    'oranges',
];
//array of objects
let fruits =[
    {
        id:'bananas1',
        titles:{eng:'bananas',de:'bananen'},
        likeness:5
    },
    {
        id:'apples1',
        titles:{eng:'appels',de:'Apfel'},
        likeness:5
    },
    {
        id:'oranges1',
        titles:{eng:'oranges',de:'orange'},
        likeness:4
    },
    {
        id:'berries1',
        titles:{eng:'berries',de:'berren'},
        likeness:5
    }
];

//basic operations:
//Addition

fruitsNames.push('pineapples');

fruits.push({
    id:'pineapples1',
    titles:{eng:'pineapples',de:'ananas'},
    likeness:5
});
console.log(fruitsNames);
console.log(fruits);
//slice, makes a subarray based on the given array
let subfruits = fruits.slice(0,2); //position 0 end position 2
console.log('======== \n subfruits',subfruits);
//slice creates a shallow copy of the array so i can add an item without affecting the fruits
//although, notice the fact that this is an object array, so consider the following

subfruits[0].id='apple2'; // i changed the id of the first item - object on subfruits;
console.log('===>subfruits: ',subfruits[0], ' \n ====>fruits: ',fruits[0]);
//although the value changed on fruits as well? WTF???? this is a shallow copy, what that means, is that
//js is not interested in what you contain on the items. objects are always passed by reference, meaning that
//the object we changed on the subfruits is a reference to the object of fruits. so the id changed in both.
//so what we can do about this? there are some libraries that has function for this, like jquery or underscores.
//allthough a custom solution (not supported by older browsers) to convert to json string and then to obj again
//which is suprisingly faster on benchmarks in contrast with other functions, (more on json on the json.js file) soooo:
function clone(array) {
    return JSON.parse(JSON.stringify(array)); //pretty neat right?
}
let subfruitsclone  = clone(subfruits);
subfruitsclone[0].id='apple3';

console.log('====>subfruitsclone:' ,subfruitsclone[0],'====>subfruits: ',subfruits[0], ' \n ====>fruits: ',fruits[0]);

//only subfruitsclone changed!!!