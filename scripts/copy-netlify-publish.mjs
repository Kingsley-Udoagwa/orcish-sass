import { mkdir, rm, cp } from 'node:fs/promises'
import path from 'node:path'

const sourceDir = path.resolve('.output/public')
const targetDir = path.resolve('dist/client')

await rm(targetDir, { recursive: true, force: true })
await mkdir(path.dirname(targetDir), { recursive: true })
await cp(sourceDir, targetDir, { recursive: true })