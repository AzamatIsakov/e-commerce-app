import fs from 'fs'

export const getDataFromJSON = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    const jsonData = JSON.parse(data)

    return jsonData
  } catch (error) {
    console.error('Error reading the JSON file:', error)
  }
}

export const fetchProduct = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/electronics/phones/smartphones/1/products.json`
    )

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)

    const text = await res.text() // Читаем как текст, чтобы обработать пустой ответ
    const data = text ? JSON.parse(text) : null

    console.log(data)

    if (!data || !data.items)
      throw new Error("Invalid JSON structure or missing 'items'")

    return data
  } catch (error) {
    console.error('Fetch error:', error)
    return null // Можно вернуть заглушку или пустой объект
  }
}
