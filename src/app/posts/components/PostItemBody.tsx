export type PostItemBodyProps = { title?: string | any; countBody: number };

const PostItemBody = ({ title, countBody }: PostItemBodyProps) => {
  return (
    <div className="post_item_body">
      <p className="text-start text-white-50 fs-6 fst-normal">
        {countBody
          ? countBody > 150
            ? `${title.slice(0, 150)}...`
            : title
          : null}
      </p>
    </div>
  );
};

export default PostItemBody;
