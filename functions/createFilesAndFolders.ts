// Imports --------->
import { createSpinner } from 'nanospinner';
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
import mustache from "mustache";
import chalk from "chalk";
import gradient from "gradient-string";

//--------->


// const __filename = fileURLToPath(import.meta.url)

// const __dirname = path.dirname(__filename)


export default async function createFilesAndFolders(choices, waitingPeriod, addFramedRectangle) {


    const folderPath = path.join("./", `${choices.componentName}`);

    const componentFilePath = path.join(`${folderPath}/`, `${choices.componentName}.${choices.extention}`);

    const cssFilePath = path.join(`${folderPath}/`, `${choices.componentName}.module.css`);

    const templatePath = path.join("./templates", "template.txt")

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
ℹ️Error Explanation:  "The file already exists": → This means the component folder or file is already 
existing in your file system, and you are trying to duplicate it with the same name, 
which causes the error.`)

            console.error(addFramedRectangle(errorMessage), errorMeaning);
        }


    }

}