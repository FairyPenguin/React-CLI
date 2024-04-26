import inquirer from "inquirer"

export default async function NestedSubComponentsFolderQuestion(choices) {
    const question = await inquirer.prompt({
        name: "Create a Nested Sub-Components Folder?",
        type: "list",
        choices: ["Yes", "No"],
        prefix: "This choice will create a nested folder inside your component folder,in case your component is complex and depends on other sub-components \n",
        default() {
            return "No"
        }

    })

    choices.nestedSubComponentsFolder = question["Create a Nested Sub-Components Folder?"]
}
