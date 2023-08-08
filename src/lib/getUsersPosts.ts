import API from "@/config/api"

export default async function getUsersPosts(userId: string) {
  const controller: AbortController = new AbortController()
  const endpoint: string = `posts?userId=${userId}`

  try {
    const response: Response = await fetch(`${API}/${endpoint}`, {
      cache: "no-store",
      signal: controller.signal
    })
    
    if (!response.ok) return undefined 
  
    return response.json()

  } catch (error) {

    if (error instanceof SyntaxError) {
      console.log(`JSON Error: ${error.message}`);
      controller.abort()
    } else if (error instanceof ReferenceError) {
      controller.abort()
      console.log(error.message);
    } else {
      controller.abort()
      console.log(error);
    }
  }
  
}