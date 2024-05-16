import chalk from "chalk";
import { UserChoicesType } from "../Data/UserChoices.js";


export default function printUserChoices(choices: UserChoicesType) {

    const choicesMessage = chalk.whiteBright.bgCyanBright.bold("\n Your choices:")

    const printedUserChoices = {

        // General choices 
        "generalChoices": {
            "✳️JavaScript or TypeScript Component?:": `${choices.generalChocies.extention}`,
            "✳️Function Keyword or Const to Define the Component?:": `${choices.generalChocies.constOrFunctionKeyword}`,
            "✳️Create CSS File?:": `${choices.generalChocies.cssFile}`,
        },

        // React choices 
        "reactComponentChoices": {
            "✳️Single Component File or Folder with component files nested?:": ` ${choices.regularComponentsChoices.folderOrFile}`,
            "✳️Nested Sub-Components Folder?:": ` ${choices.regularComponentsChoices.nestedSubComponentsFolder}`,
            "✳️Component Name?:": ` ${choices.regularComponentsChoices.componentName}`,
        },

        // Nextjs choices 
        "nextjsRouteChoices": {
            "✳️Nextjs Route Name?:": ` ${choices.nextjsChoices.nextjsRouteName}`,
            "✳️Create a Nested Components Folder For the Route?:": ` ${choices.nextjsChoices.nextjsNestedComponentsFolder}`
        },
    }

    // Choices Array
    let choicesToBePrinted = []

    // General Choices
    const printedGeneralChoices = printedUserChoices.generalChoices


    if (choices.generalChocies.nextjsRouteOrRegularRecactComponent === "Nextjs Route") {

        const printedNextjsRouteChoices = printedUserChoices.nextjsRouteChoices


        for (const choice in printedNextjsRouteChoices) {

            choicesToBePrinted.push(`${choice} ${chalk.yellow.bold.italic(`${printedNextjsRouteChoices[choice]}`)}`)

        }

        for (const choice in printedGeneralChoices) {

            choicesToBePrinted.push(`${choice} ${chalk.yellow.bold.italic(`${printedGeneralChoices[choice]}`)}`)
        }

        const formatted = choicesToBePrinted.map((choice) => {
            return `\n    ${choice}`
        })

        console.log(`${choicesMessage}\n ${formatted}`);


    }

    if (choices.generalChocies.nextjsRouteOrRegularRecactComponent === "Regular React Component") {


        const printedReactComponentChoices = printedUserChoices.reactComponentChoices



        for (const choice in printedReactComponentChoices) {

            choicesToBePrinted.push(`${choice} ${chalk.yellow.bold.italic(`${printedReactComponentChoices[choice]}`)}`)

        }

        for (const choice in printedGeneralChoices) {

            choicesToBePrinted.push(`${choice} ${chalk.yellow.bold.italic(`${printedGeneralChoices[choice]}`)}`)
        }

        const formatted = choicesToBePrinted.map((choice) => {
            return `\n    ${choice}`
        })

        console.log(`${choicesMessage}\n ${formatted}`);


    }




}


