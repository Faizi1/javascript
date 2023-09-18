
let fisrtname = "Faiz";

// string indexing
console.log("we need  i ", fisrtname[2]);
console.log(`${fisrtname[3]}`);

// length of string
console.log("length of name is: ",fisrtname.length);

var name1 = "      fssaiz      ";

// remove empty spaces
console.log('remove space', name1.trim())

// uppercase
console.log('uppercase letter: ', fisrtname.toUpperCase())

// lowercase
console.log('uppercase letter: ', fisrtname.toLowerCase())

// slice
let newstring = fisrtname.slice(0,2)
console.log('slice', newstring)

// typeof operator,   check type of variable
let age = 7
console.log('type: ',typeof age)
console.log('type', typeof fisrtname)

// type casting

// convert number to string
let newvar1 = age + "";
console.log(typeof newvar1)

// convert string to number
let newStr = +fisrtname
console.log(typeof newStr)


// string concatination
let string1 = "faiz";
let string2 = "sagheer";

let full_string = string1 + " " + string2;
console.log(full_string)