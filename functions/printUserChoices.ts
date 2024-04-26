import chalk from "chalk";
import { UserChoicesType } from "../Data/UserChoices.js";

const userChoices = {

    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

const printedUserChoicesArray = [

]


export default function printUserChoices(choices: UserChoicesType) {

    const choicesMessage = chalk.whiteBright.bgCyanBright.bold("\n Your choices:")

    if (userChoices.nextjsRouteOrRegularRecactComponent === userChoices.nextjsRouteOrRegularRecactComponent === "Nextjs Route") {

        const userChoices = `
        ✳️JavaScript or TypeScript Component?: ${choices.extention}
        ✳️Function Keyword or Const to Define the Component?: ${choices.constOrFunctionKeyword}
        ✳️Create CSS File?: ${choices.cssFile}
        `
        console.log(`${choicesMessage}\n ${userChoices}`);

    }

    if (userChoices.nextjsRouteOrRegularRecactComponent === "Regular React Component") {

        const choices = `        
        ✳️Single Component File or Folder with component files nested?: ${choices.folderOrFile}
        ✳️Nested Sub-Components Folder?: ${choices.nestedSubComponentsFolder}
        ✳️Component Name?: ${choices.componentName}
`

    }


}


