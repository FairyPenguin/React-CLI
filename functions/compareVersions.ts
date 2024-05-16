// Imports --------->
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';

import chalk from "chalk";
// import chalkAnimaion from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
//--------->

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

// get the package.josn file path
const packageJsonFilePath = path.join(__dirname, "../../package.json")

// Read the package.josn file
const packageJsonFile = JSON.parse(fs.readFileSync(packageJsonFilePath, "utf-8"))

const installedVersion = packageJsonFile.version


async function latestVersionFetcher(): Promise<string> {

    const packageLatestVersionURL = "https://registry.npmjs.org/react-outil/latest"

    // const latestVersionDummy = "0.2.0"

    try {
        const response = await fetch(packageLatestVersionURL)

        const versionData = await response.json()

        const latestVersion: string = versionData.version


        return latestVersion

    } catch (error) {
        console.error("Error occurred while fetching the latest version:", error);

        return null;

    }
}


async function compareVersion() {

    const lastestVersion = await latestVersionFetcher()

    let updateStatus = ""

    const updateCommandsNote = gradient.summer(`\n 
    🔽 Use one of these commands to update:\n
    ▶️ npm -g update react-outil@${lastestVersion}     //→ npm    
    ▶️ pnpm update -g react-outil@${lastestVersion}   //→ pnpm
    ▶️ yarn -g update react-outil@${lastestVersion}  //→ yarn`)

    if (installedVersion !== lastestVersion) {

        updateStatus =
            ` ${chalk.redBright.bold.underline.italic(`🔴UPDATE TO THE LATEST VERSION.`)} ${updateCommandsNote}`

    } else {

        updateStatus =
            chalk.greenBright.italic.underline.bold("✅YOU ARE USING THE LATEST VERSION.")
    }

    const versionMessage = `${gradient.fruit(`\n 🔵Installed-Version: ${installedVersion} ➡️ ⚪️Latest-Version: ${lastestVersion}`)} ${updateStatus}\n`


    console.log(versionMessage);

}

export { compareVersion }