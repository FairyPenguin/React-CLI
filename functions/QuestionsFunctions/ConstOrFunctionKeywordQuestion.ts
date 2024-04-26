import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js"

export default async function ConstOrFunctionKeywordQuestion(choices: UserChoicesType) {
    const question = await inquirer.prompt({
        name: "Function Keyword or Const to Define the Component?",
        type: "list",
        choices: ["Function Keyword", "Const"],
        prefix: "Function Keyword(Function Component()) or Const(const Component = ()=>) component \n",
        default() {
            return "Function Keyword(Function Component()"
        }

    })

    choices.generalChocies.constOrFunctionKeyword = question["Function Keyword or Const to Define the Component?"]
}
