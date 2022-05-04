const kelvin = 0;
// establishing constant variable for temperature kelvin and setting it equal to 293

const celsius = kelvin - 273;
// establishing constant variable for temperature celsius and using formula from kelvin to determine it

let fahrenheit = Math.floor(celsius * (9/5) + 32);
// establishing formula to determine temperature in fahrenheit 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// divider

let newton = Math.floor(celsius * (33/100))
console.log(`The temperature is ${newton} degrees Newton.`)

// hot naked sex easy peasy

let myAge = 21
// this is my age you doofus

let earlyYears = 2
// creating an early year variable because dogs have a different lifespan than humans, they accelerate faster in the first two years than every subsequent year

earlyYears *= 10.5

let laterYears = myAge -= 2

laterYears *= 4
console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears

const myName = "Eddie".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep")
} else{
  console.log("not bed time yet")
}
