// Imports --------->
import { createSpinner } from 'nanospinner';
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
import mustache from "mustache";
import chalk from "chalk";
import gradient from "gradient-string";
import { UserChoicesType } from '../../Data/UserChoices.js';

//--------->


const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)


export default async function createFilesAndFolders(choices: UserChoicesType, waitingPeriod: (ms?: number) => Promise<unknown>, addFramedRectangle: { (text: string): string; (arg0: string): any; }) {



    const spinner = createSpinner(chalk.bgBlack.yellowBright.bold("\n No magic is happening 🔮, just a function executing code ⚙️ to generate your files and folders in the file system🚦.")).start()

    await waitingPeriod()


    try {

        if (choices.regularComponentsChoices) {
            // React Component path 

            const regularReactComponentFolderPath = path.join("./", `${choices.regularComponentsChoices.componentName}`);

            const regularReactComponentSingleFilePath = path.join("./", `${choices.regularComponentsChoices.componentName}.${choices.generalChocies.extention}`);

            // React Component file path

            const reactComponentFilePath = path.join(`${regularReactComponentFolderPath}/`, `${choices.regularComponentsChoices.componentName}.${choices.generalChocies.extention}`);


            // React Component  CSS file path

            const reactComponentCSSFilePath = path.join(`${regularReactComponentFolderPath}/`, `${choices.regularComponentsChoices.componentName}.module.css`);

            const reactComponentSingleFileCSSFilePath = path.join("./", `${choices.regularComponentsChoices.componentName}.module.css`);


            // Template files

            // Function Keyword tempalte

            const functionKeywordTemplatePath = path.join(__dirname, "../../../templates/FunctionKeywordTemplate.txt")

            const functionKeywordTemplate = fs.readFileSync(functionKeywordTemplatePath, 'utf8');

            // Const  tempalte

            // const constTemplatePath = path.join(__dirname, "../../../templates/ConstTemplate.txt")

            // const constTemplate = fs.readFileSync(constTemplatePath, 'utf8');


            const reactComponentData = {
                title: choices.regularComponentsChoices.componentName,
                content: `${choices.regularComponentsChoices.componentName} Component, Generated via React-Outil`,
                cssFileRelativePath: `${choices.regularComponentsChoices.componentName}.module.css`
            }



            const reactComponentFunctionKeywordOutput = mustache.render(functionKeywordTemplate, reactComponentData)

            // const reactComponentConstOutput = mustache.render(constTemplate, reactComponentData)

            if (choices.generalChocies.nextjsRouteOrRegularRecactComponent === "Regular React Component") {



                if (choices.regularComponentsChoices.folderOrFile === "Single Component File 📄") {

                    fs.writeFileSync(regularReactComponentSingleFilePath, reactComponentFunctionKeywordOutput);

                    fs.writeFileSync(reactComponentSingleFileCSSFilePath, "/* CSS Module */")
                }


                if (choices.regularComponentsChoices.folderOrFile === "Folder/Component File 📁") {

                    fs.mkdirSync(regularReactComponentFolderPath);
                    fs.writeFileSync(reactComponentFilePath, reactComponentFunctionKeywordOutput);

                    if (choices.regularComponentsChoices.nestedSubComponentsFolder === "Yes") {

                        const regularNestedReactComponentFolderPath = path.join(`${regularReactComponentFolderPath}/`, `${choices.regularComponentsChoices.componentName}Components`);

                        fs.mkdirSync(regularNestedReactComponentFolderPath)
                    }

                    if (choices.generalChocies.cssFile === "Yes") {
                        fs.writeFileSync(reactComponentCSSFilePath, "/* CSS Module */")
                    }
                }

                spinner.success({
                    text: chalk.bold(gradient.pastel(`
                '🟢 Your component ⚜️ ${choices.regularComponentsChoices.componentName} ⚜️ files created successfully  ✅'`))
                })





            }

        }



    } catch (error) {

        spinner.error({ text: "\n ❌ Failed to create your component ⚠️Check the error message and error explanation below 👇.\n" })

        if (error.code === "EEXIST" && error.errno === -17) {

            const errorMessage = chalk.redBright.bold(`    🔴Error Message: "file already exists"`)

            const errorMeaning = chalk.yellow.bold(`\n
ℹ️Error Explanation:  "The file already exists": → This means the component folder or file is already 
existing in your file system, and you are trying to duplicate it with the same name, 
which causes the error.`)

            console.error(addFramedRectangle(errorMessage), errorMeaning);
        } else {
            console.error(error)

        }


    }

}