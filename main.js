#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.bold.rgb(220, 20, 60)("\t\n\t-------------WELCOME TO KULSOOM's WORDS CONVERTER----------\n\t\t"));
let wordsPara = await inquirer.prompt([
    {
        name: "paragraph",
        type: "input",
        message: chalk.italic.rgb(255, 255, 0)("write a paragraph in the space provided.: ")
    }
]);
let wordsparagraph = wordsPara.paragraph.trim().split(" ");
console.log(chalk.italic.rgb(119, 0, 200)(`\n[${wordsparagraph}]`));
console.log(chalk.bold.italic.rgb(220, 20, 60)(`\n\t\t This paragraph contains '${wordsparagraph.length}' words `));
console.log(chalk.bold.italic.rgb(255, 255, 0)("\n\t   'I am gratefull that you used my words counter'\t"));
console.log(chalk.italic.rgb(119, 0, 200)("\n\t\t   ~~~~~~~~~~ BYE ~~~~~~~~~~~\t\t"));
