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

    }

    // Choices Array
    let choicesToBePrinted = []

    if (choices.generalChocies.nextjsRouteOrRegularRecactComponent === "Nextjs Route") {

        const userChoices = `

        ✳️Nextjs Route Name: ${choices.nextjsChoices.nextjsRouteName}
        ✳️Create a Nested Components Folder For the Route?: ${choices.nextjsChoices.nextjsNestedComponentsFolder}
        ✳️JavaScript or TypeScript Component?: ${choices.generalChocies.extention}
        ✳️Function Keyword or Const to Define the Component?: ${choices.generalChocies.constOrFunctionKeyword}
        ✳️Create CSS File?: ${choices.generalChocies.cssFile}
        `
        console.log(`${choicesMessage}\n ${userChoices}`);

    }

    if (choices.generalChocies.nextjsRouteOrRegularRecactComponent === "Regular React Component") {


        const printedReactComponentChoices = printedUserChoices.reactComponentChoices

        const printedGeneralChoices = printedUserChoices.generalChoices


        for (const choice in printedReactComponentChoices) {

            choicesToBePrinted.push(`${choice} ${chalk.yellow.bold.italic(`${printedReactComponentChoices[choice]}`)}`)

        }

        for (const choice in printedGeneralChoices) {

            choicesToBePrinted.push(`${choice} ${chalk.yellow.bold.italic(`${printedGeneralChoices[choice]}`)}`)
        }

        const formatted = choicesToBePrinted.map((choice) => {
            return `\n${choice}`
        })

        console.log(`${choicesMessage}\n ${formatted}`);


    }




}


