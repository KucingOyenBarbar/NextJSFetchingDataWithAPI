import API from "@/config/api";

export default async function getAllUsers() {
  const controller: AbortController = new AbortController()
  const endpoint: string = `users`

  try {
    const response: Response = await fetch(`${API}/${endpoint}`, {
      signal: controller.signal
    })
   
    if (!response.ok) return undefined
  
    return response.json()

  } catch (error) {
    if (error instanceof SyntaxError) {
      controller.abort
      console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      controller.abort
      console.log(error.message);
    } else {
      controller.abort
      console.log(error);
    }
  }
}