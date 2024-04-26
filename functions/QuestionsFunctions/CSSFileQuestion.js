import inquirer from "inquirer"

export default async function cssFileQuestion(choices) {
    const question = await inquirer.prompt({
        name: "Create a CSS File?",
        type: "list",
        choices: ["Yes", "No"],
        // default() {
        //     return "jsx"
        // }
    })

    choices.cssFile = question["Create a CSS File?"]
}
