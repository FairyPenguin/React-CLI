import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js"

export default async function NextjsRouteOrRegularReactComponentQuestion(choices: UserChoicesType) {
    const question = await inquirer.prompt({
        name: "Create Nextjs Route or Regular React Component?",
        type: "list",
        choices: ["Regular React Component", "Nextjs Route"],
        prefix: "This choice will create a Regular React Component or Nextjs App-router Route(folder contains page.jsx/page.tsx).",

    })

    choices.generalChocies.nextjsRouteOrRegularRecactComponent = question["Create Nextjs Route or Regular React Component?"]
}
