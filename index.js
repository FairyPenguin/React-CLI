#!/usr/bin/env node


// IMPORTS ======> //

import { userChoices } from "./Data/UserChoices.js"
import welcomePrompt from "./functions/welcomePrompt.js";
import waitingPeriod from "./functions/waitingPeriod.js"
import { compareVersion } from "./functions/compareVersions.js";
import versionArgument from "./functions/Arguments/versionArgument.js";
import printUserChoices from "./functions/printUserChoices.js"
import folderOrFileQuestion from "./functions/QuestionsFunctions/FileOrFolderQuestion.js";
import chooseExtentionQuestion from "./functions/QuestionsFunctions/ExtentionQuestion.js"
import componentNameQuestion from "./functions/QuestionsFunctions/ComponentNameQuestion.js"
import cssFileQuestion from "./functions/QuestionsFunctions/CSSFileQuestion.js"
import createFilesAndFolders from "./functions/createFilesAndFolders.js"
import addFramedRectangle from "./functions/createRectangleFrame.js"
import ConstOrFunctionKeywordQuestion from "./functions/QuestionsFunctions/ConstOrFunctionKeywordQuestion.js"
// <====== //

// <====== 

// console.log(userChoices);

// Argumentss Functions List

versionArgument(compareVersion)


async function askForNextjsRoute() {

    const question = await inquirer.prompt({
        name: "Create CSS File",
        type: "list",
        choices: ["Yes", "No"],

    })

}
// let userChoices = {
//     "folderOrFile": "",
//     "componentName": "",
//     "extention": "",
//     "cssFile": ""
// };

process.on('SIGINT', () => {
    console.log('Caught interrupt signal (Ctrl+C). Exiting...');
    // Perform any cleanup actions here (e.g., close file handles)
    process.exit(0); // Exit the program gracefully
});





async function main() {

    try {

        process.on('SIGINT', () => {
            console.log('Caught interrupt signal (Ctrl+C). Exiting...');
            // Perform any cleanup actions here (e.g., close file handles)
            process.exit(0); // Exit the program gracefully
        });

        await welcomePrompt(waitingPeriod, compareVersion)

        await folderOrFileQuestion(userChoices)

        await chooseExtentionQuestion(userChoices)

        await ConstOrFunctionKeywordQuestion(userChoices)

        await componentNameQuestion(userChoices)

        await cssFileQuestion(userChoices)

        await createFilesAndFolders(userChoices, waitingPeriod, addFramedRectangle)

        // await creationStatus(createFilesAndFolders())

        printUserChoices(userChoices)

    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}

main()

