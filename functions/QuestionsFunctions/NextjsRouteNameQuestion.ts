import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js";


export default async function NextjsRouteNameQuestion(choices: UserChoicesType) {

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

    if (choices.nextjsChoices) {
        choices.nextjsChoices.nextjsRouteName = question["Nextjs Route Name"]

    }
}