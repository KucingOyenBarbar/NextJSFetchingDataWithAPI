import getAllPosts from "@/lib/getAllPosts";
import getCommentPosts from "@/lib/getCommentPosts";
import getPosts from "@/lib/getPosts";
import getUsers from "@/lib/getUsers";
import PostComment from "./components/PostComment";
import Post from "./components/Post";
import { Col, Container, Row } from "@/components/boostrap";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Params = { params: { postId: string } };

export async function generateMetadata({
  params: { postId },
}: Params): Promise<Metadata> {
  const postsData: Promise<Posts> = getPosts(postId);
  const posts: Posts = await postsData;

  return {
    title: `Posts: ${posts.title.length ? posts.title : null}`,
    description: `${posts?.body.length ? posts.body.substring(0, 20) : null}`,
  };
}

export async function generateStaticParams() {
  const postsData: Promise<Posts[]> = getAllPosts();
  const posts: Posts[] = await postsData;

  return posts?.map((post) => ({
    postId: post.id.toString(),
  }));
}

export default async function PostsDetails({ params: { postId } }: Params) {
  const postsData: Promise<Posts> = getPosts(postId);
  const posts: Posts = await postsData;
  const userData: Promise<User> = getUsers(posts?.userId);
  const user: User = await userData;

  if (!posts) return notFound();

  const commentsData: Promise<Comments[]> = getCommentPosts(postId);

  return (
    <Container>
      <Row className="justify-content-center py-5">
        <Col lg={6}>
          <Link
            href="/"
            aria-label="Back To Post"
            className="link-secondary link-offset-2 link-underline link-underline-opacity-0"
          >
            Back To Post
          </Link>
          <Post promise={postsData} user={user} />
          <PostComment promise={commentsData} />
        </Col>
      </Row>
    </Container>
  );
}
