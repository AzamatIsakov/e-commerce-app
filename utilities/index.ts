import fs from 'fs'

export const getDataFromJSON = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    const jsonData = JSON.parse(data)

    // console.log(jsonData); // Данные из JSON

    return jsonData
  } catch (error) {
    console.error('Error reading the JSON file:', error)
  }
}
