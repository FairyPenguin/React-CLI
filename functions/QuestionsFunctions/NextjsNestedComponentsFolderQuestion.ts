import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js"

export default async function NextjsNestedComponentsFolderQuestion(choices: UserChoicesType) {
    const question = await inquirer.prompt({
        name: "Create a Nested Components Folder For the Route?",
        type: "list",
        choices: ["Yes", "No"],
        prefix: "This choice will create a nested components folder inside your route folder,besides the page.jsx/page.tsx File \n",
        default() {
            return "Yes"
        }

    })

    choices.nextjsChoices.nextjsNestedComponentsFolder = question["Create a Nested Components Folder For the Route?"]
}
