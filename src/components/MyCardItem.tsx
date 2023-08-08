import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Row } from "@/components/boostrap";
import { ReactNode, ReactElement } from "react";

export type MyCardProps = { children: ReactNode };

export const MyCard = ({ children }: MyCardProps) => {
  return (
    <div>
      <Row className="justify-content-center align-content-center g-3 py-3">
        {children}
      </Row>
    </div>
  );
};

export type MyCardItemListProps = {
  title?: string;
  count?: number;
  links: string;
};

export const MyCardItemList = ({
  title,
  count,
  links,
}: MyCardItemListProps) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <Card body className="myCard ">
        <h5 className="card-title text-white text-capitalize fst-normal">
          {title}
        </h5>
        <hr className="text-secondary w-50 mx-auto" />

        <div>
          <p className="text-white-50 text-capitalize fst-medium fs-4">
            {count}{" "}
            {title === "My Posts"
              ? "Posts"
              : title === "Users List"
              ? "Users"
              : null}
          </p>
        </div>

        <div className="py-3">
          <Link
            href={links}
            aria-label="View More"
            className="link-secondary link-offset-2 link-underline link-underline-opacity-0 fs-6 stretched-link"
          >
            View More
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export type MyCardItemProps = { totalPosts?: number; totalUsers?: number };

export default function MyCardItem({
  totalPosts,
  totalUsers,
}: MyCardItemProps) {
  return (
    <MyCard>
      <MyCardItemList
        title="Users List"
        count={!totalUsers ? 0 : totalUsers}
        links="/users"
      />
      <MyCardItemList
        title="My Posts"
        count={!totalPosts ? 0 : totalPosts}
        links="/posts"
      />
    </MyCard>
  );
}
