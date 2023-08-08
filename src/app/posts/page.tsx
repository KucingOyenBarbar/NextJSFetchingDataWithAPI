import type { Metadata } from "next";
import { Col, Container, Row } from "@/components/boostrap";
import getAllPosts from "@/lib/getAllPosts";
import WelcomeMessage from "../components/WelcomeMessage";
import Link from "next/link";
import PostItem from "./components/PostItem";

export const metadata: Metadata = {
  title: "Welcome To My Posts👋😄",
  description: "My Posts",
};

export default async function PostsPage() {
  const postsData: Promise<Posts[]> = getAllPosts();
  const posts: Posts[] = await postsData;

  return (
    <Container>
      <Link
        href="/"
        aria-label="Back To Home"
        className="link-secondary link-offset-2 link-underline link-underline-opacity-0 mb-3"
      >
        Back To Home
      </Link>
      <WelcomeMessage message="Welcome To My Posts👋😄" />
      <hr className="text-secondary" />
      <PostItem posts={posts} />
    </Container>
  );
}
