#!/usr/bin/env node


// IMPORTS ======> //
import chalk from "chalk";
// import chalkAnimaion from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer"
import { createSpinner } from 'nanospinner';
// import { input } from '@inquirer/prompts';
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
import addFramedRectangle from "./functions/createRectangleFrame.js"
import mustache from "mustache";
// <====== //

// <====== 

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const packageJsonFilePath = path.join(__dirname, "package.json")

const packageJsonFile = JSON.parse(fs.readFileSync(packageJsonFilePath, "utf-8"))

const installedVersion = packageJsonFile.version


async function latestVersionFetcher() {
    const packageLatestVersionURL = "https://registry.npmjs.org/react-outil/latest"

    try {
        const response = await fetch(packageLatestVersionURL)

        const versionData = await response.json()

        const latestVersion = versionData.version

        const latestVersionDummy = "0.0.0"

        return latestVersion

    } catch (error) {
        console.error("Error occurred while fetching the latest version:", error);

        return null;

    }
}

const lastestVersion = await latestVersionFetcher()

function compareVersion() {


    let updateStatus = ""

    const updateCommandsNote = gradient.summer(`\n 
    Use one of these commands to update:\n
🔑 npm update -g react-outil - 🔑 pnpm update -g react-outil - 🔑 yarn update -g react-outil`)

    if (installedVersion !== lastestVersion) {

        updateStatus =
            ` ${chalk.redBright.bold.underline.italic(`🔴UPDATE TO THE LATEST VERSION.`)} ${updateCommandsNote}`

    } else {

        updateStatus =
            chalk.greenBright.italic.underline.bold("✅YOU ARE USING THE LATEST VERSION.")
    }

    const versionMessage = `${gradient.fruit(`\n 🔵Installed-Version: ${installedVersion} ➡️ ⚪️Latest-Version: ${lastestVersion}`)} ${updateStatus}\n`


    console.log(versionMessage);

}


const args = process.argv.slice(2)

if (args.includes("-v") || args.includes("--v") || args.includes("--version") || args.includes("-version")) {

    compareVersion()


    process.exit(0)
}


let choices = {
    "folderOrFile": "",
    "componentName": "",
    "extention": "",
    "cssFile": ""
};

const waitingPeriod = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

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
    ✳️JavaScript or TypeScript Component?: ${choices.extention}
    ✳️Create CSS File?: ${choices.cssFile}
    `
    // console.log(userChoices);
    return userChoices
}


const welcomeMessage = `\n Welcome,  <React Outil /> 🧪 \n  \n» A CLI Tool to Generate React Components & CSS-Modules Files From the Termianl.`


async function welcome() {

    const msg2 = chalk.cyanBright.bold(welcomeMessage)



    figlet.text("< React Outil / >", {

        // font: "Whimsy",

        // horizontalLayout: "default",
        // verticalLayout: "default",
        width: 80,
        // whitespaceBreak: true,

    }, (err, data) => {

        console.log(gradient.cristal(data));
    })

    console.log(msg2);

    let updateStatus = ""

    const updateCommandsNote = gradient.summer(`\n 
    Use one of these commands to update:\n
🔑 npm update -g react-outil - 🔑 pnpm update -g react-outil - 🔑 yarn update -g react-outil`)

    if (installedVersion !== lastestVersion) {

        updateStatus =
            ` ${chalk.redBright.bold.underline.italic(`🔴UPDATE TO THE LATEST VERSION.`)} ${updateCommandsNote}`

    } else {

        updateStatus =
            chalk.greenBright.italic.underline.bold("✅YOU ARE USING THE LATEST VERSION.")
    }


    const welcomeMessageVersionNote = `${gradient.fruit(`\n 🔵Installed-Version: ${installedVersion} ➡️ Latest-Version: ${lastestVersion}`)} ${updateStatus}\n`


    await waitingPeriod(125)

    console.log(welcomeMessageVersionNote)


}


async function askForFolderOrFile() {

    const question = await inquirer.prompt({
        name: "Single Component File or Folder with component files nested",
        type: "list",
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
        type: "list",
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
        name: "Create a CSS File?",
        type: "list",
        choices: ["Yes", "No"],
        // default() {
        //     return "jsx"
        // }
    })

    choices.cssFile = question["Create a CSS File?"]
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

    const templatePath = path.join(__dirname, "template.txt")

    const template = fs.readFileSync(templatePath, 'utf8');

    const data = {
        title: choices.componentName,
        content: `${choices.componentName} Component, Generated via React-Outil`,
        cssFileRelativePath: `${choices.componentName}.module.css`
    }

    const output = mustache.render(template, data)


    const spinner = createSpinner(chalk.bgBlack.yellowBright.bold("\n No magic is happening 🔮, just a function executing code ⚙️ to generate your files and folders in the file system🚦.")).start()

    await waitingPeriod()


    try {

        fs.mkdirSync(folderPath);
        fs.writeFileSync(componentFilePath, output);
        // fs.writeFileSync(filerPath, output);
        // console.log(fileContent);
        if (choices.cssFile === "Yes") {
            fs.writeFileSync(cssFilePath, "/* CSS Module */")
        }


        spinner.success({
            text: chalk.bold(gradient.pastel(`
        '🟢 Your component ⚜️ ${choices.componentName} ⚜️ files created successfully  ✅'`))
        })


    } catch (error) {

        spinner.error({ text: "\n ❌ Failed to create your component ⚠️Check the error message and error explanation below 👇.\n" })

        if (error.code === "EEXIST" && error.errno === -17) {

            const errorMessage = chalk.redBright.bold(`    🔴Error Message: "file already exists"`)

            const errorMeaning = chalk.yellow.bold(`\n
ℹ️Error Explanation: "The file already exists." This means the component folder or file is already 
existing in your file system, and you are trying to duplicate it with the same name, 
which causes the error.`)

            console.error(addFramedRectangle(errorMessage), errorMeaning);
        }


    }

}

async function creationStatus(func) {

    const spinner = createSpinner("\n No magic is happening🔮, just a function executing code to generate your files/folders in the file-system 🚦").start()

    await waitingPeriod()

    const checkCreation = await func

    if (checkCreation) {

        spinner.success(chalk.bold(gradient.pastel(`
            '🟢 Your component ${choices.componentName} files created successfully  ✅'`)))

        const dateAndTime = new Date().toUTCString()
        console.log(dateAndTime)

    } else {

        spinner.error()

    }


    // "No magic is happening🔮, just a function executing code to generate your files/folders in the filesystem 🚦"


    // console.log(chalk.bold(gradient.pastel(`
    // '🟢 Your component ${choices.componentName} files created successfully  ✅'`)))


}

await welcome()

await askForFolderOrFile()

await getFileExtention()

await getFileAndFolderName()

await getCssFileName()

await createFilesAndFolders()

// await creationStatus(createFilesAndFolders())

console.log(`\n ${printUserChoices()}`);


