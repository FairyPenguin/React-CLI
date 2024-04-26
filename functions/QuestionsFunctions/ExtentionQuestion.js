import inquirer from "inquirer"


export default async function chooseExtentionQuestion(choices) {

    const question = await inquirer.prompt({
        name: "TypeScript or JavaScript Component?",
        type: "list",
        choices: ["jsx", "tsx"],
        prefix: "Choose javascript(.jsx) or typscript(.tsx) component \n",
        default() {
            return "jsx"
        }
    })


    choices.extention = question["TypeScript or JavaScript Component?"]


}