import getUsers from "@/lib/getUsers";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Col, Container, Row } from "@/components/boostrap";
import WelcomeMessage from "@/app/components/WelcomeMessage";
import getUsersPosts from "@/lib/getUsersPosts";
import PostItem from "@/app/posts/components/PostItem";
import getAllUsers from "@/lib/getAllUsers";

export type Params = { params: { userId: string } };

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const usersData: Promise<User> = getUsers(userId);
  const users: User = await usersData;

  return {
    title: `Author - ${!users ? null : users?.name}`,
    description: `Detail post by author ${!users ? null : users?.name}`,
  };
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users: User[] = await usersData;

  return users?.map((user) => ({
    userId: user?.id.toString(),
  }));
}

export default async function usersPageDetails({ params: { userId } }: Params) {
  const usersData: Promise<User> = getUsers(userId);
  const postsData: Promise<Posts[]> = getUsersPosts(userId);

  const [users, posts] = await Promise.all([usersData, postsData]);

  if (!users) return notFound();

  return (
    <Container>
      <Link
        href="/"
        aria-label="Back To Post"
        className="link-secondary link-offset-2 link-underline link-underline-opacity-0"
      >
        Back To Post
      </Link>

      <hr className="text-secondary" />

      <Row className="justify-content-start g-2 py-3">
        <Col>
          <Row className="justify-content-start g-2">
            <Col>
              <WelcomeMessage
                message={`${posts?.length} posts by ${users?.name}`}
              />
            </Col>
          </Row>
          <PostItem posts={posts} />
        </Col>
      </Row>
    </Container>
  );
}
