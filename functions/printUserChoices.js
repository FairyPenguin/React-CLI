import chalk from "chalk";


export default function printUserChoices(choices) {

    const choicesMessage = chalk.whiteBright.bgCyanBright.bold("\n Your choices:")

    const userChoices = `
    ✳️Single Component File or Folder with component files nested?: ${choices.folderOrFile}
    ✳️Nested Sub-Components Folder?: ${choices.nestedSubComponentsFolder}
    ✳️Component Name?: ${choices.componentName}
    ✳️JavaScript or TypeScript Component?: ${choices.extention}
    ✳️Function Keyword or Const to Define the Component?: ${choices.constOrFunctionKeyword}
    ✳️Create CSS File?: ${choices.cssFile}
    `
    console.log(`${choicesMessage}\n ${userChoices}`);
}


