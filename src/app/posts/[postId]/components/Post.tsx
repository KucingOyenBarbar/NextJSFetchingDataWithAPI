import PostContent from "./PostContent";
import PostInfo from "./PostInfo";
import PostTitle from "./PostTitle";

export type Iprops = { promise: Promise<Posts>; user: User };

const Post = async ({ promise, user }: Iprops) => {
  const posts = await promise;

  return (
    <div className="py-3">
      <PostTitle title={posts?.title} />
      <PostInfo userId={user?.id} name={user?.name} />
      <PostContent content={posts?.body} />
    </div>
  );
};

export default Post;
