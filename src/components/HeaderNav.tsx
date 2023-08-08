"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

export default function HeaderNav() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="bg-black border-bottom border-dark shadow-none"
    >
      <Container>
        <Navbar.Brand className="mx-auto mx-lg-0 text-start text-capitalize text-white-50 fs-4 fst-medium user-select-none lh-1">
          <Image
            src="/next.svg"
            width="120"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
