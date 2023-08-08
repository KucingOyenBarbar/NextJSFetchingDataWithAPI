import Link from "next/link";

export type postInfoProps = { userId?: number; name: string };
const PostInfo = ({ userId, name }: postInfoProps) => {
  return (
    <span className="d-inline">
      Post By{" "}
      <Link
        href={`/users/${userId}`}
        aria-label={`Posts By ${name}`}
        className="link-secondary link-offset-2 link-underline link-underline-opacity-0"
      >
        {name}
      </Link>{" "}
      | Publish{" "}
      {new Date().toLocaleTimeString("id-ID", {
        timeStyle: "long",
        timeZone: "Asia/Jakarta",
      })}
    </span>
  );
};

export default PostInfo;
