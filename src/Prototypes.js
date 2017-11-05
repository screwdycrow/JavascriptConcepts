/**
 * Created by Dimitris on 11/5/2017.
 */
let mhtsos = new Person({
    name:'Dimtris',
    surname:'Tzilivakis',
    username:'screwdycrow',
    amka:666,

});
//vlepeis pou anti gia parametrous perasa ena object? auto volevei otan oi parametroi einai polloi,
//mhn ksexnas ta function einai eidikou typou object. me to na tous valw property kai epeita na kalesw to new einai san na lew
//dhmiourgise ena object "typou" (prototype) Person. Autos einai enas apo tous pollous tropous. gia na kaneis kati tetoio :P
//einai o pio aplos

mhtsos.greetUser();

console.log(mhtsos);

if(mhtsos instanceof Person){ //to instanceof elegxei ti "instance einai to object"
    console.log('YAAAAAY mhtsos prototype is Person');
    //sygxarhtiria molis katalaves pws fitagnete kati pou "moiazei" alla den einai akrivws klassh, giati den leitourgei me ton idio tropo
    // a epishs Prototypes ;)
}

//an gia kapoio logo thelw na epektinw to prototype tou person pera apo auto pou exw orisei , grafw:

Person.prototype.malakas = function () {
    console.log( `${this.name} is malakas`);
};

mhtsos.malakas(); //vlepeis pou para to gegonos oti o mhtsos exei dhmiourghthei me to prototype pou den eixe to function malakas, ksafnika se auto to kommati
//kwdika to exei? auto giati ena object periexei ena reference sto prototype tou, ara an allaksei mia methodos, thn epomenh fora pou tha kaleseis
//to object sou tha exei allaksei kai se auto


// we can overwrite object with .call ex... lets consider the
//first example.
console.log('============ Call and Apply ============');
obj.greet.call({
    title:'γειααααα!!!!'
},'evi');

//the only difference between apply and call is that apply accepts an array :P only xD
obj.greet.apply({
    title:'heeeeyyyyy!!!'
},['evi','maria','mhtsos','giannis']);
//i feel that call might be a bit useless in the end :P you can just use
//apply with one item for 1 arguement

//the whole point of this, is that you can apply some spesific method
//of a prototype of an object without creating one supplying your objects on the fly :P

// a more practical example:

function Man(name, surname) {
    this.name = name;
    this.surname =surname;
    this.class = 'human';
}

function Woman(name,surname) {
    Man.call(this,name,surname);
    this.bag = 'prada';
}
/*
 let Dwarf = Object.create(Man);
 Dwarf.prototype.weapon = 'axe';
 let dwrf = new Dwarf('se','dt');
 */

//that does copy the prototype to the object dwarf but doesnt
//have a constructor so how we can achive inheritence?
//by simply doing the following

//this might have been a bit racist :P xD
//but heeeey the bible did the same thing !
let wmn = new Woman('Harpy','Dauter');
//anyway as you can see, wee basically, used call, or apply
//to transfer the properties of Man to Woman, the .class= human remained
//and we used the constructor arguments of woman to the same of man
//this kinda reminds of super constructor in java :P xD
console.log(wmn);
//giati milaw agglika ?? :P xD


