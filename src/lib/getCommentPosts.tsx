import API from "@/config/api";

export default async function getCommentPosts(postId: string) {
  const controller: AbortController = new AbortController();
  const endpoint: string = `comments?postId=${postId}`;

  try {
    const response: Response = await fetch(`${API}/${endpoint}`, {
      signal: controller.signal,
    });

    if (!response.ok) return null;

    return response.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      controller.abort;
      console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      controller.abort;
      console.log(error.message);
    } else {
      controller.abort;
      console.log(error);
    }
  }
}
