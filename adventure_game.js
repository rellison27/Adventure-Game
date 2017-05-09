// Check if the user is ready to play!
prompt("Are you ready to play?");
confirm("I am ready to play!");

var age = prompt ("What's your age?");

if (age < 13)
{
    console.log("OK, you're allowed to play, but I take no responsibility")
}
else
{
    console.log("Play On!")
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
// The story begins..
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
// Section for a user to make a choice.
var userAnswer = prompt("Do you want to race Bieber on stage?");
// code to determine what happens depending on the users response
if (userAnswer === "yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

// Code to trigger feedback
var feedback = prompt("What do you think? Rate this game out of 10.");
if (8 < feedback)
{
    console.log("Thank you! We should race at the next concert!")
}
else
{
    console.log("I'll keep practicing coding and racing")
}
