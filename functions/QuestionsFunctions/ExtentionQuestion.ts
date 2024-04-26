import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js"


export default async function chooseExtentionQuestion(choices: UserChoicesType) {

    const question = await inquirer.prompt({
        name: "TypeScript or JavaScript Component?",
        type: "list",
        choices: ["jsx", "tsx"],
        prefix: "Choose javascript(.jsx) or typscript(.tsx) component \n",
        default() {
            return "jsx"
        }
    })


    choices.generalChocies.extention = question["TypeScript or JavaScript Component?"]


}