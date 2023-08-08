import API from "@/config/api";

export default async function getCommentPosts(postId: string) {
  const endpoint: string = `comments?postId=${postId}`;

  try {
    const response: Response = await fetch(`${API}/${endpoint}`);

    if (!response.ok) return null;

    return response.json();
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
