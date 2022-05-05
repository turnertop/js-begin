let raceNumber = Math.floor(Math.random() * 1000);
// Math.floor ensures that the numbers are whole
// Math.random grants you the randomized number
// * 1000 sets the range of values you want from randomizing numbers

let RegisteredEarly = true;
// determining if a runner registered early or not

let RunnerAge = 69;
// determining the runner's age

if (RunnerAge >= 18 && RegisteredEarly) {
  raceNumber += 1000
}
// a control flow statement to check whether the runner is an adult and if they are registered early
// && - and
// >= 18 means greater than or equal to 18 years old and that's to become an adult in this dumbass society
// the reason we add 1000 is still unknown but I'm guessing they want to isolate the variables that are ideal or need to be selected, which are the ones that are participating in the race

if (raceNumber >= 1000) {
  console.log(`You will race at 9:30am.Your race number is ${raceNumber}.`;
} else if (RunnerAge >= 18) {
  console.log("You will race at 11:00am because you didn't register early you dimwit. " `Your race number is ${raceNumber}.`);
} else if (RunnerAge <= 18) {
  console.log("You will race at 12:30pm because you're a young fucker and I am just following the rules. " `Your race number is ${raceNumber}.`);
} else (RunnerAge === 18) {
  console.log("It's time to see the doctor young fellow. I am eradicate you.")
}
  
//fuck it doesn't work it's gg fucking cringe i have to firgure this shit out!!!!
