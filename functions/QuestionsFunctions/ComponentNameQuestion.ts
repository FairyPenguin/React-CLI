import inquirer from "inquirer"
import { UserChoicesType } from "../../Data/UserChoices.js";


export default async function componentNameQuestion(choices: UserChoicesType) {

    const question = await inquirer.prompt({
        name: "Component Name",
        type: "input",
        validate: (input: string) => {
            const allowedCharacters = /^[a-zA-Z0-9_-]+$/;
            if (input.match(allowedCharacters)) {
                return true;
            }
            return `'Only alphanumeric characters and underscores are allowed.'
          
☑️ Letters (a-z, A-Z)
☑️ Numbers (0-9)
☑️ Underscore (_)

Do 👇    
➜ Button ✅  UserProfile ✅ ShoppingCart ✅ ButtonWithAnimation ✅

Don't 👇
➜ Animated  Button ❌ user+profile% ❌ shop9ing Cart; ❌

            `;
        },
        default() {
            return "MagicButton"
        }
    })

    choices.regularComponentsChoices.componentName = question["Component Name"]

}
