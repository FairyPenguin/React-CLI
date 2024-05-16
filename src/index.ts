#!/usr/bin/env node

// IMPORTS ======> //
import userChoices from "../Data/UserChoices.js"
import welcomePrompt from "../functions/welcomePrompt.js";
import waitingPeriod from "../functions/waitingPeriod.js"
import { compareVersion } from "../functions/compareVersions.js";
import versionArgument from "../functions/Arguments/versionArgument.js";
import printUserChoices from "../functions/printUserChoices.js"
import folderOrFileQuestion from "../functions/QuestionsFunctions/FileOrFolderQuestion.js";
import chooseExtentionQuestion from "../functions/QuestionsFunctions/ExtentionQuestion.js"
import componentNameQuestion from "../functions/QuestionsFunctions/ComponentNameQuestion.js"
import cssFileQuestion from "../functions/QuestionsFunctions/CSSFileQuestion.js"
import createFilesAndFolders from "../functions/createFilesAndFolders.js"
import addFramedRectangle from "../functions/createRectangleFrame.js"
import ConstOrFunctionKeywordQuestion from "../functions/QuestionsFunctions/ConstOrFunctionKeywordQuestion.js"
import NextjsRouteQuestion from "../functions/QuestionsFunctions/NextjsRouteOrRegularReactComponentQuestion.js";
import NextjsNestedComponentsFolderQuestion from "../functions/QuestionsFunctions/NextjsNestedComponentsFolderQuestion.js";
import NextjsRouteOrRegularReactComponentQuestion from "../functions/QuestionsFunctions/NextjsRouteOrRegularReactComponentQuestion.js";
import createFilesAndFoldersForNextjs from "../functions/QuestionsFunctions/CreationFunctions/CreateFoldersAndFilesNext.js"
import NextjsRouteNameQuestion from "../functions/QuestionsFunctions/NextjsRouteNameQuestion.js"
// <====== //



// Argumentss Functions List

await versionArgument(compareVersion)




async function main() {

    try {

        process.on('SIGINT', () => {
            console.log('Caught interrupt signal (Ctrl+C). Exiting...');
            // Perform any cleanup actions here (e.g., close file handles)
            process.exit(0); // Exit the program gracefully
        });


        await welcomePrompt(waitingPeriod, compareVersion)

        await NextjsRouteQuestion(userChoices)



        if (userChoices.generalChocies.nextjsRouteOrRegularRecactComponent === "Nextjs Route") {

            await NextjsRouteNameQuestion(userChoices)

            await NextjsNestedComponentsFolderQuestion(userChoices)
        }

        if (userChoices.generalChocies.nextjsRouteOrRegularRecactComponent === "Regular React Component") {

            //single file or folder with file nested
            await folderOrFileQuestion(userChoices)
            //component name 
            await componentNameQuestion(userChoices)

        }


        // general Questions for all scenarios //
        await chooseExtentionQuestion(userChoices)

        await ConstOrFunctionKeywordQuestion(userChoices)

        await cssFileQuestion(userChoices)

        // React
        if (userChoices.generalChocies.nextjsRouteOrRegularRecactComponent === "Regular React Component") {
            await createFilesAndFolders(userChoices, waitingPeriod, addFramedRectangle)
        }

        // Next
        if (userChoices.generalChocies.nextjsRouteOrRegularRecactComponent === "Nextjs Route") {

            await createFilesAndFoldersForNextjs(userChoices, waitingPeriod, addFramedRectangle)

        }


        printUserChoices(userChoices)

    } catch (error) {

        console.error(error);

        process.exit(1);
    }

}

main()

