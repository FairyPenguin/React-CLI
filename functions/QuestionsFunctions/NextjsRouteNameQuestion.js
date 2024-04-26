import inquirer from "inquirer"


export default async function NextjsRouteNameQuestion(choices) {

    const question = await inquirer.prompt({
        name: "Nextjs Route Name",
        type: "input",
        validate: (input) => {
            const allowedCharacters = /^[a-zA-Z0-9_-]+$/;
            if (input.match(allowedCharacters)) {
                return true;
            }
            return `'Only alphanumeric characters, dashs and underscores are allowed.'
          
☑️ Letters (a-z, A-Z)
☑️ Numbers (0-9)
☑️ Underscore (_)
☑️ dashs (-)

Do 👇    
➜ about-us ✅  user_profile ✅ dashboard ✅ cart ✅

Don't 👇
➜ about us ❌ user+profile% ❌ shop9ing Cart; ❌

            `;
        },
        default() {
            return "dashboard"
        }
    })

    choices.nextjsRouteName = question["Nextjs Route Name"]

}