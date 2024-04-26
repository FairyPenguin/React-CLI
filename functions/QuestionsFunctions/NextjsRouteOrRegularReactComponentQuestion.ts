import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js"

export default async function NextjsRouteOrRegularReactComponentQuestion(choices: UserChoicesType) {
    const question = await inquirer.prompt({
        name: "Create Nextjs Route or Regular React Component?",
        type: "list",
        choices: ["Regular React Component", "Nextjs Route"],
        prefix: "This choice will create a Nextjs App-router Route(folder contains page.jsx or page.tsx Or a Regular React Component). \n",

    })

    choices.generalChocies.nextjsRouteOrRegularRecactComponent = question["Create Nextjs Route or Regular React Component?"]
}
