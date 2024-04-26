import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js"

export default async function cssFileQuestion(choices: UserChoicesType) {
    const question = await inquirer.prompt({
        name: "Create a CSS File?",
        type: "list",
        choices: ["Yes", "No"],
        // default() {
        //     return "jsx"
        // }
    })

    choices.generalChocies.cssFile = question["Create a CSS File?"]
}
