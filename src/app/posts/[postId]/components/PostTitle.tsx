export type PostTitleProps = { title: string };

const PostTitle = ({ title }: PostTitleProps) => {
  return (
    <h3 className="text-start text-white-50 text-capitalize fs-3 fst-normal lh-1">
      {title}
    </h3>
  );
};

export default PostTitle;
