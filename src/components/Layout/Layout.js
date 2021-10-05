import React from "react";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <section className="main">{children}</section>
      <Footer />
    </>
  );
}

export default Layout;
