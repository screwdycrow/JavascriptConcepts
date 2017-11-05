/**
 * Created by Dimitris on 11/5/2017.
 */
//FUNCTION FACTORY
/*
    In fact functions are objects so, you can completely seperate
    them, but i desided to do so to for some small examples you
    immediately associate with functions in your mind.
     */
let makegreet = function (a) {
    return function () {
        console.log('i am ' + a)
    }
};
//apothikeuoume tis function pou ftiagnoume gia kathe onoma se array
arraywithFunctions = [
    makegreet('Dimitris'),
    makegreet('Giannis'),
    makegreet('Hlias'),
];
console.log('============= Function factory & function calling on arrays============');
//ekteloume oles tis function mesa
for (let i = 0; i < arraywithFunctions.length; i++) {
    arraywithFunctions[i](); //kathe stoixeio einai function.
}


makemultiply = function (mult) {
    return function (number) {
        return number * mult
    }
};

let x4 = makemultiply(4);
let xPi = makemultiply(3.14);
console.log(x4(5));
console.log(xPi(2));

