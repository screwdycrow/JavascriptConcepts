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

console.log('============SLICE AND CLONING============');

//SLICE AND CLONING
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

//SPLICE//
console.log('============SPLICE============');
let fruits2 = clone(fruits);
let splicedFruits = fruits2.splice(0,2,'lalalalala'); //remove from fruits2 0 till 1 index keys, and add them to spliced then add lalalala
console.log('splicedFruits',splicedFruits);
console.log('fruits2',fruits2);

//EVERY-SOME//
console.log('============EVERY-SOME============');

let iseveryfruitfav = fruits.every((fruit)=>fruit.likeness === 5 ); //checks every fruit
console.log(iseveryfruitfav);
let issomefruitfav = fruits.some((fruit)=>fruit.likeness === 5);
console.log(issomefruitfav);
//ENTRIES//
let fruitentries  = fruitsNames.entries();
console.log(fruitentries.next()); //creates an iterable version (see generators)

//INCLUDES//
console.log('============INCLUDES============');

//COPY WITH IN
fruitsNames2 = clone(fruitsNames);
console.log(fruitsNames2);
fruitsNames2.copyWithin(0,2,4);
console.log(fruitsNames2);

// JOIN

console.log('we like '+fruitsNames.join(' and '));

//last index of

let numbers = [1,2,5,7,8,9,2,1];
console.log('last appereance of 2 in position: ',numbers.lastIndexOf(2), '| and of 1 in position: ',numbers.lastIndexOf(1));