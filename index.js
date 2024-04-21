#!/usr/bin/env node


// IMPORTS ======> //
import chalk from "chalk";
import chalkAnimaion from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer"
import { createSpinner } from 'nanospinner';
import { input } from '@inquirer/prompts';
import fs from "fs"
import path from "path";
// import fspromise from "fs/promises"
// <====== //

import mustache from "mustache";
// <====== 



// figlet.text(msg, {

//     font: "Banner3",

//     // horizontalLayout: "default",
//     // verticalLayout: "default",
//     width: 80,
//     // whitespaceBreak: true,

// }, (err, data) => {

//     console.log(gradient.cristal.multiline(data));
// })

const msg2 = chalk.cyanBright.bold.underline("Welcome, React CLI 🧪\n")



// const fontsList = figlet.fonts(function (err, fonts) {
//     if (err) {
//         console.log("something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.dir(fonts);
// });

// console.log(fontsList);

const spacer = console.log(" \n "); // space for an empty line

let choices = {
    "folderOrFile": "",
    "componentName": "",
    "extention": "",
    "cssFile": ""
};

function printUserChoices() {

    console.log(chalk.whiteBright.bgCyanBright.bold("\n Your choices:"));
    for (const choice in choices) {
        // console.log(`✳️${choice}: ${choices[choice]}`);

        // console.log(`
        // ✳️Single Component File or Folder with component files nested?: ${choices.folderOrFile}
        // ✳️Component Name?: ${choices.componentName}
        // ✳️Create CSS File?: ${choices.cssFile}
        // ✳️JavaScript or TypeScript Component?: ${choices.extention}
        // `);


    }

    const userChoices = `
    ✳️Single Component File or Folder with component files nested?: ${choices.folderOrFile}
    ✳️Component Name?: ${choices.componentName}
    ✳️Create CSS File?: ${choices.cssFile}
    ✳️JavaScript or TypeScript Component?: ${choices.extention}
    `
    console.log(userChoices);
    return userChoices
}


const waitingPeriod = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

async function welcome() {


    // await wait()
    console.log(msg2);


    // messageText.stop()

}

await welcome()

async function askForFolderOrFile() {

    const question = await inquirer.prompt({
        name: "Single Component File or Folder with component files nested",
        type: "rawlist",
        // message: "Choose if you want to create the component as a seperate file or inside a folder",
        choices: ["Single Component File 📄", "Folder/Component File 📁"],
        prefix: "Choose if you want to create the component as a seperate file or inside a folder\n"

    })

    choices.folderOrFile = question["Single Component File or Folder with component files nested"]


}

async function getFileAndFolderName() {

    const question = await inquirer.prompt({
        name: "Component Name",
        type: "input",
        validate: (input) => {
            const allowedCharacters = /^[a-zA-Z0-9_]+$/;
            if (input.match(allowedCharacters)) {
                return true;
            }
            return `'Only alphanumeric characters and underscores are allowed.'
          
☑️ Letters (a-z, A-Z)
☑️ Numbers (0-9)
☑️ Underscore (_)

Do 👇    
➜ Button ✅  UserProfile ✅ ShoppingCart ✅ ButtonWithAnimation ✅

Don't 👇
➜ Animated  Button ❌ user+profile% ❌ shop9ing Cart; ❌

            `;
        },
        default() {
            return "MagicButton"
        }
    })

    choices.componentName = question["Component Name"]

}

async function getFileExtention() {

    const question = await inquirer.prompt({
        name: "TypeScript or JavaScript Component?",
        type: "rawlist",
        choices: ["jsx", "tsx"],
        prefix: "Choose javascript(.jsx) or typscript(.tsx) component \n",
        default() {
            return "jsx"
        }
    })


    choices.extention = question["TypeScript or JavaScript Component?"]


}

async function getCssFileName() {
    const question = await inquirer.prompt({
        name: "Create CSS File",
        type: "list",
        choices: ["Yes", "No"],
        // default() {
        //     return "jsx"
        // }
    })

    choices.cssFile = question["Create CSS File"]
}


async function askForNextjsRoute() {

    const question = await inquirer.prompt({
        name: "Create CSS File",
        type: "list",
        choices: ["Yes", "No"],

    })

}


async function createFilesAndFolders() {


    const folderPath = path.join("./", `${choices.componentName}`);

    const componentFilePath = path.join(`${folderPath}/`, `${choices.componentName}.${choices.extention}`);

    const cssFilePath = path.join(`${folderPath}/`, `${choices.componentName}.module.css`);


    const template = fs.readFileSync('./template.txt', 'utf8');

    const data = {
        title: choices.componentName,
        content: `${choices.componentName} Component, Generated via React-CLI`,
        cssFileRelativePath: `${choices.componentName}.module.css`
    }

    const output = mustache.render(template, data)


    const spinner = createSpinner("\n No magic is happening🔮, just a function executing code to generate your files/folders in the file-system 🚦").start()

    await waitingPeriod()

    try {
        fs.mkdirSync(folderPath);
        fs.writeFileSync(componentFilePath, output);
        // fs.writeFileSync(filerPath, output);
        // console.log(fileContent);
        if (choices.cssFile === "Yes") {
            fs.writeFileSync(cssFilePath, "/* CSS Module */")
        }

        // "No magic is happening🔮, just a function executing code to generate your files/folders in the filesystem 🚦"

        spinner.success(chalk.bold(gradient.pastel(`
        // '🟢 Your component ${choices.componentName} files created successfully  ✅'`)))

        // console.log(chalk.bold(gradient.pastel(`
        // '🟢 Your component ${choices.componentName} files created successfully  ✅'`)))

    } catch (err) {
        console.error("\n ❌ Creating component Failed:", err);

    }

}



await askForFolderOrFile()

await getFileExtention()

await getFileAndFolderName()

await getCssFileName()

await createFilesAndFolders()

spacer


spacer

printUserChoices()