// Imports --------->
import { createSpinner } from "nanospinner";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mustache from "mustache";
import chalk from "chalk";
import gradient from "gradient-string";
import { UserChoicesType } from "../../Data/UserChoices.js";

//--------->

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default async function createFilesAndFoldersForNextjs(
  choices: UserChoicesType,
  waitingPeriod: (ms?: number) => Promise<unknown>,
  addFramedRectangle: { (text: string): string; (arg0: string): any }
) {
  //  Check if the "choices.nextjsChoices" not undefined,
  //  before access the object

  const spinner = createSpinner(
    chalk.bgBlack.yellowBright.bold(
      "\n No magic is happening 🔮, just a function executing code ⚙️ to generate your files and folders in the file system🚦."
    )
  ).start();

  await waitingPeriod();

  try {
    if (
      choices.generalChocies.nextjsRouteOrRegularRecactComponent ===
      "Nextjs Route"
    ) {
      if (choices.nextjsChoices) {
        // Nextjs route path
        const nextjsRouteFolderPath = path.join(
          "./",
          `${choices.nextjsChoices.nextjsRouteName}`
        );

        // Nextjs file path (page.jsx/page.tsx)

        const nextjsRouteFilePath = path.join(
          `${nextjsRouteFolderPath}/`,
          `page.${choices.generalChocies.extention}`
        );

        // Nextjs Route  CSS file path

        const NextjsRouteCSSFilePath = path.join(
          `${nextjsRouteFolderPath}/`,
          `${choices.nextjsChoices.nextjsRouteName}.module.css`
        );

        const nextjsRouteData = {
          title: choices.nextjsChoices.nextjsRouteName,
          content: `${choices.nextjsChoices.nextjsRouteName} Route, Generated via React-Outil`,
          cssFileRelativePath: `${choices.nextjsChoices.nextjsRouteName}.module.css`,
        };

        // Template files

        // Function Keyword tempalte

        const functionKeywordTemplatePath = path.join(
          __dirname,
          "../../../templates/FunctionKeywordTemplate.txt"
        );

        const functionKeywordTemplate = fs.readFileSync(
          functionKeywordTemplatePath,
          "utf8"
        );

        // Const  tempalte

        const constTemplatePath = path.join(
          __dirname,
          "../../../templates/ConstTemplate.txt"
        );

        const constTemplate = fs.readFileSync(constTemplatePath, "utf8");

        const nextjsRouteFunctionKeywordOutput = mustache.render(
          functionKeywordTemplate,
          nextjsRouteData
        );

        const nextjsRouteConstOutput = mustache.render(
          constTemplate,
          nextjsRouteData
        );

        // Files & Folders Creation steps

        // 1- Create Folder
        fs.mkdirSync(nextjsRouteFolderPath);

        // 2- Create File (page.tsx/page.jsx)

        if (
          choices.generalChocies.constOrFunctionKeyword === "Function Keyword"
        ) {
          fs.writeFileSync(
            nextjsRouteFilePath,
            nextjsRouteFunctionKeywordOutput
          );
        }

        if (choices.generalChocies.constOrFunctionKeyword === "Const") {
          fs.writeFileSync(nextjsRouteFilePath, nextjsRouteConstOutput);
        }

        //  nested components folder step
        if (choices.nextjsChoices.nextjsNestedComponentsFolder === "Yes") {
          const nextRouteNestedComponentFolderPath = path.join(
            `${nextjsRouteFolderPath}/`,
            `${choices.nextjsChoices.nextjsRouteName}Components`
          );

          // 3- Create nested folder
          fs.mkdirSync(nextRouteNestedComponentFolderPath);

          if (choices.generalChocies.cssFile === "Yes") {
            fs.writeFileSync(NextjsRouteCSSFilePath, "/* CSS Module */");
          }
        }

        spinner.success({
          text: chalk.bold(
            gradient.pastel(`\n
                '🟢 Your nextjs route ⚜️ ${choices.nextjsChoices.nextjsRouteName} ⚜️ files created successfully  ✅'`)
          ),
        });
      }
    }
  } catch (error) {
    spinner.error({
      text: "\n ❌ Failed to create your Nextjs route ⚠️Check the error message and error explanation below 👇.\n",
    });

    if (error.code === "EEXIST" && error.errno === -17) {
      const errorMessage = chalk.redBright.bold(
        `    🔴Error Message: "file already exists"`
      );

      const errorMeaning = chalk.yellow.bold(`\n
ℹ️Error Explanation:  "The file already exists": → This means the component folder or file is already 
existing in your file system, and you are trying to duplicate it with the same name, 
which causes the error.`);

      console.error(addFramedRectangle(errorMessage), errorMeaning);
    } else {
      console.error(error);
    }
  }
}
