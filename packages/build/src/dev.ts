import { writeJsonAsFile } from "@lionweb/utilities"
import { readFile } from "fs/promises"
import { join } from "path"
import { parseStringPromise } from "xml2js"


const runOnce = async (filePath: string) => {
    const xmlAsString = await readFile(filePath, { encoding: "utf8" })
    const xmlAsJson = await parseStringPromise(xmlAsString)

    const path = filePath.substring(0, filePath.lastIndexOf("/"))
    const fileNameWithExtension = filePath.substring(filePath.lastIndexOf("/") + 1)
    const [fileName] = fileNameWithExtension.split(".")

    // write result of parsing XML file using xml2js verbatim to a file, for introspection and type discovery:
    writeJsonAsFile(join(path, `${fileName}-parsed-as-.json`), xmlAsJson)
}


export const runDev = async () => {
    await runOnce("artifacts/ecore/Ecore.ecore")
    await runOnce("artifacts/library/library.ecore")
}

