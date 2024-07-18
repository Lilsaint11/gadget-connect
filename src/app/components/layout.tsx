import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, showHeaderAndFooter = true }) => {
  return (
    <div>
      {showHeaderAndFooter && <Header />}
        {children}
      {showHeaderAndFooter && <Footer />}
    </div>
  );
};

export default Layout;