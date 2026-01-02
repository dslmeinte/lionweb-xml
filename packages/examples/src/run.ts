import { asTreeTextWith } from "@lionweb/class-core"
import { isINamed, serializeLanguages } from "@lionweb/core"
import { languageAsText, writeJsonAsFile } from "@lionweb/utilities"
import { asLionWebLanguage, readEcoreFile } from "@lionweb-xml/lionweb-ecore"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"
import { parseStringPromise } from "xml2js"


const runOnce = async (filePath: string) => {
    const path = filePath.substring(0, filePath.lastIndexOf("/"))
    const fileNameWithExtension = filePath.substring(filePath.lastIndexOf("/") + 1)
    const [fileName] = fileNameWithExtension.split(".")

    console.log(`reading Ecore file: ${fileName}`)
    const xmlAsString = await readFile(filePath, { encoding: "utf8" })
    const xmlAsJson = await parseStringPromise(xmlAsString)
    // write result of parsing XML file using xml2js verbatim to a file, for introspection and type discovery:
    writeJsonAsFile(join(path, `${fileName}-parsed-as-.json`), xmlAsJson)

    const ePackage = await readEcoreFile(join(path, `${fileName}.ecore`))

    await writeFile(join(path, `${fileName}.read.txt`), asTreeTextWith((node) => isINamed(node) ? node.name : node.id)([ePackage]))

    const language = asLionWebLanguage(ePackage, "1")
    writeJsonAsFile(join(path, `${fileName}.mapped-language.json`), serializeLanguages(language))
    await writeFile(join(path, `${fileName}.mapped-language.txt`), languageAsText(language))

    console.log(`...done generating artifacts for Ecore file: ${fileName}`)
    console.log()
}


await runOnce("artifacts/ecore/Ecore.ecore")
await runOnce("artifacts/library/library.ecore")
await runOnce("artifacts/sysmlv2/kerml_lionweb.ecore")
await runOnce("artifacts/sysmlv2/SysML_lionweb.ecore")

