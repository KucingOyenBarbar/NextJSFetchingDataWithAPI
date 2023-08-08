export type PostContentProps = { content: string };

const PostContent = ({ content }: PostContentProps) => {
  return (
    <p className="text-start text-white-50 fs-5 fst-normal  py-3">{content}</p>
  );
};

export default PostContent;
