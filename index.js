#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("Welcome to code with Muhammad Umar Bin Aamir designed CLI based number guessing game"));
//1)Computer will generate a random number.
//2)User input for guessing number.
//3)Compare user input with computer generated number and show result.
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: chalk.greenBright("Please Enter Your Guess Number with in Limit (1-6):"),
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log(chalk.blue("Congratulations! You Guessed a Correct Number."));
}
else {
    console.log(chalk.red("Sorry! You Guessed a Wrong number"));
}
