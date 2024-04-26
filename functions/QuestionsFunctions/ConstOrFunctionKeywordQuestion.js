import inquirer from "inquirer"

export default async function ConstOrFunctionKeywordQuestion(choices) {
    const question = await inquirer.prompt({
        name: "Function Keyword or Const to Define the Component?",
        type: "list",
        choices: ["Function Keyword", "Const"],
        prefix: "Function Keyword(Function Component()) or Const(const Component = ()=>) component \n",
        default() {
            return "Function Keyword(Function Component()"
        }

    })

    choices.constOrFunctionKeyword = question["Function Keyword or Const to Define the Component?"]
}
