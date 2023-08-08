import getUsers from "@/lib/getUsers";
import Link from "next/link";

export type PostItemAuthorProps = { userId: string };

const PostItemAuthor = async ({ userId }: PostItemAuthorProps) => {
  const postUserData: Promise<User> = getUsers(userId);
  const author: User = await postUserData;

  return (
    <div className="post_item_author text-white-50 text-start mb-2">
      Post By{" "}
      <Link
        href={`/users/${author?.id}`}
        aria-label={`Post By ${author?.name}`}
        className="link-secondary link-offset-2 link-underline link-underline-opacity-0 mb-3"
      >
        {author?.name.length
          ? author?.name.length > 50
            ? `${author?.name.slice(0, 50)}...`
            : author?.name
          : null}
      </Link>
    </div>
  );
};

export default PostItemAuthor;
