// // Imports --------->
// import { createSpinner } from 'nanospinner';
// import chalk from "chalk";
// import gradient from "gradient-string";
// //--------->



// export default async function creationStatus(creationFunction: () => void,
//     waitingPeriod: (ms?: number) => Promise<unknown>) {

//     const spinner = createSpinner("\n No magic is happening🔮, just a function executing code to generate your files/folders in the file-system 🚦").start()

//     await waitingPeriod

//     const checkCreation = await creationFunction

//     if (checkCreation) {

//         spinner.success(chalk.bold(gradient.pastel(`
//             '🟢 Your component ${choices.componentName} files created successfully  ✅'`)))

//         const dateAndTime = new Date().toUTCString()
//         console.log(dateAndTime)

//     } else {

//         spinner.error()

//     }


// }