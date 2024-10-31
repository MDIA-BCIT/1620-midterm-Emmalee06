/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

let password = "Unicorns";

function passwordCheck(input, password) {
    if (input === password) {
        console.log("Access Granted!");
    } else if (input !== password) {
        console.log("Access Denied!");
    }
}
passwordCheck("Unicorns", password);
passwordCheck("Ponies", password);

//My thought process:
//To ensure I got the correct console log outs for correct and incorrect passwords, I utilized two "plates" (input, password)
//with the let declaration to delcare whether it was the right or wrong password. If the food on the plate is the correct order,
// then it will output as "Access Granted" because the let variable (food) is the exact as the inputed password (ordered food).
// If the user inputs were incorrect (or the food came out wrong), the output should show as "accesss denied", because it was not what I ordered.
//However, something has gone wrong in my code because whenever I try to output a different variable such as "reset" or "forgot", the console log repeats what I have originally outputed
//Because of this, I could not properly code the reset or forgot inputs or do the challenge.
