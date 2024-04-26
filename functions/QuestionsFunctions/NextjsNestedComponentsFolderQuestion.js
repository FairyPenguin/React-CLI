import inquirer from "inquirer"

export default async function NextjsNestedComponentsFolderQuestion(choices) {
    const question = await inquirer.prompt({
        name: "Create a Nested Components Folder For the Route?",
        type: "list",
        choices: ["Yes", "No"],
        prefix: "This choice will create a nested components folder inside your route folder,besides the page.jsx/page.tsx File \n",
        default() {
            return "Yes"
        }

    })

    choices.nextjsNestedComponentsFolder = question["Create a Nested Components Folder For the Route?"]
}
