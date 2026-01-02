import { asTreeTextWith } from "@lionweb/class-core"
import { isINamed, nameOf, serializeLanguages } from "@lionweb/core"
import { mapFrom } from "@lionweb/ts-utils"
import { languageAsText, writeJsonAsFile } from "@lionweb/utilities"
import { asLionWebLanguage, readEcoreFile, TransformationOptions } from "@lionweb-xml/lionweb-ecore"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"
import { parseStringPromise } from "xml2js"
import { ReaderOptions } from "@lionweb-xml/lionweb-ecore/dist/reader.js"


const runOnce = async (filePath: string, options?: Partial<{ reader: ReaderOptions, transformation: TransformationOptions }>) => {
    const path = filePath.substring(0, filePath.lastIndexOf("/"))
    const fileNameWithExtension = filePath.substring(filePath.lastIndexOf("/") + 1)
    const [fileName] = fileNameWithExtension.split(".")

    console.log(`reading Ecore file: ${fileName}`)
    const xmlAsString = await readFile(filePath, { encoding: "utf8" })
    const xmlAsJson = await parseStringPromise(xmlAsString)
    // write result of parsing XML file using xml2js verbatim to a file, for introspection and type discovery:
    writeJsonAsFile(join(path, `${fileName}-parsed-as-.json`), xmlAsJson)

    const ePackage = await readEcoreFile(join(path, `${fileName}.ecore`), options?.reader)

    await writeFile(join(path, `${fileName}.read.txt`), asTreeTextWith((node) => isINamed(node) ? node.name : node.id)([ePackage]))

    const language = asLionWebLanguage(ePackage, "1", options?.transformation)
    writeJsonAsFile(join(path, `${fileName}.mapped-language.json`), serializeLanguages(language))
    await writeFile(join(path, `${fileName}.mapped-language.txt`), languageAsText(language))

    console.log(`...done generating artifacts for Ecore file: ${fileName}`)
    console.log()

    return ePackage
}


await runOnce("artifacts/ecore/Ecore.ecore")
await runOnce("artifacts/library/library.ecore")
await runOnce("artifacts/sysmlv2/kerml_lionweb.ecore")
await runOnce("artifacts/sysmlv2/SysML_lionweb.ecore")

const types = await runOnce("artifacts/sysmlv2/types.ecore", { transformation: { eDataTypesAsPrimitiveTypes: true } })
const typesByName = mapFrom(types.eClassifiers, nameOf, (v) => v)
const typesRefPrefix = "ecore:EDataType ../../org.eclipse.uml2.types/model/Types.ecore#//"
await runOnce("artifacts/sysmlv2/kerml.ecore", { reader: {
        externalETypeResolver: (eTypeRef: string) =>
            eTypeRef.startsWith(typesRefPrefix)
                ? typesByName[eTypeRef.substring(typesRefPrefix.length)]
                : undefined
    }})
await runOnce("artifacts/sysmlv2/SysML.ecore")

