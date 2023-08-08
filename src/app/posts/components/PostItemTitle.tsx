import Link from "next/link";

export type PostItemTitleProps = {
  title?: string | any;
  countTitle: number;
  postId?: number;
};

const PostItemTitle = ({ title, countTitle, postId }: PostItemTitleProps) => {
  return (
    <div className="post_item_title ">
      <Link
        href={`/posts/${postId}`}
        aria-label={`${title}`}
        className="link-offset-2 link-underline link-underline-opacity-10 text-start text-capitalize text-white fs-4 fst-bold"
      >
        {countTitle
          ? countTitle > 50
            ? `${title.slice(0, 50)}...`
            : title
          : null}
      </Link>
    </div>
  );
};

export default PostItemTitle;
