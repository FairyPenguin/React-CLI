
export type UserChoicesType = {

    generalChocies: {
        nextjsRouteOrRegularRecactComponent: string;
        constOrFunctionKeyword: string;
        extention: string;
        cssFile: string;
    };
    regularComponentsChoices?: {
        folderOrFile: string;
        nestedSubComponentsFolder: string;
        componentName: string;
    };
    nextjsChoices?: {
        nextjsNestedComponentsFolder: string;
        nextjsRouteName: string;
    };
}

let userChoices: UserChoicesType = {
    "generalChocies": {
        "nextjsRouteOrRegularRecactComponent": "",
        "constOrFunctionKeyword": "",
        "extention": "",
        "cssFile": ""
    },
    "regularComponentsChoices": {
        "folderOrFile": "",
        "nestedSubComponentsFolder": "",
        "componentName": "",
    },
    "nextjsChoices": {
        "nextjsNestedComponentsFolder": "",
        "nextjsRouteName": "",
    },

};


export default userChoices 