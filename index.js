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
import creationStatus from "./functions/creationStatus.js"
import createFilesAndFolders from "./functions/createFilesAndFolders.js"
import addFramedRectangle from "./functions/createRectangleFrame.js"

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






await welcomePrompt(waitingPeriod, compareVersion)

await folderOrFileQuestion(userChoices)

await chooseExtentionQuestion(userChoices)

await componentNameQuestion(userChoices)

await cssFileQuestion(userChoices)

await createFilesAndFolders(userChoices, waitingPeriod, addFramedRectangle)

// await creationStatus(createFilesAndFolders())

printUserChoices(userChoices)



