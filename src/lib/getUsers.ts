import API from "@/config/api";

export default async function getUsers(userId: string) {
  const endpoint: string = `users/${userId}`

  try {
    const response: Response = await fetch(`${API}/${endpoint}`)
   
    if (!response.ok) return
  
    return response.json()

  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
}