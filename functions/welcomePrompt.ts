// Imports --------->
import chalk from "chalk";
// import chalkAnimaion from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
//--------->


// Welcome Screen function

export default async function welcomePrompt(waitingPeriod: { (ms?: number): Promise<unknown>; (arg0: number): any; },
    compareVersion: { (): Promise<void>; (): any; }) {

    const welcomeMessage = `\n Welcome,  <React Outil /> 🧪 \n  \n» A CLI Tool to Generate React Components & CSS-Modules Files From the Termianl.`


    const chalkMessage = chalk.cyanBright.bold(welcomeMessage)



    figlet.text("< React Outil / >", {

        // font: "Whimsy",

        // horizontalLayout: "default",
        // verticalLayout: "default",
        width: 80,
        // whitespaceBreak: true,

    }, (err, data) => {

        console.log(gradient.cristal(data));
    })

    console.log(chalkMessage);


    await waitingPeriod(50)


    await compareVersion()


}