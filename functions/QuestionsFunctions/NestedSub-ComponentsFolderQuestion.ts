import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js"

export default async function NestedSubComponentsFolderQuestion(choices: UserChoicesType) {
    const question = await inquirer.prompt({
        name: "Create a Nested Sub-Components Folder?",
        type: "list",
        choices: ["Yes", "No"],
        prefix: "This choice will create a nested folder inside your component folder,in case your component is complex and depends on other sub-components \n",
        default() {
            return "No"
        }

    })

    choices.regularComponentsChoices.nestedSubComponentsFolder = question["Create a Nested Sub-Components Folder?"]
}
