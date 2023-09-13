// let fisrtname = "";
// console.log(fisrtname);

const userName = {
    firstname: "faiz",
    lastname: "Sagheer"
}
// console.log(Object.keys(userName).length)
// var length = Object.keys(userName).length
for (const key in userName) {

    console.log(`${key}: ${userName[key]}`);
}