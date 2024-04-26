import chalk from "chalk";
import { UserChoicesType } from "../Data/UserChoices.js";


export default function printUserChoices(choices: UserChoicesType) {

    const choicesMessage = chalk.whiteBright.bgCyanBright.bold("\n Your choices:")

    if (choices.generalChocies.nextjsRouteOrRegularRecactComponent === "Nextjs Route") {

        const userChoices = `
        ✳️JavaScript or TypeScript Component?: ${choices.generalChocies.extention}
        ✳️Function Keyword or Const to Define the Component?: ${choices.generalChocies.constOrFunctionKeyword}
        ✳️Create CSS File?: ${choices.generalChocies.cssFile}
        `
        console.log(`${choicesMessage}\n ${userChoices}`);

    }

    if (choices.generalChocies.nextjsRouteOrRegularRecactComponent === "Regular React Component") {

        const userChoices = `        
        ✳️Single Component File or Folder with component files nested?: ${choices.regularComponentsChoices.folderOrFile}
        ✳️Nested Sub-Components Folder?: ${choices.regularComponentsChoices.nestedSubComponentsFolder}
        ✳️Component Name?: ${choices.regularComponentsChoices.componentName}
` }
}


