#!/usr/bin / env node

// IMPORTS ======> //
import chalk from "chalk";
import chalkAnimaion from "chalk-animation";
import figlet from "figlet";
import gradirnt from "gradient-string";
import inquirer from "inquirer"
import { input } from '@inquirer/prompts';
import fs from "fs"
import path from "path";
// import Button from "./src/Button.jsx";
// import fspromise from "fs/promises"
// <====== //
import React from "react";
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import mustache from "mustache";



// React.jsx = React.jsx || function () { return this._jsx; };

// const Button2 = () => <button>Click me</button>;

// const reactHtml = renderToString(<Button />);

// console.log(reactHtml);

const msg = `Welcome\n to\n React CLI`
figlet(msg, (err, data) => {

    console.log(gradirnt.cristal.multiline(data));
})

let choices = {
    "folderOrFile": "",
    "name": "",
    "extention": ""
};

const wait = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

async function welcome() {


    await wait()

    // messageText.stop()

}

await welcome()

async function askForFolderOrFile() {

    const question = await inquirer.prompt({
        name: "File or Folder",
        type: "rawlist",
        // message: "Choose if you want to create the component as a seperate file or inside a folder",
        choices: ["Single File", "Folder/File"],
        prefix: "Choose if you want to create the component as a seperate file or inside a folder"

    })

    choices.folderOrFile = question["File or Folder"]


}

async function getFileAndFolderName() {

    const question = await inquirer.prompt({
        name: "Component Name",
        type: "input",
        default() {
            return "React CLI Component"
        }
    })

    choices.name = question["Component Name"]

}

async function getFileExtention() {

    const question = await inquirer.prompt({
        name: "Choosed Extention",
        type: "rawlist",
        choices: [".jsx", ".tsx"],
        default() {
            return "jsx"
        }
    })

    choices.extention = question["Choosed Extention"]

}


async function createFilesAndFolders() {

    // const currentDir = __dirname

    const folderPath = path.join("./", `${choices.name}`);
    const filerPath = path.join(`${folderPath}/`, `${choices.name}.${choices.extention}`);

    const templateFilePath = path.join("./template.txt")
    const fileContent = fs.readFileSync(templateFilePath, "utf-8")

    const name = "Mahmoud"
    const variable = fileContent.replace("Component", name)

    const template = fs.readFileSync('./template.jsx', 'utf8');

    const data = {
        title: 'Hello, from Reactjs!',
        content: 'This is some dynamic content.'
    }

    const output = mustache.render(template, data)
    // console.log(fileContent);

    try {
        fs.mkdirSync(folderPath);
        // fs.writeFileSync(filerPath, variable);
        fs.writeFileSync(filerPath, output);
        // console.log(fileContent);

        console.log('Folder and file created successfully!');
    } catch (err) {
        console.error('Error creating folder or file:', err);
    }

}

await askForFolderOrFile()

await getFileExtention()

await getFileAndFolderName()

await createFilesAndFolders()



console.log(choices.folderOrFile);
console.log(choices.name);
console.log(choices.extention);