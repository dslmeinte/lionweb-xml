import { asTreeTextWith } from "@lionweb/class-core"
import { isINamed } from "@lionweb/core"
import { writeFileSync } from "fs"
import { join } from "path"

import { readEcoreFile } from "./reader.js"


const artifactsPath = "../build/artifacts"

const process = async (name: string) => {
    const ecoreModel = await readEcoreFile(join(artifactsPath, `${name.toLowerCase()}/${name}.ecore`))
    writeFileSync(join(artifactsPath, `${name.toLowerCase()}/${name}.read.txt`), asTreeTextWith((node) => isINamed(node) ? node.name : node.id)([ecoreModel]))
    console.log(`read Ecore file: ${name}`)
}

await process("ecore", "Ecore")
await process("library", "library")
await process("sysmlv2", "kerml_lionweb")
await process("sysmlv2", "SysML_lionweb")

