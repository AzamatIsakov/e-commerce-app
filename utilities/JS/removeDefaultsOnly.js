import { readdirSync, unlinkSync } from 'fs'
import { join } from 'path'

const baseDir = './data' // корневая директория

function walkAndRemoveDefaults(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) 
      walkAndRemoveDefaults(fullPath) // рекурсия по папкам
     else if (entry.isFile() && entry.name === 'default.json') 
      try {
        unlinkSync(fullPath)
        console.log(`Removed: ${fullPath}`)
      } catch (err) {
        console.error(`Error deleting ${fullPath}:`, err.message)
      }
    
  }
}

walkAndRemoveDefaults(baseDir)
