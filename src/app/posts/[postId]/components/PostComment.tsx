import { Col, Row } from "@/components/boostrap";

export type PostCommentProps = { promise: Promise<Comments[]> };

export default async function PostComment({ promise }: PostCommentProps) {
  const comments: Comments[] = await promise;

  const Comments = () => {
    return comments?.map((comment, index) => (
      <div
        key={index}
        className="card shadow-0 border-0 rounded mb-3"
        data-bs-theme="dark"
      >
        <div className="card-body">
          <div className="text-start text-white text-capitalize fs-6 fst-normal lh-1">
            {comment?.name} - {comment?.email}
          </div>
          <div className="pt-3">
            <p className="text-start text-white-50 fst-normal">
              {comment?.body}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Row className="justify-content-start g-2 ">
        <Col>
          <div>
            <h3 className="text-start text-white text-capitalize fs-3 fst-normal lh-1">
              Comments ({comments.length ? comments.length : 0})
            </h3>
          </div>
          <div className="px-0 mx-0 py-3">
            <Comments />
          </div>
        </Col>
      </Row>
    </>
  );
}
