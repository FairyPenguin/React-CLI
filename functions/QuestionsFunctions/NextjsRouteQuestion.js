import inquirer from "inquirer"

export default async function NextjsRouteQuestion(choices) {
    const question = await inquirer.prompt({
        name: "Create Nextjs Route or Regular React Component?",
        type: "list",
        choices: ["Regular React Component", "Nextjs Route"],
        prefix: "This choice will create a Nextjs App-router Route(folder contains page.jsx or page.tsx |\n Or a Regular React Component. ) \n",

    })

    choices.nextjsRouteOrRegularRecactComponent = question["Create Nextjs Route or Regular React Component?"]
}
