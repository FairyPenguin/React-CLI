import inquirer from "inquirer"
import NestedSubComponentsFolderQuestion from "./NestedSub-ComponentsFolderQuestion.js"

export default async function folderOrFileQuestion(choices) {

    try {

        const question = await inquirer.prompt({
            name: "Single Component File or Folder with component files nested",
            type: "list",
            // message: "Choose if you want to create the component as a seperate file or inside a folder",
            choices: ["Single Component File 📄", "Folder/Component File 📁"],
            prefix: "Choose if you want to create the component as a seperate file or inside a folder\n"

        })

        choices.folderOrFile = question["Single Component File or Folder with component files nested"]

        if (choices.folderOrFile === "Folder/Component File 📁") {
            await NestedSubComponentsFolderQuestion(choices)
        }

    } catch (error) {

        console.error(`Error:${error.message}`)
    }

}