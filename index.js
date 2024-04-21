#!/usr/bin/env node


// IMPORTS ======> //
import chalk from "chalk";
import chalkAnimaion from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer"
import { input } from '@inquirer/prompts';
import fs from "fs"
import path from "path";
// import fspromise from "fs/promises"
// <====== //

import mustache from "mustache";
// <====== 


const msg = `Welcome,\n React CLI 🧪
This is the start-----------------------------------
`

// figlet.text(msg, {

//     font: "Banner3",

//     // horizontalLayout: "default",
//     // verticalLayout: "default",
//     width: 80,
//     // whitespaceBreak: true,

// }, (err, data) => {

//     console.log(gradient.cristal.multiline(data));
// })

const msg2 = "Welcome, React CLI\n"



// const fontsList = figlet.fonts(function (err, fonts) {
//     if (err) {
//         console.log("something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.dir(fonts);
// });

// console.log(fontsList);


let choices = {
    "folderOrFile": "",
    "name": "",
    "extention": "",
    "cssFile": ""
};

const wait = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

async function welcome() {


    await wait()
    console.log(gradient.cristal.multiline(msg2));


    // messageText.stop()

}

await welcome()

async function askForFolderOrFile() {

    const question = await inquirer.prompt({
        name: "Single Component File or Folder with component files nested",
        type: "rawlist",
        // message: "Choose if you want to create the component as a seperate file or inside a folder",
        choices: ["Single Component File 🗋", "Folder/Component File 🗀"],
        prefix: "Choose if you want to create the component as a seperate file or inside a folder\n"

    })

    choices.folderOrFile = question["File or Folder"]


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

    choices.name = question["Component Name"]

}

async function getFileExtention() {

    const question = await inquirer.prompt({
        name: "Choosed Extention",
        type: "rawlist",
        choices: ["jsx", "tsx"],
        default() {
            return "jsx"
        }
    })


    choices.extention = question["Choosed Extention"]


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


    const folderPath = path.join("./", `${choices.name}`);

    const componentFilePath = path.join(`${folderPath}/`, `${choices.name}.${choices.extention}`);

    const cssFilePath = path.join(`${folderPath}/`, `${choices.name}.module.css`);


    const template = fs.readFileSync('./template.txt', 'utf8');

    const data = {
        title: choices.name,
        content: `${choices.name} Component, Generated via React-CLI`,
        cssFileRelativePath: `${choices.name}.module.css`
    }

    const output = mustache.render(template, data)


    try {
        fs.mkdirSync(folderPath);
        fs.writeFileSync(componentFilePath, output);
        // fs.writeFileSync(filerPath, output);
        // console.log(fileContent);
        if (choices.cssFile === "Yes") {
            fs.writeFileSync(cssFilePath, "/* CSS Module */")
        }

        console.log('Folder and file created successfully!');
    } catch (err) {
        console.error('Error creating folder or file:', err);
    }

}

await askForFolderOrFile()

await getFileExtention()

await getFileAndFolderName()

await getCssFileName()

await createFilesAndFolders()

console.log(gradient.pastel('Your component files created successfully 🔮'))

console.log(choices.folderOrFile);
console.log(choices.name);
console.log(choices.extention);
console.log(choices.cssFile);
