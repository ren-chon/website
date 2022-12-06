import { Container, Card, Title } from "@mantine/core";
import type { NextPage } from "next";
import React from "react";
import Footer from "./Footer";
import { NavBar } from "./Navbar/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <NavBar />
      <Container maw="xl">
        <Card>
          <Title>Advertisement</Title>
        </Card>
        {children}
      </Container>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
