import PostItemAuthor from "./PostItemAuthor";
import PostItemBody from "./PostItemBody";
import PostItemTitle from "./PostItemTitle";

export type PostItemProps = { posts: Posts[] };

const PostItem = ({ posts }: PostItemProps) => (
  <div className="row justify-content-arround g-3 py-3">
    {posts?.map((post, index) => (
      <div key={index} className="col-12 col-lg-6 ">
        <div className="post_item">
          <PostItemAuthor userId={post?.userId} />
          <PostItemTitle
            title={post?.title}
            countTitle={post?.title.length}
            postId={post?.id}
          />
          <PostItemBody title={post?.body} countBody={post?.body.length} />
        </div>
      </div>
    ))}
  </div>
);

export default PostItem;
