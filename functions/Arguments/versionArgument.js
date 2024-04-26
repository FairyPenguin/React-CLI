//

export default async function versionArgument(compareVersion) {

    const args = process.argv.slice(2)

    if (args.includes("-v") || args.includes("--v") || args.includes("--version") || args.includes("-version")) {

        await compareVersion()


        process.exit(0)
    }

}

