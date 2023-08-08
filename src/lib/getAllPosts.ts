import API from "@/config/api"
import next from "next"

export default async function getAllPosts() {
  const controller: AbortController = new AbortController
  const endpoint: string = `posts`

  try {
    const response: Response = await fetch(`${API}/${endpoint}`, {
      signal: controller.signal
    })

    if (!response.ok) throw new Error(`Connection Error HTTP status code ${response.status} `)
  
    return response.json()

  } catch (error) {

    if (error instanceof SyntaxError) {
      console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } else {
      console.log(error);
    }

    controller.abort
  }
}